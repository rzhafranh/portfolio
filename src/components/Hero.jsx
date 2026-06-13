import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { heroData } from '../data';

const Hero = () => {
  const navButtons = [
    { name: 'About Me', path: '/about' },
    { name: 'Experiences', path: '/experiences' },
    { name: 'Projects', path: '/projects' },
    { name: 'Socials', path: '/socials' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-24">
      <div className="max-w-6xl w-full text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-[#00D9FF] via-[#B026FF] to-[#FF0080] bg-clip-text text-transparent neon-text">
            {heroData.mainTitle}
          </span>
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-4xl font-semibold mb-8 text-white/90"
        >
          {heroData.subtitle}
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-12"
        >
          {heroData.description}
        </motion.p>
        
        {/* Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {navButtons.map((button, index) => (
            <Link key={button.path} to={button.path}>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl font-bold text-xl relative group overflow-hidden"
              >
                {/* Animated gradient border */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#00D9FF] via-[#B026FF] to-[#FF0080] opacity-100 group-hover:opacity-0 transition-opacity duration-300" 
                     style={{ padding: '2px' }}>
                  <div className="absolute inset-[2px] rounded-xl bg-[#0A0A0F]"></div>
                </div>
                
                {/* Hover gradient background */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#00D9FF] via-[#B026FF] to-[#FF0080] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Text with gradient */}
                <span className="relative z-10 bg-gradient-to-r from-[#00D9FF] via-[#B026FF] to-[#FF0080] bg-clip-text text-transparent group-hover:text-white transition-all duration-300">
                  {button.name}
                </span>
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl bg-gradient-to-r from-[#00D9FF]/30 via-[#B026FF]/30 to-[#FF0080]/30"></div>
              </motion.button>
            </Link>
          ))}
        </motion.div>
        
        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 flex justify-center gap-4"
        >
          <div className="w-16 h-16 rounded-full bg-[#00D9FF]/20 blur-2xl"></div>
          <div className="w-16 h-16 rounded-full bg-[#B026FF]/20 blur-2xl"></div>
          <div className="w-16 h-16 rounded-full bg-[#FF0080]/20 blur-2xl"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
