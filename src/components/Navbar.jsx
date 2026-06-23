import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Play, Pause, Rewind, FastForward, Volume2, VolumeX } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useScrollSpy } from '../hooks/useScrollSpy';

const navItems = [
  { name: 'Home', id: 'hero' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Experiences', id: 'works' },
  { name: 'Socials', id: 'footer' },
];

// Tracks for compact player
const tracks = [
  { title: "Our Time", artist: "Martin Garrix", url: "/music/Our Time.mp3" },
  { title: "Butterflies", artist: "Martin Garrix", url: "/music/Butterflies.mp3" },
  { title: "Together", artist: "Martin Garrix", url: "/music/Together.mp3" }
];

const formatTime = (seconds) => {
  if (!seconds || isNaN(seconds)) return '0:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s < 10 ? '0' : ''}${s}`;
};

// All section IDs to watch (includes sections below Works that should still show Experiences as active)
const watchedSectionIds = ['hero', 'about', 'skills', 'works', 'experiences', 'gallery', 'footer'];

// Map sections not in navItems → their nav item equivalent
const navMap = {
  experiences: 'works',
  gallery: 'works',
  footer: 'footer',
};

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isSubPage = location.pathname !== '/';
  const activeSection = useScrollSpy(watchedSectionIds, 150, navMap);

  // ─── Theme toggle state ────────────────────────────────────────────────────
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved !== 'light';
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  // ─── Compact player state ─────────────────────────────────────────────────
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIdx, setCurrentTrackIdx] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);
  const currentTrack = tracks[currentTrackIdx];

  // Dispatch events to sync with floating SpotifyPlayer
  const dispatchPlayerEvent = (eventName, detail = {}) => {
    window.dispatchEvent(new CustomEvent(eventName, { detail }));
  };

  const togglePlay = () => {
    const next = !isPlaying;
    setIsPlaying(next);
    dispatchPlayerEvent(next ? 'player:play' : 'player:pause');
  };

  const toggleMute = () => {
    const next = !isMuted;
    setIsMuted(next);
    dispatchPlayerEvent('player:mute', { isMuted: next });
  };

  const handleNext = () => {
    const nextIdx = (currentTrackIdx + 1) % tracks.length;
    setCurrentTrackIdx(nextIdx);
    setIsPlaying(true);
    dispatchPlayerEvent('player:next');
  };

  const handlePrev = () => {
    const prevIdx = (currentTrackIdx - 1 + tracks.length) % tracks.length;
    setCurrentTrackIdx(prevIdx);
    setIsPlaying(true);
    dispatchPlayerEvent('player:prev');
  };

  const handleSeek = (e) => {
    if (!audioRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const p = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
    audioRef.current.currentTime = p * (audioRef.current.duration || 1);
    setProgress(p);
    dispatchPlayerEvent('player:seek', { progress: p });
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setProgress(audioRef.current.currentTime / (audioRef.current.duration || 1));
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current && !isNaN(audioRef.current.duration)) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleEnded = () => {
    handleNext();
  };

  // Sync audio element with isPlaying state
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
      if (isPlaying) {
        audioRef.current.play().catch((err) => {
          console.error("Sidebar player playback failed:", err);
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentTrackIdx, isMuted]);

  // Listen for state changes from the floating SpotifyPlayer
  useEffect(() => {
    const onSpotifyStateChange = (e) => {
      const { isPlaying: extPlaying, currentTrackIdx: extIdx } = e.detail;
      setIsPlaying((prev) => prev !== extPlaying ? extPlaying : prev);
      setCurrentTrackIdx((prev) => prev !== extIdx ? extIdx : prev);
    };
    window.addEventListener('spotify:state-change', onSpotifyStateChange);
    return () => {
      window.removeEventListener('spotify:state-change', onSpotifyStateChange);
    };
  }, []);

  // Navigate to section — handles cross-page navigation from subpages
  const scrollToSection = (id) => {
    setIsSidebarOpen(false);
    if (isSubPage) {
      // From subpage: navigate to landing page with scroll target
      navigate('/', { state: { scrollTo: id } });
    } else {
      // On landing page: scroll directly
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Mobile Menu Button - left side */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        type="button"
        onClick={() => setIsSidebarOpen(true)}
        className="fixed top-4 left-4 z-50 w-12 h-12 backdrop-blur-md bg-white/70 dark:bg-zinc-900/40 border border-zinc-200 dark:border-white/10 rounded-full flex items-center justify-center text-zinc-700 dark:text-white shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(0,0,0,0.5)] transition hover:bg-zinc-200 dark:hover:bg-white/10 md:hidden"
        aria-label="Open navigation menu"
      >
        <Menu className="h-5 w-5" />
      </motion.button>

      {/* Desktop Nav Bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[90vw] hidden md:block"
      >
        <div className="backdrop-blur-md bg-white/70 dark:bg-zinc-900/40 border border-zinc-200 dark:border-white/10 rounded-full px-6 py-3 flex items-center justify-center gap-6 md:gap-8 shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(0,0,0,0.5)]">
          
          {/* Desktop Nav */}
          <div className="flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = !isSubPage && activeSection === item.id;
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
        </div>
      </motion.nav>

      {/* Mobile Sidebar - from LEFT with ease animation */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            />
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              className="fixed left-0 top-0 z-50 h-full w-72 max-w-[85vw] border-r border-zinc-200 dark:border-white/10 bg-white/95 dark:bg-zinc-950/95 shadow-2xl backdrop-blur-xl md:hidden flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-zinc-200 dark:border-white/10 px-6 py-5 shrink-0">
                <span className="text-zinc-900 dark:text-white font-bold text-xl">Menu</span>
                <button
                  type="button"
                  onClick={() => setIsSidebarOpen(false)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100 dark:bg-white/10 text-zinc-700 dark:text-white transition hover:bg-zinc-200 dark:hover:bg-white/20"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Nav items - scrollable middle area */}
              <nav className="flex flex-col gap-2 p-4 mt-4 flex-1 overflow-y-auto">
                {navItems.map((item) => {
                  const isActive = !isSubPage && activeSection === item.id;
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

              {/* Bottom section: Theme Toggle + Compact Player */}
              <div className="shrink-0 px-4 pb-4 space-y-3 border-t border-zinc-200 dark:border-white/10 pt-4">

                {/* Theme Toggle */}
                <button
                  onClick={() => setIsDark(!isDark)}
                  className="w-full flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-white/5 hover:bg-zinc-100 dark:hover:bg-white/10"
                >
                  {isDark ? (
                    <>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/70">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                      </svg>
                      <span className="text-white/80 tracking-widest text-xs">DARK MODE</span>
                    </>
                  ) : (
                    <>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500">
                        <circle cx="12" cy="12" r="5" />
                        <line x1="12" y1="1" x2="12" y2="3" />
                        <line x1="12" y1="21" x2="12" y2="23" />
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                        <line x1="1" y1="12" x2="3" y2="12" />
                        <line x1="21" y1="12" x2="23" y2="12" />
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                      </svg>
                      <span className="text-amber-600 tracking-widest text-xs">LIGHT MODE</span>
                    </>
                  )}
                </button>

                {/* Compact Music Player */}
                <div className="rounded-xl border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-white/5 p-3">
                  {/* Track info */}
                  <div className="mb-2 overflow-hidden">
                    <p className="text-zinc-900 dark:text-white text-xs font-bold truncate">{currentTrack.title}</p>
                    <p className="text-zinc-500 dark:text-white/50 text-[10px] truncate">{currentTrack.artist}</p>
                  </div>

                  {/* Controls — grid ensures play/pause is perfectly centered over the slider */}
                  <div className="grid grid-cols-[1fr_auto_1.2fr] items-center mb-2">
                    {/* Left: Previous */}
                    <div className="flex justify-end">
                      <button onClick={handlePrev} className="text-zinc-500 hover:text-zinc-900 dark:text-white/60 dark:hover:text-white transition-colors">
                        <Rewind className="w-4 h-4 fill-current" />
                      </button>
                    </div>
                    {/* Center: Play/Pause — always aligned with slider center */}
                    <div className="flex justify-center px-4">
                      <button
                        onClick={togglePlay}
                        className="w-9 h-9 rounded-full bg-neon-cyan dark:bg-[#b7f09d] text-zinc-900 dark:text-black flex items-center justify-center hover:scale-105 transition-transform shadow-[0_0_12px_rgba(0,240,255,0.3)] dark:shadow-[0_0_12px_rgba(183,240,157,0.2)]"
                      >
                        {isPlaying
                          ? <Pause className="w-3.5 h-3.5 fill-current" />
                          : <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                        }
                      </button>
                    </div>
                    {/* Right: Next + Volume */}
                    <div className="flex justify-start gap-3">
                      <button onClick={handleNext} className="text-zinc-500 hover:text-zinc-900 dark:text-white/60 dark:hover:text-white transition-colors">
                        <FastForward className="w-4 h-4 fill-current" />
                      </button>
                      <button
                        onClick={toggleMute}
                        className={`transition-colors ${isMuted ? 'text-red-500 dark:text-red-400' : 'text-zinc-400 hover:text-zinc-700 dark:text-white/40 dark:hover:text-white'}`}
                      >
                        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Time Slider */}
                  <div
                    className="w-full h-1.5 bg-zinc-200 dark:bg-white/10 rounded-full overflow-hidden cursor-pointer mb-1.5"
                    onClick={handleSeek}
                  >
                    <div
                      className="h-full bg-zinc-700 dark:bg-white rounded-full"
                      style={{ width: `${progress * 100}%` }}
                    />
                  </div>

                  {/* Time labels */}
                  <div className="flex justify-between text-[10px] text-zinc-400 dark:text-white/40 font-mono font-medium">
                    <span>{formatTime(progress * duration)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Hidden audio element for compact player */}
      <audio
        ref={audioRef}
        src={currentTrack.url}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
        onError={(e) => console.error("Sidebar audio error:", e)}
        preload="auto"
        className="hidden"
      />
    </>
  );
};

export default Navbar;
