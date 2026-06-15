import { motion } from 'framer-motion';

// Using local project images instead of external URLs to avoid timeout issues
const galleryImages = [
  { id: 1, src: '/images/Gallery/AgriUX.webp'},
  { id: 2, src: '/images/Gallery/Himalkom24.webp'},
  { id: 3, src: '/images/Gallery/Himalkom25.webp'},
  { id: 4, src: '/images/Gallery/IAO23.webp'},
  { id: 5, src: '/images/Gallery/Inight23.webp'},
  { id: 6, src: '/images/Gallery/PI60.webp'},
  { id: 7, src: '/images/Gallery/SD23.webp'},
  { id: 8, src: '/images/Gallery/SD24.webp'},
  { id: 9, src: '/images/Gallery/UXToday.webp'},
  { id: 10, src: '/images/Gallery/gallery1.jpeg'},
  { id: 11, src: '/images/Gallery/gallery2.jpeg'},
  { id: 12, src: '/images/Gallery/gallery3.jpeg'},
  { id: 13, src: '/images/Gallery/gallery4.jpeg'},
  { id: 14, src: '/images/Gallery/gallery5.jpeg'},
  { id: 15, src: '/images/Gallery/gallery6.jpeg'},
  { id: 16, src: '/images/Gallery/gallery7.jpeg'},
  { id: 17, src: '/images/Gallery/gallery8.jpeg'},
  { id: 18, src: '/images/Gallery/gallery9.jpeg'},
  { id: 19, src: '/images/Gallery/gallery10.jpeg'},
  { id: 20, src: '/images/Gallery/gallery11.jpeg'},
  { id: 21, src: '/images/Gallery/gallery12.jpeg'},
  { id: 22, src: '/images/Gallery/gallery13.jpeg'},
  { id: 23, src: '/images/Gallery/gallery14.jpeg'},
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
              onError={(e) => { e.target.onerror = null; e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="220"><rect width="100%" height="100%" fill="%2318181b"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23666" font-family="sans-serif" font-size="14">Photo</text></svg>'; }}
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
