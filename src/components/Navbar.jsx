import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useScrollSpy } from '../hooks/useScrollSpy';

const navItems = [
  { name: 'Home', id: 'hero' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Experiences', id: 'works' },
];

// All section IDs to watch (includes sections below Works that should still show Experiences as active)
const watchedSectionIds = ['hero', 'about', 'skills', 'works', 'experiences', 'gallery', 'footer'];

// Map sections not in navItems → their nav item equivalent
const navMap = {
  experiences: 'works',
  gallery: 'works',
  footer: 'works',
};

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const activeSection = useScrollSpy(watchedSectionIds, 150, navMap);

  // Hide navbar on sub-pages (works, project detail)
  const isSubPage = location.pathname !== '/';
  if (isSubPage) return null;

  const scrollToSection = (id) => {
    setIsSidebarOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[90vw]"
      >
        <div className="backdrop-blur-md bg-white/70 dark:bg-zinc-900/40 border border-zinc-200 dark:border-white/10 rounded-full px-6 py-3 flex items-center justify-center gap-6 md:gap-8 shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(0,0,0,0.5)]">
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative text-sm transition-all duration-300 py-1 ${
                    isActive 
                      ? 'text-zinc-900 dark:text-white font-bold' 
                      : 'text-zinc-500 dark:text-white/60 hover:text-zinc-900 dark:hover:text-white'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div 
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-neon-cyan shadow-neon-cyan"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setIsSidebarOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 dark:bg-white/5 text-zinc-700 dark:text-white shadow-sm transition hover:bg-zinc-200 dark:hover:bg-white/10 md:hidden border border-zinc-200 dark:border-white/10"
            aria-label="Open navigation menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            />
            <motion.aside
              initial={{ x: 320, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 320, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 24 }}
              className="fixed right-0 top-0 z-50 h-full w-72 max-w-[85vw] border-l border-zinc-200 dark:border-white/10 bg-white/95 dark:bg-zinc-950/95 shadow-2xl backdrop-blur-xl md:hidden flex flex-col"
            >
              <div className="flex items-center justify-between border-b border-zinc-200 dark:border-white/10 px-6 py-5">
                <span className="text-zinc-900 dark:text-white font-bold text-xl">Menu</span>
                <button
                  type="button"
                  onClick={() => setIsSidebarOpen(false)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100 dark:bg-white/10 text-zinc-700 dark:text-white transition hover:bg-zinc-200 dark:hover:bg-white/20"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <nav className="flex flex-col gap-2 p-4 mt-4">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`text-left rounded-xl px-5 py-4 text-base transition-all duration-300 border border-transparent ${
                        isActive
                          ? 'bg-zinc-100 dark:bg-white/10 text-zinc-900 dark:text-white font-bold border-zinc-200 dark:border-white/20 shadow-[0_0_15px_rgba(0,240,255,0.1)]'
                          : 'text-zinc-600 dark:text-white/70 hover:bg-zinc-50 dark:hover:bg-white/5 hover:text-zinc-900 dark:hover:text-white'
                      }`}
                    >
                      <span className={isActive ? 'drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]' : ''}>
                        {item.name}
                      </span>
                    </button>
                  );
                })}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
