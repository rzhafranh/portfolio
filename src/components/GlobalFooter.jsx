import { Globe } from 'lucide-react';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaBehance, FaWhatsapp } from 'react-icons/fa';
import { socialsData } from '../data';

const getIcon = (iconName) => {
  switch (iconName.toLowerCase()) {
    case 'linkedin': return <FaLinkedin className="w-4 h-4" />;
    case 'github': return <FaGithub className="w-4 h-4" />;
    case 'instagram': return <FaInstagram className="w-4 h-4" />;
    case 'mail': return <FaEnvelope className="w-4 h-4" />;
    case 'behance': return <FaBehance className="w-4 h-4" />;
    case 'whatsapp': return <FaWhatsapp className="w-4 h-4" />;
    default: return <Globe className="w-4 h-4" />;
  }
};

const GlobalFooter = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="relative z-10 container mx-auto px-6 max-w-[90rem] pb-8 pt-4">
      <div className="flex flex-col items-center border-t border-zinc-200 dark:border-white/10 pt-8 gap-5">
        {/* Social icons + back to top centered */}
        <div className="flex items-center gap-3">
          {socialsData.socials.map((social) => (
            <a key={social.id} href={social.url} target="_blank" rel="noreferrer" title={social.name}
               className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 flex items-center justify-center text-zinc-500 dark:text-white/50 hover:text-cyan-600 dark:hover:text-neon-cyan hover:border-cyan-500 dark:hover:border-neon-cyan hover:shadow-[0_0_10px_rgba(6,182,212,0.15)] dark:hover:shadow-[0_0_10px_rgba(0,240,255,0.3)] transition-all"
            >
              {getIcon(social.icon)}
            </a>
          ))}
          <button onClick={scrollToTop} title="Back to top"
                  className="w-8 h-8 rounded-full border border-zinc-200 dark:border-white/10 flex items-center justify-center text-zinc-400 dark:text-white/40 hover:text-cyan-600 dark:hover:text-neon-cyan hover:border-cyan-500 dark:hover:border-neon-cyan transition-all text-xs font-bold"
          >↑</button>
        </div>
        {/* Copyright below */}
        <p className="text-zinc-400 dark:text-white/40 text-xs text-center">
          © {new Date().getFullYear()} Raihan Zhafran. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default GlobalFooter;
