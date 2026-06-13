import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { projectsData, getBadgeColor } from '../data';

const WorksPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/', { state: { scrollTo: 'works' } });
  };

  return (
    <div className="min-h-screen pt-32 pb-24 relative">
      <div className="fixed top-0 left-0 w-full h-64 bg-gradient-to-b from-neon-pink/10 to-transparent pointer-events-none z-0" />

      <div className="container mx-auto px-6 max-w-[90rem] relative z-10">
        <div className="mb-12">
          <button onClick={handleBack} className="flex items-center gap-2 text-zinc-500 hover:text-zinc-900 dark:text-white/50 dark:hover:text-white transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-bold uppercase tracking-wider">Back</span>
          </button>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-pink dark:text-white dark:bg-none"
          >
            All <span className="text-neon-pink">Works.</span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projectsData.map((project, index) => {
            const badge = getBadgeColor(project.type || project.types?.[0]);
            return (
              <Link to={`/project/${project.id}`} key={project.id + index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-2xl overflow-hidden hover:border-neon-pink/50 hover:shadow-[0_0_30px_rgba(255,0,127,0.15)] transition-all flex flex-col cursor-pointer"
                >
                  <div className="aspect-video overflow-hidden relative">
                    <div className="absolute inset-0 bg-neon-pink/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay" />
                    <img
                      src={project.images?.[0]}
                      alt={project.title}
                      className="w-full h-full object-cover filter brightness-75 group-hover:brightness-100 group-hover:scale-110 transition-all duration-700"
                      onError={(e) => { e.target.src = 'https://via.placeholder.com/600x400/18181b/ff007f?text=Project+Preview'; }}
                    />
                  </div>
                  <div className="p-5 relative flex-grow flex flex-col">
                    <div className="absolute -top-4 right-4 bg-zinc-100 dark:bg-zinc-950 border border-neon-pink/30 text-neon-pink text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {project.year}
                    </div>
                    <span className={`${badge.bg} text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider mb-3 self-start`}>
                      {badge.text}
                    </span>
                    <h4 className="text-base font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-neon-pink transition-colors line-clamp-2">{project.title}</h4>
                    <p className="text-zinc-500 dark:text-white/50 text-xs mb-4 line-clamp-2 flex-grow">{project.subtitle}</p>
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {project.technologies?.slice(0, 3).map((tech, i) => (
                        <span key={i} className="text-[10px] px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-white/60">{tech}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WorksPage;
