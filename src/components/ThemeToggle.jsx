import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  // Read from localStorage immediately to avoid flash — default is dark
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    // Only switch to light if user has explicitly chosen it
    return saved !== 'light';
  });

  // Apply theme class on mount and whenever isDark changes
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(prev => !prev);

  return (
    <motion.button
      onClick={toggleTheme}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 left-6 z-50 w-16 h-16 bg-white/10 dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-300/50 dark:border-white/10 rounded-full flex items-center justify-center text-zinc-700 dark:text-white/80 hover:text-neon-cyan dark:hover:text-neon-cyan hover:border-neon-cyan/50 dark:hover:border-neon-cyan/50 shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all"
      aria-label="Toggle Theme"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={isDark ? 'dark' : 'light'}
          initial={{ y: 10, opacity: 0, rotate: -45 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: -10, opacity: 0, rotate: 45 }}
          transition={{ duration: 0.2 }}
        >
          {isDark ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
};

export default ThemeToggle;

