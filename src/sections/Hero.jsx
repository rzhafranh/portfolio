import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Mesh Grid — Hero only */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 dark:opacity-100 pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 text-center flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full"
        >
          {/* Top text */}
          <motion.p 
            className="text-xs md:text-sm uppercase tracking-[0.3em] mb-4 md:mb-6 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-zinc-700 via-zinc-800 to-zinc-950 dark:bg-none dark:text-neon-cyan"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            WEB DEVELOPER & UI/UX DESIGNER
          </motion.p>

          {/* Massive Outline Text */}
          <motion.h1 
            className="text-[12vw] leading-none font-black tracking-tighter uppercase hero-outline-text"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            RAIHAN
          </motion.h1>

          {/* Massive Fill Text */}
          <motion.h1 
            className="text-[12vw] leading-none font-black tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-neon-purple via-neon-pink to-neon-cyan drop-shadow-[0_0_25px_rgba(255,0,127,0.35)] dark:text-white dark:bg-none dark:drop-shadow-[0_0_35px_rgba(255,255,255,0.4)] relative z-10 -mt-2 md:-mt-6"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            ZHAFRAN
          </motion.h1>

          {/* Bottom text */}
          <motion.p 
            className="text-[10px] md:text-xs text-zinc-500 dark:text-white/50 uppercase tracking-[0.4em] mt-6 md:mt-10 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            WHEN CREATIVE MINDS AND TECHNOLOGY MEETS
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        onClick={scrollToAbout}
      >
        <span className="text-[10px] uppercase tracking-widest text-zinc-500 dark:text-white/40">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }} 
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-8 h-12 rounded-full border-2 border-zinc-300 dark:border-white/20 flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-neon-cyan rounded-full shadow-[0_0_10px_rgba(0,240,255,0.8)]" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
