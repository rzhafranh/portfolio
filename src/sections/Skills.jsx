import { motion } from 'framer-motion';
import { aboutData } from '../data';
import * as Icons from 'lucide-react';

const getLucideIcon = (iconName) => {
  const formattedName = iconName
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
  
  const IconComponent = Icons[formattedName] || Icons.Mic;
  return <IconComponent size={38} strokeWidth={1.5} />;
};

const skillCategories = [
  {
    key: 'codingProgramming',
    label: 'Programming & Web Dev',
    borderColor: 'border-neon-pink/30 hover:border-neon-pink',
    shadow: 'hover:shadow-[0_0_20px_rgba(255,0,127,0.35)]',
    textColor: 'group-hover:text-neon-pink',
    dotColor: 'bg-neon-pink shadow-[0_0_8px_rgba(255,0,127,0.6)]',
    activeText: 'text-neon-pink',
  },
  {
    key: 'graphicDesignUIUX',
    label: 'Design & Editing',
    borderColor: 'border-blue-500/30 dark:border-blue-400/35 hover:border-blue-600 dark:hover:border-blue-400',
    shadow: 'hover:shadow-[0_0_20px_rgba(59,130,246,0.35)]',
    textColor: 'group-hover:text-blue-600 dark:group-hover:text-blue-400',
    dotColor: 'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]',
    activeText: 'text-blue-600 dark:text-blue-400',
  },
  {
    key: 'dataScience',
    label: 'Data Science & ML',
    borderColor: 'border-green-500/30 dark:border-green-400/35 hover:border-green-600 dark:hover:border-green-400',
    shadow: 'hover:shadow-[0_0_20px_rgba(74,222,128,0.35)]',
    textColor: 'group-hover:text-green-600 dark:group-hover:text-green-400',
    dotColor: 'bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)]',
    activeText: 'text-green-600 dark:text-green-400',
  },
  {
    key: 'other',
    label: 'Others',
    borderColor: 'border-cyan-500/30 dark:border-neon-cyan/35 hover:border-cyan-600 dark:hover:border-neon-cyan',
    shadow: 'hover:shadow-[0_0_20px_rgba(0,240,255,0.35)]',
    textColor: 'group-hover:text-cyan-600 dark:group-hover:text-neon-cyan',
    dotColor: 'bg-neon-cyan shadow-[0_0_8px_rgba(0,240,255,0.6)]',
    activeText: 'text-cyan-600 dark:text-neon-cyan',
  },
];

const Skills = () => {
  // Flatten skills with category metadata attached
  const allSkills = skillCategories.flatMap(cat =>
    (aboutData.hardSkills[cat.key] || []).map(skill => ({ ...skill, cat }))
  );

  return (
    <section id="skills" className="py-0">
      <div className="container mx-auto px-6 max-w-[90rem] py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">

          {/* Left Column — Sticky Freeze Frame */}
          <div className="lg:col-span-3 border-r border-zinc-200 dark:border-white/5 pr-10 relative hidden lg:block">
            <div className="sticky top-32 py-4">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-5xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-pink dark:text-white dark:bg-none"
              >
                Tech<span className="text-electric-blue drop-shadow-[0_0_15px_rgba(0,217,255,0.8)] dark:bg-none">.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-zinc-600 dark:text-white/50 text-sm leading-relaxed mb-8"
              >
                A curated collection of frameworks, tools, and languages I leverage to craft digital experiences.
              </motion.p>

              {/* Legend */}
              <div className="flex flex-col gap-3">
                {skillCategories.map(cat => (
                  <div key={cat.key} className="flex items-center gap-3">
                    <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${cat.dotColor}`} />
                    <span className="text-xs text-zinc-600 dark:text-white/60">{cat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column — Scrollable Skill Grid */}
          <div className="lg:col-span-9 py-4 lg:pl-10">
            {/* Mobile title */}
            <h2 className="text-4xl font-black tracking-tighter mb-2 lg:hidden text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-pink dark:text-white dark:bg-none">Tech<span className="text-electric-blue drop-shadow-[0_0_15px_rgba(0,217,255,0.8)] dark:bg-none">.</span></h2>
            <p className="text-zinc-600 dark:text-white/50 text-sm leading-relaxed mb-8 lg:hidden">A curated collection of frameworks, tools, and languages I leverage to craft digital experiences.</p>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6 gap-6">
              {allSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.25, delay: (index % 12) * 0.04 }}
                  whileHover={{ scale: 1.06 }}
                  className={`bg-white dark:bg-zinc-900 border ${skill.cat.borderColor} ${skill.cat.shadow} shadow-sm dark:shadow-none rounded-xl flex flex-col items-center justify-center gap-2.5 w-full aspect-square cursor-pointer group transition-all duration-300 p-3`}
                >
                  <div className="w-12 h-12 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <span className={`hidden text-xl font-bold w-full h-full items-center justify-center ${skill.cat.activeText}`}>
                      {skill.name.charAt(0)}
                    </span>
                  </div>
                  <span className={`text-[11px] sm:text-xs text-center font-medium text-zinc-500 dark:text-white/60 ${skill.cat.textColor} transition-colors line-clamp-2 leading-tight px-1`}>
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* Soft Skills Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 mt-20">

          {/* Left Column — Sticky Freeze Frame */}
          <div className="lg:col-span-3 border-r border-zinc-200 dark:border-white/5 pr-10 relative hidden lg:block">
            <div className="sticky top-32 py-4">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-5xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500 dark:text-white dark:bg-none"
              >
                Skills<span className="text-orange-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.8)] dark:bg-none">.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-zinc-600 dark:text-white/50 text-sm leading-relaxed mb-8"
              >
                Core competencies and interpersonal skills that drive my professional growth.
              </motion.p>
            </div>
          </div>

          {/* Right Column — Scrollable Skill Grid */}
          <div className="lg:col-span-9 py-4 lg:pl-10">
            {/* Mobile title */}
            <h2 className="text-4xl font-black tracking-tighter mb-2 lg:hidden text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500 dark:text-white dark:bg-none">Skills<span className="text-orange-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.8)] dark:bg-none">.</span></h2>
            <p className="text-zinc-600 dark:text-white/50 text-sm leading-relaxed mb-8 lg:hidden">Core competencies and interpersonal skills that drive my professional growth.</p>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6 gap-6">
              {aboutData.softSkills?.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.25, delay: (index % 12) * 0.04 }}
                  whileHover={{ scale: 1.06 }}
                  className={`bg-white dark:bg-zinc-900 border border-orange-500/30 hover:border-orange-500 shadow-sm hover:shadow-[0_0_20px_rgba(249,115,22,0.35)] dark:shadow-none rounded-xl flex flex-col items-center justify-center gap-2.5 w-full aspect-square cursor-pointer group transition-all duration-300 p-3`}
                >
                  <div className="w-12 h-12 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity text-zinc-600 dark:text-white/70 group-hover:text-orange-500">
                    {getLucideIcon(skill.icon)}
                  </div>
                  <span className={`text-[11px] sm:text-xs text-center font-medium text-zinc-500 dark:text-white/60 group-hover:text-orange-500 transition-colors line-clamp-2 leading-tight px-1`}>
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
