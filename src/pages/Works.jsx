import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { projectsData, getBadgeColor } from '../data';

const typeFilters = [
  { key: 'uiux', label: 'UI/UX' },
  { key: 'webdev', label: 'Web Dev' },
  { key: 'data', label: 'Data' },
  { key: 'ai', label: 'AI' },
];

const yearFilters = ['2026', '2025', '2024'];

const WorksPage = () => {
  const navigate = useNavigate();
  const [activeTypes, setActiveTypes] = useState([]);
  const [activeYears, setActiveYears] = useState([]);

  const handleBack = () => {
    navigate('/', { state: { scrollTo: 'works' } });
  };

  const toggleType = (type) => {
    setActiveTypes(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const toggleYear = (year) => {
    setActiveYears(prev =>
      prev.includes(year) ? prev.filter(y => y !== year) : [...prev, year]
    );
  };

  const filteredProjects = useMemo(() => {
    return projectsData.filter(project => {
      const projectTypes = project.types || (project.type ? [project.type] : []);
      const typeMatch = activeTypes.length === 0 || projectTypes.some(t => activeTypes.includes(t));
      const yearMatch = activeYears.length === 0 || activeYears.includes(project.year);
      return typeMatch && yearMatch;
    });
  }, [activeTypes, activeYears]);

  return (
    <div className="min-h-screen pt-32 pb-24 relative">
      <div className="fixed top-0 left-0 w-full h-64 bg-gradient-to-b from-neon-pink/10 to-transparent pointer-events-none z-0" />

      <div className="container mx-auto px-6 max-w-[90rem] relative z-10">
        <div className="mb-12">
          <button onClick={handleBack} className="flex items-center gap-2 text-zinc-500 hover:text-zinc-900 dark:text-white/50 dark:hover:text-white transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-bold uppercase tracking-wider">Back</span>
          </button>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-pink dark:text-white dark:bg-none"
            >
              All <span className="text-neon-pink">Works.</span>
            </motion.h1>

            {/* Filters */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-2 md:items-end"
            >
              <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 dark:text-white/50 font-black">Filter</span>
              {/* Type Filters */}
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-[10px] uppercase tracking-widest text-zinc-400 dark:text-white/40 font-bold mr-1">Type</span>
                {typeFilters.map(({ key, label }) => {
                  const isActive = activeTypes.includes(key);
                  return (
                    <button
                      key={key}
                      onClick={() => toggleType(key)}
                      className={`text-[11px] font-bold px-3 py-1.5 rounded-full border transition-all duration-200 uppercase tracking-wider ${
                        isActive
                          ? 'bg-neon-pink text-white border-neon-pink shadow-[0_0_12px_rgba(255,0,127,0.3)]'
                          : 'bg-transparent text-zinc-400 dark:text-white/30 border-zinc-300 dark:border-white/10 hover:border-neon-pink/50 hover:text-neon-pink'
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>

              {/* Year Filters */}
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-[10px] uppercase tracking-widest text-zinc-400 dark:text-white/40 font-bold mr-1">Year</span>
                {yearFilters.map(year => {
                  const isActive = activeYears.includes(year);
                  return (
                    <button
                      key={year}
                      onClick={() => toggleYear(year)}
                      className={`text-[11px] font-bold px-3 py-1.5 rounded-full border transition-all duration-200 tracking-wider ${
                        isActive
                          ? 'bg-neon-purple text-white border-neon-purple shadow-[0_0_12px_rgba(157,78,221,0.3)]'
                          : 'bg-transparent text-zinc-400 dark:text-white/30 border-zinc-300 dark:border-white/10 hover:border-neon-purple/50 hover:text-neon-purple'
                      }`}
                    >
                      {year}
                    </button>
                  );
                })}
              </div>

              {/* Reset Button — shown when any filter is active */}
              {(activeTypes.length > 0 || activeYears.length > 0) && (
                <button
                  onClick={() => { setActiveTypes([]); setActiveYears([]); }}
                  className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-white/30 hover:text-neon-pink dark:hover:text-neon-pink transition-colors underline underline-offset-2"
                >
                  Reset
                </button>
              )}
            </motion.div>
          </div>
        </div>

        {/* Project Grid */}
        {filteredProjects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-zinc-400 dark:text-white/30 text-lg font-medium">No projects match the selected filters.</p>
            <button
              onClick={() => { setActiveTypes([]); setActiveYears([]); }}
              className="mt-4 text-sm text-neon-pink hover:underline font-bold"
            >
              Reset all filters
            </button>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => {
                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link to={`/project/${project.id}`}>
                      <div className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-2xl overflow-hidden hover:border-neon-pink/50 hover:shadow-[0_0_30px_rgba(255,0,127,0.15)] transition-all flex flex-col cursor-pointer">
                        <div className="aspect-video overflow-hidden relative bg-zinc-900 dark:bg-zinc-950">
                          <div className="absolute inset-0 bg-neon-pink/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay" />
                          <img
                            src={project.images?.[0]}
                            alt={project.title}
                            className="w-full h-full object-cover filter brightness-75 group-hover:brightness-100 group-hover:scale-110 transition-all duration-700"
                            onError={(e) => { e.target.onerror = null; e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400"><rect width="100%" height="100%" fill="%2318181b"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ff007f" font-family="sans-serif" font-size="16" font-weight="bold">Project Preview</text></svg>'; }}
                          />
                          {/* Year badge — top right of image */}
                          <div className="absolute top-3 right-3 z-20 bg-black/50 backdrop-blur-sm border border-white/10 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                            {project.year}
                          </div>
                        </div>
                        <div className="p-5 flex-grow flex flex-col">
                          <div className="flex flex-wrap gap-1.5 mb-3">
                            {(project.types || (project.type ? [project.type] : [])).map((type, i) => {
                              const b = getBadgeColor(type);
                              return (
                                <span key={i} className={`${b.bg} text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider`}>
                                  {b.text}
                                </span>
                              );
                            })}
                          </div>
                          <h4 className="text-base font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-neon-pink transition-colors line-clamp-2">{project.title}</h4>
                          <p className="text-zinc-500 dark:text-white/50 text-xs mb-4 line-clamp-2 flex-grow">{project.subtitle}</p>
                          <div className="flex flex-wrap gap-1.5 mt-auto">
                            {project.technologies?.slice(0, 3).map((tech, i) => (
                              <span key={i} className="text-[10px] px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-white/60">{tech}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorksPage;
