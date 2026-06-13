import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle, AlertCircle, MapPin } from 'lucide-react';



const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (!response.ok || result.error) {
        console.error('API Error:', result.error);
        setStatus('error');
      } else {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (err) {
      console.error('Fetch Error:', err);
      setStatus('error');
    }
  };



  return (
    <footer id="footer" className="relative mt-0">
      <div className="absolute inset-0 border-t border-zinc-200 dark:border-white/5 z-0" />

      <div className="relative z-10 container mx-auto px-6 max-w-[90rem] pt-20 pb-12">

        {/* Main Contact Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 mb-20">

          {/* Left — Sticky Freeze Frame Title */}
          <div className="lg:col-span-4 border-r border-zinc-200 dark:border-white/5 pr-12 hidden lg:flex">
            <div className="sticky top-32 h-fit py-4 self-start">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-neon-pink font-bold tracking-widest uppercase text-xs mb-6 flex items-center gap-2"
              >
                <Mail className="w-3 h-3" /> Get in touch
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-5xl xl:text-7xl font-black tracking-tighter leading-none mb-6"
              >
                Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-purple">Talk!</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-zinc-500 dark:text-white/50 text-sm leading-relaxed mb-8 max-w-xs"
              >
                Ready to build something impactful? Have an exciting project idea or opportunity?
                I'd love to hear from you — drop me a message and let's make it happen.
              </motion.p>

              {/* Location Text */}
              <div className="flex items-center gap-2 text-zinc-400 dark:text-white/50 pt-2">
                <MapPin className="w-4 h-4 text-neon-pink" />
                <span className="text-xs tracking-wider uppercase">
                  <span className="font-normal">Based On</span> <span className="font-bold">Jakarta, Indonesia</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right — Contact Form */}
          <div className="lg:col-span-8 py-4 lg:pl-12">
            {/* Mobile title */}
            <div className="mb-10 lg:hidden">
              <p className="text-neon-pink font-bold tracking-widest uppercase text-xs mb-4 flex items-center gap-2"><Mail className="w-3 h-3" />Get in touch</p>
              <h2 className="text-5xl font-black tracking-tighter mb-4">Let's <span className="text-neon-pink">Talk!</span></h2>
              <p className="text-zinc-500 dark:text-white/50 text-sm">Ready to build something impactful? Drop me a message.</p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Name & Email row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-white/40">Your Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="bg-transparent border-b border-zinc-300 dark:border-white/20 focus:border-cyan-500 dark:focus:border-neon-cyan outline-none py-3 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-white/30 text-sm transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-white/40">Your Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="hello@example.com"
                    className="bg-transparent border-b border-zinc-300 dark:border-white/20 focus:border-cyan-500 dark:focus:border-neon-cyan outline-none py-3 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-white/30 text-sm transition-colors"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-white/40">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, idea, or opportunity..."
                  className="bg-transparent border-b border-zinc-300 dark:border-white/20 focus:border-cyan-500 dark:focus:border-neon-cyan outline-none py-3 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-white/30 text-sm resize-none transition-colors"
                />
              </div>

              {/* Submit + feedback */}
              <div className="flex items-center justify-between mt-2 flex-wrap gap-4">
                {status === 'success' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-green-600 dark:text-green-400 text-sm font-bold">
                    <CheckCircle className="w-4 h-4" /> Message sent! I'll get back to you soon.
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-red-600 dark:text-red-400 text-sm font-bold">
                    <AlertCircle className="w-4 h-4" /> Something went wrong. Please try again.
                  </motion.div>
                )}
                {(status === 'idle' || status === 'loading') && <span />}

                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="ml-auto w-14 h-14 bg-neon-pink rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,0,127,0.5)] hover:shadow-[0_0_50px_rgba(255,0,127,0.7)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading'
                    ? <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full" />
                    : <Send className="w-5 h-5 text-white" />
                  }
                </motion.button>
              </div>
            </form>
          </div>
        </div>


      </div>
    </footer>
  );
};

export default Footer;
