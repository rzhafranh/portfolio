import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, FastForward, Rewind, Shuffle, X, Volume2, VolumeX, Music, ChevronDown } from 'lucide-react';

const tracks = [
  {
    title: "Our Time",
    artist: "Martin Garrix",
    url: "/music/Our Time.mp3",
    cover: "/images/Our Time.jpg"
  },
  {
    title: "Butterflies",
    artist: "Martin Garrix",
    url: "/music/Butterflies.mp3",
    cover: "/images/Butterflies.jpg"
  },
  {
    title: "Together",
    artist: "Martin Garrix",
    url: "/music/Together.mp3",
    cover: "/images/Together.jpg"
  }
];

const formatTime = (seconds) => {
  if (!seconds || isNaN(seconds)) return '0:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s < 10 ? '0' : ''}${s}`;
};

const SpotifyPlayer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false); // State awal: paused
  const [currentTrackIdx, setCurrentTrackIdx] = useState(0);
  const [isLooping, setIsLooping] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const currentTrack = tracks[currentTrackIdx];

  const togglePlay = () => setIsPlaying(!isPlaying);

  const handleNext = () => {
    setCurrentTrackIdx((prev) => (prev + 1) % tracks.length);
    setIsPlaying(true);
  };
  
  const handlePrev = () => {
    setCurrentTrackIdx((prev) => (prev - 1 + tracks.length) % tracks.length);
    setIsPlaying(true);
  };

  const handleEnded = () => {
    if (isLooping) {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(console.error);
      }
    } else {
      handleNext();
    }
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

  const handleSeek = (e) => {
    if (!audioRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const p = (e.clientX - rect.left) / rect.width;
    audioRef.current.currentTime = p * duration;
    setProgress(p);
  };

  // Synchronize the HTML5 <audio> element with the isPlaying state
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch((err) => {
          console.error("Playback failed:", err);
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentTrackIdx]);

  return (
    <>
      {/* Menggunakan tag audio native HTML5 agar pemutaran file statis lebih stabil */}
      <audio
        ref={audioRef}
        src={currentTrack.url}
        muted={isMuted}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
        onError={(e) => console.error("HTML5 Audio Error:", e)}
        preload="auto"
        className="hidden"
      />

      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="mb-4 w-[280px] bg-white/95 dark:bg-zinc-950 border border-zinc-200 dark:border-white/5 rounded-[24px] shadow-[0_20px_45px_rgba(0,0,0,0.12)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.8)] backdrop-blur-md overflow-hidden transition-colors duration-500"
            >
              {/* Cover Image Header */}
              <div className="relative w-full aspect-square bg-zinc-900">
                <img 
                  src={currentTrack.cover} 
                  alt="Cover" 
                  className="w-full h-full object-cover" 
                  onError={(e) => { e.target.onerror = null; e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect width="100%" height="100%" fill="%2318181b"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23666" font-family="sans-serif" font-size="14">Cover</text></svg>'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-zinc-950 via-transparent to-black/30" />
                
                {/* Top Controls Overlay */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                  <div />
                  <button 
                    onClick={() => setIsOpen(false)} 
                    className="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 backdrop-blur-md transition-colors"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Player Body */}
              <div className="px-5 pb-6 pt-0 relative z-10 -mt-8">
                {/* Title & Artist */}
                <div className="flex flex-col overflow-hidden mb-5">
                  <h4 className="text-zinc-900 dark:text-white text-xl font-bold truncate tracking-tight mb-0.5">{currentTrack.title}</h4>
                  <p className="text-zinc-500 dark:text-white/60 text-sm truncate">{currentTrack.artist}</p>
                </div>

                {/* Main Playback Controls */}
                <div className="flex items-center justify-between mb-5">
                  <button onClick={() => setIsLooping(!isLooping)} className={`p-1 transition-colors ${isLooping ? 'text-cyan-600 dark:text-[#b7f09d]' : 'text-zinc-400 hover:text-zinc-800 dark:text-white/40 dark:hover:text-white'}`}>
                    <Shuffle className="w-5 h-5" />
                  </button>
                  
                  <div className="flex items-center gap-5">
                    <button onClick={handlePrev} className="text-zinc-600 hover:text-zinc-900 dark:text-white/80 dark:hover:text-white hover:scale-110 transition-all">
                      <Rewind className="w-6 h-6 fill-current" />
                    </button>
                    
                    <button 
                      onClick={togglePlay} 
                      className="w-14 h-14 rounded-full bg-neon-cyan dark:bg-[#b7f09d] text-zinc-900 dark:text-black flex items-center justify-center hover:scale-105 transition-transform shadow-[0_0_20px_rgba(0,240,255,0.3)] dark:shadow-[0_0_20px_rgba(183,240,157,0.2)]"
                    >
                      {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-1" />}
                    </button>
                    
                    <button onClick={handleNext} className="text-zinc-600 hover:text-zinc-900 dark:text-white/80 dark:hover:text-white hover:scale-110 transition-all">
                      <FastForward className="w-6 h-6 fill-current" />
                    </button>
                  </div>

                  <button onClick={() => setIsMuted(!isMuted)} className={`p-1 transition-colors ${isMuted ? 'text-red-500 dark:text-red-400' : 'text-zinc-400 hover:text-zinc-800 dark:text-white/40 dark:hover:text-white'}`}>
                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                  </button>
                </div>

                {/* Progress Bar */}
                <div>
                  <div 
                    className="w-full h-1.5 bg-zinc-200 dark:bg-white/10 rounded-full overflow-hidden cursor-pointer" 
                    onClick={handleSeek}
                  >
                    <div 
                      className="h-full bg-zinc-800 dark:bg-white rounded-full relative" 
                      style={{ width: `${progress * 100}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[11px] text-zinc-400 dark:text-white/40 mt-2 font-mono font-medium tracking-widest">
                    <span>{formatTime(progress * duration)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Closed State Toggle Button */}
        {!isOpen && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="w-16 h-16 rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.15)] dark:shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center group overflow-hidden relative ring-2 ring-zinc-200 dark:ring-white/10"
          >
            <img 
              src={currentTrack.cover} 
              alt="Cover" 
              className={`w-full h-full object-cover ${isPlaying ? 'animate-[spin_6s_linear_infinite]' : ''}`} 
              onError={(e) => { e.target.onerror = null; e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect width="100%" height="100%" fill="%2318181b"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23666" font-family="sans-serif" font-size="14">Cover</text></svg>'; }}
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/60 transition-colors">
              <Music className="w-6 h-6 text-white" />
            </div>
            {isPlaying && (
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-neon-cyan dark:bg-[#b7f09d] rounded-full border-2 border-white dark:border-zinc-900" />
            )}
          </motion.button>
        )}
      </div>
    </>
  );
};

export default SpotifyPlayer;
