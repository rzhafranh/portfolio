import { motion } from 'framer-motion';

const GlobalBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-zinc-50 dark:bg-zinc-950 transition-colors duration-500">
      {/* Breathing Glows — subtle, site-wide */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-neon-cyan/15 dark:bg-neon-cyan/20 rounded-full blur-[150px]"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-[35rem] h-[35rem] bg-neon-purple/15 dark:bg-neon-purple/20 rounded-full blur-[150px]"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        className="absolute top-3/4 left-1/3 w-[25rem] h-[25rem] bg-neon-pink/10 dark:bg-neon-pink/10 rounded-full blur-[120px]"
      />
    </div>
  );
};

export default GlobalBackground;
