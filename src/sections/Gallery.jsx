import { motion } from 'framer-motion';

// Using local project images instead of external URLs to avoid timeout issues
const galleryImages = [
  { id: 1, src: 'https://ik.imagekit.io/rzhafranh/Gallery/SD23.webp?updatedAt=1781498643523'},
  { id: 2, src: 'https://ik.imagekit.io/rzhafranh/Gallery/Himalkom24.webp?updatedAt=1781498643486'},
  { id: 3, src: 'https://ik.imagekit.io/rzhafranh/Gallery/PI60.webp?updatedAt=1781498643126'},
  { id: 4, src: 'https://ik.imagekit.io/rzhafranh/Gallery/SD24.webp?updatedAt=1781498641297'},
  { id: 5, src: 'https://ik.imagekit.io/rzhafranh/Gallery/gallery11.jpeg?updatedAt=1781498641219'},
  { id: 6, src: 'https://ik.imagekit.io/rzhafranh/Gallery/Himalkom25.jpeg'},
  { id: 7, src: 'https://ik.imagekit.io/rzhafranh/Gallery/gallery1.jpeg?updatedAt=1781498641236'},
  { id: 8, src: 'https://ik.imagekit.io/rzhafranh/Gallery/gallery14.jpeg?updatedAt=1781498637858'},
  { id: 9, src: 'https://ik.imagekit.io/rzhafranh/Gallery/UXToday.webp?updatedAt=1781498641250'},
  { id: 10, src: 'https://ik.imagekit.io/rzhafranh/Gallery/gallery1.jpeg?updatedAt=1781498641236'},
  { id: 11, src: 'https://ik.imagekit.io/rzhafranh/Gallery/gallery5.jpeg?updatedAt=1781498640684'},
  { id: 12, src: 'https://ik.imagekit.io/rzhafranh/Gallery/gallery2.jpeg?updatedAt=1781498640606'},
  { id: 13, src: 'https://ik.imagekit.io/rzhafranh/Gallery/gallery6.jpeg?updatedAt=1781498639803'},
  { id: 14, src: 'https://ik.imagekit.io/rzhafranh/Gallery/gallery4.jpeg?updatedAt=1781498639590'},
  { id: 15, src: 'https://ik.imagekit.io/rzhafranh/Gallery/gallery9.jpeg?updatedAt=1781498639553'},
  { id: 16, src: 'https://ik.imagekit.io/rzhafranh/Gallery/Inight23.webp?updatedAt=1781498639234'},
  { id: 17, src: 'https://ik.imagekit.io/rzhafranh/Gallery/gallery8.jpeg?updatedAt=1781498638885'},
  { id: 18, src: 'https://ik.imagekit.io/rzhafranh/Gallery/IAO23.webp?updatedAt=1781498638374'},
  { id: 19, src: 'https://ik.imagekit.io/rzhafranh/Gallery/AgriUX.webp?updatedAt=1781498637220'},
  { id: 20, src: 'https://ik.imagekit.io/rzhafranh/Gallery/gallery3.jpeg?updatedAt=1781498638041'},
  { id: 21, src: 'https://ik.imagekit.io/rzhafranh/Gallery/gallery13.jpeg?updatedAt=1781498637997'},
  { id: 22, src: 'https://ik.imagekit.io/rzhafranh/Gallery/gallery7.jpeg?updatedAt=1781498637699'},
  { id: 23, src: 'https://ik.imagekit.io/rzhafranh/Gallery/gallery12.jpeg?updatedAt=1781498637246'},
  { id: 24, src: 'https://ik.imagekit.io/rzhafranh/Gallery/gallery10.jpeg?updatedAt=1781498637146'},
];

const col1 = galleryImages.filter((_, i) => i % 3 === 0);
const col2 = galleryImages.filter((_, i) => i % 3 === 1);
const col3 = galleryImages.filter((_, i) => i % 3 === 2);

// Infinite scroll column component — doubled height for seamless looping
const ScrollColumn = ({ images, duration, delay = 0 }) => {
  const doubled = [...images, ...images];
  return (
    <div className="relative overflow-hidden" style={{ height: '1560px' }}>
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
