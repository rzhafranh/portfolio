import { useEffect, useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { FaGithub, FaFigma } from 'react-icons/fa';
import { SiGooglecolab, SiGoogledocs, SiGoogle } from 'react-icons/si';
import { projectsData, getBadgeColor } from '../data';

// Icon map — keys are lowercase for case-insensitive matching
const linkIconMap = {
  github: FaGithub,
  figma: FaFigma,
  colab: SiGooglecolab,
  googlecolab: SiGooglecolab,
  docs: SiGoogledocs,
  googledocs: SiGoogledocs,
  google: SiGoogle,
  link: ExternalLink,
};

const getLinkIcon = (iconName) => {
  if (!iconName) return ExternalLink;
  const Icon = linkIconMap[iconName.toLowerCase()];
  return Icon || ExternalLink;
};


const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find(p => p.id === id);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const allImages = project?.images || [];

  // Distribute images into left/right columns (left-to-right order)
  const { leftCol, rightCol } = useMemo(() => {
    const left = [], right = [];
    allImages.forEach((img, i) => {
      if (i % 2 === 0) left.push({ src: img, index: i });
      else right.push({ src: img, index: i });
    });
    return { leftCol: left, rightCol: right };
  }, [allImages.length]);

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/', { state: { scrollTo: 'works' } });
    }
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowLeft') setLightboxIndex(prev => Math.max(0, prev - 1));
      if (e.key === 'ArrowRight') setLightboxIndex(prev => Math.min(allImages.length - 1, prev + 1));
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxOpen]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightboxOpen]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4">Project not found</h1>
          <button onClick={handleBack} className="text-neon-pink flex items-center gap-2 mx-auto hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </button>
        </div>
      </div>
    );
  }

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen pb-24">
      {/* Hero Banner - sticks to top */}
      <div className="relative w-full h-[45vh] md:h-[55vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-50 dark:to-zinc-950 z-10" />
        <div className="absolute inset-0 bg-zinc-100/10 dark:bg-zinc-900/60 z-10" />
        {allImages[0] ? (
          <img src={allImages[0]} alt={project.title} className="w-full h-full object-cover object-top"
            onError={(e) => { e.target.style.background = '#18181b'; e.target.style.display = 'none'; }} />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-950 flex items-center justify-center">
            <span className="text-8xl font-black text-white/10">{project.title.charAt(0)}</span>
          </div>
        )}
        {/* Overlay glows */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-neon-pink/20 blur-[80px] z-0" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 max-w-[90rem] -mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left Info Column */}
          <div className="lg:col-span-4 xl:col-span-3">
            <button onClick={handleBack} className="flex items-center gap-2 text-zinc-500 hover:text-zinc-900 dark:text-white/50 dark:hover:text-white transition-colors mb-8 group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-bold uppercase tracking-wider">Back</span>
            </button>

            {/* Badge */}
            <div className="flex flex-wrap gap-2 mb-4">
              {(project.types || (project.type ? [project.type] : [])).map((type, i) => {
                const b = getBadgeColor(type);
                return (
                  <span key={i} className={`${b.bg} text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider`}>{b.text}</span>
                );
              })}
            </div>

            <h1 className="text-2xl md:text-3xl font-black mb-3 leading-snug text-zinc-900 dark:text-white">{project.title}</h1>
            <p className="text-neon-pink font-bold text-sm mb-6">{project.subtitle} · {project.year}</p>

            {/* Technologies */}
            {project.technologies && (
              <div className="mb-8">
                <h3 className="text-xs uppercase tracking-widest text-zinc-400 dark:text-white/40 mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-xs px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-700 dark:text-white/80 font-medium">{tech}</span>
                  ))}
                </div>
              </div>
            )}

            {/* Links */}
            {project.links && project.links.length > 0 && (
              <div className="flex flex-col gap-3">
                {project.links.map(link => {
                  const LinkIcon = getLinkIcon(link.icon);
                  return (
                    <a key={link.id} href={link.url} target="_blank" rel="noreferrer"
                      className="flex items-center gap-3 px-4 py-3 rounded-xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 hover:border-cyan-500 dark:hover:border-neon-cyan hover:bg-cyan-50 dark:hover:bg-neon-cyan/5 transition-all text-sm font-bold group text-zinc-800 dark:text-white"
                    >
                      <LinkIcon className="w-4 h-4 text-zinc-500 dark:text-white/60 group-hover:text-cyan-600 dark:group-hover:text-neon-cyan" />
                      <span className="group-hover:text-cyan-600 dark:group-hover:text-neon-cyan transition-colors">{link.label}</span>
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* Right Main Content */}
          <div className="lg:col-span-8 xl:col-span-9">
            {/* Description */}
            <div className="mb-12">
              <h2 className="text-sm uppercase tracking-widest text-zinc-400 dark:text-white/40 mb-4 border-b border-zinc-200 dark:border-white/10 pb-3">About this project</h2>
              <div
                className="text-zinc-600 dark:text-white/70 leading-relaxed text-base"
                dangerouslySetInnerHTML={{ __html: project.description || '<p>Description coming soon.</p>' }}
              />
            </div>

            {/* Image Gallery — True Masonry (native ratio + left-to-right) */}
            {allImages.length > 1 && (
              <div>
                <h2 className="text-sm uppercase tracking-widest text-zinc-400 dark:text-white/40 mb-6 border-b border-zinc-200 dark:border-white/10 pb-3">Gallery</h2>
                <div className="flex gap-5">
                  <div className="flex-1 flex flex-col gap-5">
                    {leftCol.map((item) => (
                      <motion.div
                        key={item.index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: item.index * 0.1 + 0.3 }}
                        className="rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/10 bg-zinc-100 dark:bg-zinc-900 cursor-pointer hover:border-neon-cyan/50 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] transition-all group"
                        onClick={() => openLightbox(item.index)}
                      >
                        <img
                          src={item.src}
                          alt={`${project.title} ${item.index + 1}`}
                          className="w-full h-auto block group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => { e.target.onerror = null; e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500"><rect width="100%" height="100%" fill="%2318181b"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23666" font-family="sans-serif" font-size="16">Preview</text></svg>'; }}
                        />
                      </motion.div>
                    ))}
                  </div>
                  <div className="flex-1 flex flex-col gap-5">
                    {rightCol.map((item) => (
                      <motion.div
                        key={item.index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: item.index * 0.1 + 0.3 }}
                        className="rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/10 bg-zinc-100 dark:bg-zinc-900 cursor-pointer hover:border-neon-cyan/50 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] transition-all group"
                        onClick={() => openLightbox(item.index)}
                      >
                        <img
                          src={item.src}
                          alt={`${project.title} ${item.index + 1}`}
                          className="w-full h-auto block group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => { e.target.onerror = null; e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500"><rect width="100%" height="100%" fill="%2318181b"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23666" font-family="sans-serif" font-size="16">Preview</text></svg>'; }}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center"
            onClick={() => setLightboxOpen(false)}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 z-[110] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image Counter */}
            <div className="absolute top-4 left-4 z-[110] text-white/70 text-sm font-medium bg-black/50 px-3 py-1.5 rounded-full">
              {lightboxIndex + 1} / {allImages.length}
            </div>

            {/* Left Arrow */}
            {lightboxIndex > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(prev => prev - 1); }}
                className="absolute left-4 z-[110] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Right Arrow */}
            {lightboxIndex < allImages.length - 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(prev => prev + 1); }}
                className="absolute right-4 z-[110] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            {/* Image */}
            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              src={allImages[lightboxIndex]}
              alt={`${project.title} ${lightboxIndex + 1}`}
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              onError={(e) => { e.target.onerror = null; e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500"><rect width="100%" height="100%" fill="%2318181b"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23666" font-family="sans-serif" font-size="16">Preview</text></svg>'; }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectDetail;
