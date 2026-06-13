import { motion } from 'framer-motion';

const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800', alt: 'Retro PC' },
  { id: 2, src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800', alt: 'Abstract Neon' },
  { id: 3, src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800', alt: 'Matrix Code' },
  { id: 4, src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800', alt: 'Code Setup' },
  { id: 5, src: 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=800', alt: 'Neon Lights' },
  { id: 6, src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800', alt: 'Server Room' },
  { id: 7, src: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=800', alt: 'Night Coding' },
  { id: 8, src: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=800', alt: 'UI Design' },
  { id: 9, src: 'https://images.unsplash.com/photo-1624953901718-de84f5de3c53?q=80&w=800', alt: 'Dark Workspace' },
  { id: 10, src: 'https://images.unsplash.com/photo-1581472723648-909f4851d4ae?q=80&w=800', alt: 'Creative Studio' },
  { id: 11, src: 'https://images.unsplash.com/photo-1543966888-7c1dc482a810?q=80&w=800', alt: 'Portfolio Design' },
  { id: 12, src: 'https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?q=80&w=800', alt: 'Creative Desk' },
];

const col1 = galleryImages.filter((_, i) => i % 3 === 0);
const col2 = galleryImages.filter((_, i) => i % 3 === 1);
const col3 = galleryImages.filter((_, i) => i % 3 === 2);

// Infinite scroll column component — doubled height for seamless looping
const ScrollColumn = ({ images, duration, delay = 0 }) => {
  const doubled = [...images, ...images];
  return (
    <div className="relative overflow-hidden" style={{ height: '1040px' }}>
      <motion.div
        className="flex flex-col gap-4"
        animate={{ y: ['0%', '-50%'] }}
        transition={{ duration, repeat: Infinity, ease: 'linear', delay }}
      >
        {doubled.map((img, i) => (
          <div key={i} className="rounded-xl overflow-hidden shrink-0 border border-zinc-200 dark:border-white/5 group">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-44 object-cover filter grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              loading="lazy"
              onError={(e) => { e.target.src = 'https://via.placeholder.com/400x220/18181b/333?text=Photo'; }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const Gallery = () => {
  return (
    <section id="gallery" className="relative py-0">
      <div className="container mx-auto px-6 max-w-[90rem] py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">

          {/* Left Column — Sticky Freeze Frame */}
          <div className="lg:col-span-3 border-r border-zinc-200 dark:border-white/5 pr-10 hidden lg:block">
            <div className="sticky top-32 py-4">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-5xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-pink dark:text-white dark:bg-none"
              >
                Gallery<span className="text-neon-purple drop-shadow-[0_0_15px_rgba(157,78,221,0.8)] dark:bg-none">.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-zinc-600 dark:text-white/50 text-sm leading-relaxed"
              >
                A visual log of events, projects, and moments that shaped my creative journey.
              </motion.p>
            </div>
          </div>

          {/* Right Column — Auto-scroll gallery */}
          <div className="lg:col-span-9 py-4 lg:pl-10 relative">
            <h2 className="text-4xl font-black tracking-tighter mb-8 lg:hidden text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-pink dark:text-white dark:bg-none">Gallery<span className="text-neon-purple drop-shadow-[0_0_15px_rgba(157,78,221,0.8)] dark:bg-none">.</span></h2>

            {/* Top/bottom fade masks */}
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-zinc-50 dark:from-zinc-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-zinc-50 dark:from-zinc-950 to-transparent z-10 pointer-events-none" />

            <div className="grid grid-cols-3 gap-4">
              <ScrollColumn images={col1} duration={30} delay={0} />
              <ScrollColumn images={col2} duration={38} delay={-6} />
              <ScrollColumn images={col3} duration={34} delay={-12} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Gallery;
