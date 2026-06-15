import { motion } from 'framer-motion';
import { aboutData } from '../data';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">

      {/* Decorative lines */}
      <div className="absolute left-0 top-1/4 w-1/3 h-[1px] bg-gradient-to-r from-neon-pink/0 via-neon-pink/50 to-transparent" />
      <div className="absolute right-0 bottom-1/4 w-1/3 h-[1px] bg-gradient-to-l from-neon-purple/0 via-neon-purple/50 to-transparent" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Left Column: Image & Decorative elements */}
          <motion.div variants={itemVariants} className="lg:col-span-5 relative">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 border border-white/10 rounded-3xl translate-x-4 translate-y-4" />
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 rounded-3xl blur-2xl opacity-50" />

              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-zinc-200 dark:border-white/20 bg-zinc-100 dark:bg-zinc-900/50 backdrop-blur-sm z-10 flex items-center justify-center p-8">
                <img
                  src={aboutData.photo}
                  alt={aboutData.name}
                  className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-6 top-1/4 bg-cyan-50/90 dark:bg-zinc-900/80 backdrop-blur-md border border-cyan-200/50 dark:border-white/10 px-4 py-2 rounded-xl shadow-lg z-20"
              >
                <span className="text-cyan-700 dark:text-neon-cyan font-bold tracking-wider text-sm">UI/UX</span>
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-6 bottom-1/4 bg-pink-50/90 dark:bg-zinc-900/80 backdrop-blur-md border border-pink-200/50 dark:border-white/10 px-4 py-2 rounded-xl shadow-lg z-20"
              >
                <span className="text-pink-700 dark:text-neon-pink font-bold tracking-wider text-sm">DEV</span>
              </motion.div>
              <motion.div
                animate={{ y: [-15, 15, -15] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-1 bottom-1/8 bg-purple-50/90 dark:bg-zinc-900/80 backdrop-blur-md border border-purple-200/50 dark:border-white/10 px-4 py-2 rounded-xl shadow-lg z-20"
              >
                <span className="text-purple-700 dark:text-neon-purple font-bold tracking-wider text-sm">DESIGN</span>
              </motion.div>
              <motion.div
                animate={{ y: [15, -15, 15] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-1 top-1/8 bg-green-50/90 dark:bg-zinc-900/80 backdrop-blur-md border border-green-200/50 dark:border-white/10 px-4 py-2 rounded-xl shadow-lg z-20"
              >
                <span className="text-green-700 dark:text-neon-green font-bold tracking-wider text-sm">IT</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Text content */}
          <motion.div variants={itemVariants} className="lg:col-span-7 flex flex-col justify-center">
            <h2 className="text-2xl md:text-5xl font-bold mb-6 text-zinc-900 dark:text-white">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-800 dark:from-neon-cyan dark:via-neon-pink dark:to-neon-purple">{aboutData.name}!</span>
            </h2>

            <div
              className="text-zinc-600 dark:text-white/70 text-lg leading-relaxed mb-8 prose prose-zinc dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: aboutData.description }}
            />

            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 backdrop-blur-sm hover:border-cyan-500/50 dark:hover:border-neon-cyan/50 transition-colors">
                <h4 className="text-4xl font-black text-cyan-600 dark:text-neon-cyan mb-2">2+</h4>
                <p className="text-zinc-500 dark:text-white/50 text-sm uppercase tracking-wider">Years Experience</p>
              </div>
              <div className="p-6 rounded-2xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 backdrop-blur-sm hover:border-pink-500/50 dark:hover:border-neon-pink/50 transition-colors">
                <h4 className="text-4xl font-black text-pink-600 dark:text-neon-pink mb-2">15+</h4>
                <p className="text-zinc-500 dark:text-white/50 text-sm uppercase tracking-wider">Projects Completed</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
