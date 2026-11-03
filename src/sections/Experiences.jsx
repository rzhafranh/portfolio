import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { professionalExperiences, organizationExperiences, getBadgeColor } from '../data';

const PLACEHOLDER_LOGO = 'https://ik.imagekit.io/rzhafranh/Experience/Mekari.png';

const resolveLogoSrc = (logo) => {
  if (!logo) return PLACEHOLDER_LOGO;
  if (logo.startsWith('./icons/')) return logo.replace('./icons/', '/icons/');
  if (logo.startsWith('./')) return logo.replace('./', '/');
  return logo;
};

const filterButtons = [
  {
    key: 'all',
    label: 'All',
    activeClass:
      'bg-zinc-900 text-white border-zinc-900 dark:bg-white dark:text-zinc-900 dark:border-white shadow-[0_0_12px_rgba(0,0,0,0.15)] dark:shadow-[0_0_12px_rgba(255,255,255,0.2)]',
    inactiveClass:
      'border-zinc-300 dark:border-white/20 text-zinc-600 dark:text-white/60 hover:border-zinc-400 dark:hover:border-white/40 hover:text-zinc-900 dark:hover:text-white bg-transparent',
  },
  {
    key: 'fulltime',
    label: 'Full Time',
    activeClass:
      'bg-purple-600 text-white border-purple-600 shadow-[0_0_12px_rgba(147,51,234,0.35)]',
    inactiveClass:
      'border-purple-500/60 dark:border-purple-400/60 text-purple-600 dark:text-purple-300 hover:border-purple-600 dark:hover:border-purple-300 hover:bg-purple-500/10 bg-transparent',
  },
  {
    key: 'internship',
    label: 'Internship',
    activeClass:
      'bg-teal-600 text-white border-teal-600 shadow-[0_0_12px_rgba(13,148,136,0.35)]',
    inactiveClass:
      'border-teal-600/60 dark:border-teal-400/60 text-teal-700 dark:text-teal-300 hover:border-teal-700 dark:hover:border-teal-300 hover:bg-teal-600/10 bg-transparent',
  },
  {
    key: 'organization',
    label: 'Organization',
    activeClass:
      'bg-red-400 text-white border-red-400 shadow-[0_0_12px_rgba(248,113,113,0.35)]',
    inactiveClass:
      'border-red-400/70 dark:border-red-400/60 text-red-600 dark:text-red-300 hover:border-red-500 dark:hover:border-red-300 hover:bg-red-400/10 bg-transparent',
  },
  {
    key: 'event',
    label: 'Event',
    activeClass:
      'bg-blue-400 text-white border-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.35)]',
    inactiveClass:
      'border-blue-400/70 dark:border-blue-400/60 text-blue-600 dark:text-blue-300 hover:border-blue-500 dark:hover:border-blue-300 hover:bg-blue-400/10 bg-transparent',
  },
];

const FilterButtons = ({ activeTypes, onToggle }) => (
  <div className="flex flex-wrap gap-2">
    {filterButtons.map((btn) => {
      const isActive =
        btn.key === 'all'
          ? activeTypes.length === 0
          : activeTypes.includes(btn.key);

      return (
        <button
          key={btn.key}
          onClick={() => onToggle(btn.key)}
          className={`text-[11px] font-bold px-3 py-1.5 rounded-full border transition-all duration-200 uppercase tracking-wider cursor-pointer ${
            isActive ? btn.activeClass : btn.inactiveClass
          }`}
        >
          {btn.label}
        </button>
      );
    })}
  </div>
);

const Experiences = () => {
  const allExp = useMemo(
    () => [...professionalExperiences, ...organizationExperiences],
    []
  );

  const [activeTypes, setActiveTypes] = useState([]);

  const toggleType = (key) => {
    if (key === 'all') {
      setActiveTypes([]);
      return;
    }
    setActiveTypes((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const filteredExp = useMemo(() => {
    if (activeTypes.length === 0) return allExp;

    return allExp.filter((exp) => {
      const type = exp.type?.toLowerCase();
      return activeTypes.some((key) => {
        if (key === 'fulltime') {
          return ['fulltime', 'full-time', 'professional'].includes(type);
        }
        return type === key;
      });
    });
  }, [activeTypes, allExp]);

  return (
    <section id="experiences" className="relative py-0">
      <div className="container mx-auto px-6 max-w-[90rem] py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">

          {/* Left Column — Sticky Freeze Frame */}
          <div className="lg:col-span-3 border-r border-zinc-200 dark:border-white/5 pr-10 hidden lg:block">
            <div className="sticky top-32 py-4 overflow-visible">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-5xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-pink dark:text-white dark:bg-none whitespace-nowrap"
              >
                Journey<span className="text-neon-green drop-shadow-[0_0_15px_rgba(57,255,20,0.8)] dark:bg-none">.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-zinc-600 dark:text-white/50 text-sm leading-relaxed mb-8"
              >
                A timeline of professional, internships, student organizations, and event leadership experiences.
              </motion.p>

              {/* Desktop Filters (Sticky Sidebar) */}
              <div className="pt-2">
                <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-400 dark:text-white/40 font-bold block mb-3">
                  Filter by Type
                </span>
                <FilterButtons activeTypes={activeTypes} onToggle={toggleType} />
              </div>
            </div>
          </div>

          {/* Right Column — Experience List */}
          <div className="lg:col-span-9 py-4 lg:pl-10">
            {/* Mobile title */}
            <h2 className="text-4xl font-black tracking-tighter mb-2 lg:hidden text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-pink dark:text-white dark:bg-none whitespace-nowrap">
              Journey<span className="text-neon-green drop-shadow-[0_0_15px_rgba(57,255,20,0.8)] dark:bg-none">.</span>
            </h2>
            <p className="text-zinc-600 dark:text-white/50 text-sm leading-relaxed mb-6 lg:hidden">
              A timeline of professional, internships, student organizations, and event leadership experiences.
            </p>

            {/* Mobile Filters */}
            <div className="mb-8 lg:hidden">
              <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-400 dark:text-white/40 font-bold block mb-3">
                Filter by Type
              </span>
              <FilterButtons activeTypes={activeTypes} onToggle={toggleType} />
            </div>

            <div className="flex flex-col divide-y divide-zinc-200 dark:divide-white/5">
              <AnimatePresence mode="popLayout">
                {filteredExp.length === 0 ? (
                <motion.div
                  key="empty-state"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="py-16 text-center border border-dashed border-zinc-200 dark:border-white/10 rounded-2xl p-8 my-4"
                >
                  <motion.div
                    animate={{ rotate: [0, 180, 180, 360], scale: [1, 1.1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="text-3xl mb-4 inline-block"
                  >
                    ⏳
                  </motion.div>
                                
                  <p className="text-zinc-700 dark:text-white/70 text-base font-semibold mb-2">
                    Full-time chapter: <span className="text-purple-600 dark:text-purple-300">coming soon</span>
                  </p>
                  <p className="text-zinc-400 dark:text-white/40 text-xs mb-5 max-w-xs mx-auto">
                    This slot is still unlocked and waiting. In the meantime, check out my internships,
                    projects, and organizations to see what I've been building.
                  </p>
                                
                  <button
                    onClick={() => setActiveTypes([])}
                    className="text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full border border-purple-500 text-purple-600 dark:text-purple-300 hover:bg-purple-600 hover:text-white transition-all cursor-pointer"
                  >
                    Explore Other Experiences →
                  </button>
                </motion.div>
                ) : (
                  filteredExp.map((exp, index) => (
                    <motion.div
                      key={`${exp.id}-${exp.type}-${index}`}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.3, delay: index * 0.02 }}
                      className="group py-7 flex flex-col md:flex-row md:items-start gap-4 md:gap-8 hover:bg-zinc-200/50 dark:hover:bg-white/[0.025] transition-colors px-4 -mx-4 rounded-2xl cursor-pointer"
                    >
                      {/* Left: Role + Details + Skill Tags */}
                      <div className="flex-1 min-w-0">
                        {/* Header: Logo + Title & Company */}
                        <div className="flex items-center gap-3.5 md:gap-4 mb-3">
                          {/* Logo container: rounded square matching height of title to company */}
                          <div className="w-12 h-12 md:w-[52px] md:h-[52px] shrink-0 rounded-xl bg-white dark:bg-zinc-800/90 border border-zinc-200 dark:border-white/10 p-1.5 flex items-center justify-center overflow-hidden shadow-xs">
                            <img
                              src={resolveLogoSrc(exp.logo)}
                              alt={exp.company || exp.title}
                              className="w-full h-full object-contain rounded-lg"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = PLACEHOLDER_LOGO;
                              }}
                            />
                          </div>

                          {/* Title & Company */}
                          <div className="min-w-0 flex-1 flex flex-col justify-center">
                            <h3 className="text-lg md:text-xl font-bold text-zinc-900 dark:text-white mb-0.5 group-hover:text-cyan-600 dark:group-hover:text-neon-cyan transition-colors leading-snug">
                              {exp.title}
                            </h3>
                            <h4 className="text-sm font-semibold text-zinc-500 dark:text-white/60">
                              {exp.company}
                            </h4>
                          </div>
                        </div>

                        <p className="text-sm text-zinc-500 dark:text-white/45 leading-relaxed line-clamp-3 mb-4">
                          {exp.shortDescription}
                        </p>

                        {/* Skill Tags */}
                        {exp.skills && exp.skills.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.slice(0, 6).map((skill, i) => (
                              <span
                                key={i}
                                className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-white/60 group-hover:border-cyan-500/30 dark:group-hover:border-neon-cyan/30 group-hover:text-cyan-600 dark:group-hover:text-neon-cyan/80 transition-all"
                              >
                                {skill.name}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Right: Period + Category Badge */}
                      <div className="shrink-0 md:w-36 md:text-right pt-1 flex flex-col items-end md:items-end gap-2">
                        <span className="text-xs font-bold text-zinc-400 dark:text-white/35 group-hover:text-purple-600 dark:group-hover:text-neon-purple transition-colors uppercase tracking-widest">
                          {exp.period}
                        </span>
                        {exp.type && (() => {
                          const b = getBadgeColor(exp.type);
                          return (
                            <span className={`${b.bg} text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider`}>
                              {b.text}
                            </span>
                          );
                        })()}
                      </div>
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experiences;
