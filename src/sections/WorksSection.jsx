import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { projectsData } from '../data';

const WorksSection = () => {
  return (
    <section id="works" className="scroll-mt-24 py-0">
      <div className="container mx-auto px-6 max-w-[90rem] py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">

          {/* Left Column — Sticky Freeze Frame */}
          <div className="lg:col-span-3 border-r border-zinc-200 dark:border-white/5 pr-10 hidden lg:block">
            <div className="sticky top-32 py-4">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-5xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-pink dark:text-white dark:bg-none"
              >
                Works<span className="text-neon-pink drop-shadow-[0_0_15px_rgba(255,0,127,0.8)] dark:bg-none">.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-zinc-600 dark:text-white/50 text-sm leading-relaxed mb-8"
              >
                A selection of my projects spanning web development, UI/UX design, and data science.
              </motion.p>
              <Link to="/works">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 text-sm font-bold tracking-wider uppercase text-neon-pink border border-neon-pink/30 hover:border-neon-pink px-5 py-2.5 rounded-full bg-neon-pink/5 hover:bg-neon-pink/15 transition-all group"
                >
                  More Works
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </div>
          </div>

          {/* Right Column — Scrollable Content */}
          <div className="lg:col-span-9 py-4 lg:pl-10">
            {/* Mobile title */}
            <div className="flex justify-between items-end mb-10 lg:hidden">
              <h2 className="text-4xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-pink dark:text-white dark:bg-none">Works<span className="text-neon-pink drop-shadow-[0_0_15px_rgba(255,0,127,0.8)] dark:bg-none">.</span></h2>
              <Link to="/works" className="flex items-center gap-2 text-sm font-bold text-neon-pink">
                More Works <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {projectsData.slice(0, 3).map((project, index) => (
                <Link to={`/project/${project.id}`} key={project.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-2xl overflow-hidden hover:border-neon-pink/50 hover:shadow-[0_0_30px_rgba(255,0,127,0.15)] transition-all h-full flex flex-col cursor-pointer"
                  >
                    <div className="aspect-video overflow-hidden relative">
                      <div className="absolute inset-0 bg-neon-pink/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay" />
                      <img
                        src={project.images?.[0]}
                        alt={project.title}
                        className="w-full h-full object-cover filter brightness-75 group-hover:brightness-100 group-hover:scale-110 transition-all duration-700"
                        onError={(e) => { e.target.onerror = null; e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400"><rect width="100%" height="100%" fill="%2318181b"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ff007f" font-family="sans-serif" font-size="16" font-weight="bold">Project</text></svg>'; }}
                      />
                    </div>
                    <div className="p-5 relative flex-grow flex flex-col">
                      <div className="absolute -top-4 right-4 bg-zinc-100 dark:bg-zinc-950 border border-neon-pink/30 text-neon-pink text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        {project.year}
                      </div>
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
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WorksSection;
