import { motion } from 'framer-motion';
import { professionalExperiences, organizationExperiences, getBadgeColor } from '../data';

const Experiences = () => {
  const allExp = [...professionalExperiences, ...organizationExperiences];

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
                className="text-zinc-600 dark:text-white/50 text-sm leading-relaxed"
              >
                A timeline of professional, internships, student organizations, and event leadership experiences.
              </motion.p>
            </div>
          </div>

          {/* Right Column — Experience List */}
          <div className="lg:col-span-9 py-4 lg:pl-10">
            {/* Mobile title */}
            <h2 className="text-4xl font-black tracking-tighter mb-8 lg:hidden text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-pink dark:text-white dark:bg-none whitespace-nowrap">Journey<span className="text-neon-green drop-shadow-[0_0_15px_rgba(57,255,20,0.8)] dark:bg-none">.</span></h2>

            <div className="flex flex-col divide-y divide-zinc-200 dark:divide-white/5">
              {allExp.map((exp, index) => (
                <motion.div
                  key={exp.id + index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  className="group py-7 flex flex-col md:flex-row md:items-start gap-4 md:gap-8 hover:bg-zinc-200/50 dark:hover:bg-white/[0.025] transition-colors px-4 -mx-4 rounded-2xl cursor-pointer"
                >
                  {/* Left: Role + Details + Skill Tags */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-bold text-zinc-900 dark:text-white mb-1 group-hover:text-cyan-600 dark:group-hover:text-neon-cyan transition-colors">
                      {exp.title}
                    </h3>
                    <h4 className="text-sm font-semibold text-zinc-500 dark:text-white/60 mb-3">
                      {exp.company}
                    </h4>
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
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experiences;
