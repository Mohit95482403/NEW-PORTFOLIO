import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'Job Opening',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const inquiryOptions = [
    { label: 'Job Opening', icon: '💼' },
    { label: 'Web Project', icon: '⚡' },
    { label: 'Collaboration', icon: '🤝' },
    { label: 'Say Hello', icon: '👋' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSent(true);
    }, 600);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('chaudharinandni2403@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="contact"
      className="relative w-full bg-[#050403] text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-24 pb-14 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* Ambient Studio Backlighting */}
      <div className="absolute top-1/4 left-1/5 w-[40rem] h-[40rem] bg-[#D4AF37]/5 rounded-full blur-[190px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[36rem] h-[36rem] bg-[#8C6D4F]/5 rounded-full blur-[180px] pointer-events-none" />

      {/* Subtle Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)`,
          backgroundSize: '72px 72px',
        }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* ================= HEADER SECTION ================= */}
        <div className="mb-14">
          {/* Eyebrow Header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-4 mb-6"
          >
            <span
              className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              06 / GET IN TOUCH
            </span>
            <div className="w-24 h-[1px] bg-gradient-to-r from-[#D4AF37]/90 via-[#8C6D4F]/40 to-transparent" />
            <span className="hidden sm:inline-flex items-center space-x-2 px-2.5 py-0.5 border border-[#D4AF37]/30 bg-[#14100D] rounded-full text-[9px] font-mono text-[#D4AF37]">
              <span>AVAILABLE FOR HIRE</span>
            </span>
          </motion.div>

          {/* Section Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-6"
          >
            <h2
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.8rem] tracking-tight uppercase leading-[0.84] select-none"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                LET&apos;S TALK.
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
                SEND ME A MESSAGE.
              </span>
            </h2>

            <p
              className="text-xs sm:text-sm font-light text-[#A8988B] leading-relaxed max-w-md"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              I am actively looking for Software Developer roles, entry-level opportunities, and internships. Whether you have an open position, an idea to discuss, or just want to connect, I&apos;d love to hear from you!
            </p>
          </motion.div>
        </div>

        {/* ================= MAIN SPLIT GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-24">

          {/* ================= LEFT COLUMN: CONTACT DETAILS (5 COLS) ================= */}
          <div className="lg:col-span-5 space-y-4">

            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="p-5 rounded-xl border border-[#8C6D4F]/35 bg-[#0D0A08]/90 backdrop-blur-xl relative overflow-hidden group hover:border-[#D4AF37]/80 hover:shadow-[0_10px_35px_rgba(212,175,55,0.1)] transition-all duration-500"
            >
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-lg border border-[#8C6D4F]/40 bg-[#16120F] flex items-center justify-center text-[#D4AF37] group-hover:border-[#D4AF37] group-hover:scale-105 transition-all">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-[9.5px] font-mono tracking-[0.2em] text-[#8C6D4F] uppercase">
                      EMAIL ADDRESS
                    </span>
                    <span className="text-sm font-medium text-white group-hover:text-[#F7E7C4] transition-colors break-all">
                      chaudharinandni2403@gmail.com
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2 pt-3 border-t border-[#8C6D4F]/20">
                <a
                  href="mailto:chaudharinandni2403@gmail.com"
                  className="flex-1 py-2 px-3 text-center text-[10.5px] font-mono uppercase tracking-wider border border-[#8C6D4F]/40 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 text-[#E8DFD8] hover:text-[#F7E7C4] rounded-sm transition-all"
                >
                  SEND EMAIL ↗
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="py-2 px-3 text-[10.5px] font-mono uppercase tracking-wider border border-[#8C6D4F]/40 hover:border-[#D4AF37] text-[#BFA895] hover:text-white rounded-sm transition-all cursor-pointer"
                >
                  {copiedEmail ? '✓ COPIED' : 'COPY EMAIL'}
                </button>
              </div>
            </motion.div>

            {/* Phone & WhatsApp Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="p-5 rounded-xl border border-[#8C6D4F]/35 bg-[#0D0A08]/90 backdrop-blur-xl relative overflow-hidden group hover:border-[#D4AF37]/80 hover:shadow-[0_10px_35px_rgba(212,175,55,0.1)] transition-all duration-500"
            >
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-lg border border-[#8C6D4F]/40 bg-[#16120F] flex items-center justify-center text-[#D4AF37] group-hover:border-[#D4AF37] group-hover:scale-105 transition-all">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-[9.5px] font-mono tracking-[0.2em] text-[#8C6D4F] uppercase">
                      PHONE &amp; WHATSAPP
                    </span>
                    <span className="text-sm font-medium text-white group-hover:text-[#F7E7C4] transition-colors">
                      +91 9175181306
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2 pt-3 border-t border-[#8C6D4F]/20">
                <a
                  href="tel:9175181306"
                  className="flex-1 py-2 px-3 text-center text-[10.5px] font-mono uppercase tracking-wider border border-[#8C6D4F]/40 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 text-[#E8DFD8] hover:text-[#F7E7C4] rounded-sm transition-all"
                >
                  CALL DIRECTLY ↗
                </a>
                <a
                  href="https://wa.me/919175181306?text=Hi%20Nayana,%20I%20saw%20your%20portfolio%20and%20wanted%20to%20reach%20out!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 text-center text-[10.5px] font-mono uppercase tracking-wider border border-[#8C6D4F]/40 hover:border-[#25D366] hover:bg-[#25D366]/10 text-[#E8DFD8] hover:text-[#25D366] rounded-sm transition-all"
                >
                  WHATSAPP ↗
                </a>
              </div>
            </motion.div>

            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="p-5 rounded-xl border border-[#8C6D4F]/35 bg-[#0D0A08]/90 backdrop-blur-xl relative overflow-hidden group hover:border-[#D4AF37]/80 transition-all duration-500"
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-9 h-9 rounded-lg border border-[#8C6D4F]/40 bg-[#16120F] flex items-center justify-center text-[#D4AF37]">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-[9.5px] font-mono tracking-[0.2em] text-[#8C6D4F] uppercase">
                    LOCATION
                  </span>
                  <span className="text-sm font-medium text-white">
                    Jalgaon, Maharashtra, India
                  </span>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-[#8C6D4F]/20 flex items-center justify-between text-[10px] font-mono text-[#A8988B]">
                <span>TIMEZONE: IST (UTC +5:30)</span>
                <span className="text-[#D4AF37]">OPEN TO REMOTE &amp; RELOCATION</span>
              </div>
            </motion.div>

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="p-4 rounded-xl border border-[#D4AF37]/40 bg-[#120E0A]/90 flex items-center space-x-3 shadow-[0_0_25px_rgba(212,175,55,0.08)]"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#D4AF37]" />
              </span>
              <div>
                <span className="block text-[10.5px] font-mono font-semibold tracking-wider text-[#F7E7C4] uppercase">
                  OPEN TO SOFTWARE DEVELOPER OPPORTUNITIES
                </span>
                <span className="text-[10px] text-[#A8988B] font-light">
                  Full-time roles, software engineering, and internships
                </span>
              </div>
            </motion.div>

          </div>

          {/* ================= RIGHT COLUMN: MESSAGE FORM (7 COLS) ================= */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85 }}
            className="lg:col-span-7 relative w-full rounded-2xl border border-[#8C6D4F]/40 bg-[#0A0806]/95 backdrop-blur-2xl shadow-[0_30px_90px_rgba(0,0,0,0.98)] overflow-hidden"
          >
            {/* Top Metallic Light Bar */}
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent" />

            {/* Corner Pins */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]/60" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]/60" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]/60" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]/60" />

            {/* Window Header */}
            <div className="h-10 bg-[#120F0C] border-b border-[#8C6D4F]/30 px-5 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#E0564C]/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#E0A84C]/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#4CE085]/80" />
                <span className="text-[10px] font-mono tracking-widest text-[#8C6D4F] uppercase ml-2">
                  SEND A MESSAGE
                </span>
              </div>
              <span className="text-[9.5px] font-mono text-[#D4AF37]">
                RESPONDS PROMPTLY
              </span>
            </div>

            <div className="p-6 sm:p-10">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-14 text-center space-y-4"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border-2 border-[#D4AF37] text-[#D4AF37] text-2xl shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                    ✓
                  </div>
                  <h3
                    className="text-4xl text-white font-normal uppercase tracking-wide"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    MESSAGE SENT SUCCESSFULLY!
                  </h3>
                  <p
                    className="text-xs sm:text-sm text-[#A8988B] font-light max-w-md mx-auto leading-relaxed"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Thank you, {formData.name || 'there'}! Your message has been received. I will review it and reply to your email as soon as possible.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setSent(false);
                        setFormData({ name: '', email: '', inquiryType: 'Job Opening', message: '' });
                      }}
                      className="px-6 py-2.5 border border-[#8C6D4F]/40 hover:border-[#D4AF37] text-xs font-mono tracking-widest uppercase text-[#D4AF37] rounded-sm transition-all cursor-pointer"
                    >
                      SEND ANOTHER MESSAGE
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Inquiry Type Chips */}
                  <div>
                    <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-2.5">
                      // 01. WHAT CAN I HELP YOU WITH?
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {inquiryOptions.map((opt) => {
                        const isSelected = formData.inquiryType === opt.label;
                        return (
                          <button
                            type="button"
                            key={opt.label}
                            onClick={() => setFormData({ ...formData, inquiryType: opt.label })}
                            className={`py-2 px-2.5 text-[10.5px] font-medium tracking-wider rounded-sm border transition-all text-center flex items-center justify-center space-x-1.5 cursor-pointer ${isSelected
                              ? 'border-[#D4AF37] bg-[#1C1611] text-[#F7E7C4] shadow-[0_0_12px_rgba(212,175,55,0.2)]'
                              : 'border-[#8C6D4F]/30 bg-[#120F0C] text-[#8C6D4F] hover:text-[#E8DFD8] hover:border-[#8C6D4F]/60'
                              }`}
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                          >
                            <span className="text-xs">{opt.icon}</span>
                            <span className="truncate">{opt.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Sender & Email Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-2">
                        // 02. YOUR NAME
                      </span>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full bg-[#120F0C] border border-[#8C6D4F]/35 focus:border-[#D4AF37] focus:shadow-[0_0_15px_rgba(212,175,55,0.15)] text-xs text-white placeholder-[#8C6D4F]/60 px-4 py-3.5 outline-none rounded-sm transition-all"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      />
                    </div>

                    <div>
                      <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-2">
                        // 03. YOUR EMAIL ADDRESS
                      </span>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@example.com"
                        className="w-full bg-[#120F0C] border border-[#8C6D4F]/35 focus:border-[#D4AF37] focus:shadow-[0_0_15px_rgba(212,175,55,0.15)] text-xs text-white placeholder-[#8C6D4F]/60 px-4 py-3.5 outline-none rounded-sm transition-all"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-2">
                      // 04. YOUR MESSAGE
                    </span>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me a bit about the job opening, project, or what you'd like to talk about..."
                      className="w-full bg-[#120F0C] border border-[#8C6D4F]/35 focus:border-[#D4AF37] focus:shadow-[0_0_15px_rgba(212,175,55,0.15)] text-xs text-white placeholder-[#8C6D4F]/60 p-4 outline-none rounded-sm transition-all resize-none"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="relative w-full py-4 border border-[#D4AF37] bg-[#D4AF37]/15 hover:bg-[#D4AF37] text-[#F7E7C4] hover:text-black text-xs font-semibold tracking-[0.28em] uppercase transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.2)] rounded-sm flex items-center justify-center space-x-2 cursor-pointer"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    <span>{isSubmitting ? 'SENDING MESSAGE...' : 'SEND MESSAGE'}</span>
                    <span className="text-sm">✉</span>
                  </motion.button>

                </form>
              )}
            </div>

          </motion.div>

        </div>

        {/* ================= FOOTER ================= */}
        <div className="pt-12 border-t border-[#8C6D4F]/25 flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Brand Signature */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span
              className="text-lg font-bold tracking-[0.3em] uppercase text-white"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              NAYANA CHAUDHARI.
            </span>
            <span className="text-[11px] font-mono text-[#8C6D4F] mt-0.5">
              SOFTWARE DEVELOPER • MCA SCHOLAR • FULL STACK &amp; DATABASE MANAGEMENT
            </span>
          </div>

          {/* Quick Nav Links */}
          <div
            className="flex flex-wrap items-center justify-center gap-6 text-[10px] font-mono tracking-widest uppercase text-[#A8988B]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <a href="#about" className="hover:text-[#D4AF37] transition-colors">ABOUT</a>
            <a href="#work" className="hover:text-[#D4AF37] transition-colors">PROJECTS</a>
            <a href="#skills" className="hover:text-[#D4AF37] transition-colors">SKILLS</a>
            <a href="#education" className="hover:text-[#D4AF37] transition-colors">EDUCATION</a>
            <a href="#journey" className="hover:text-[#D4AF37] transition-colors">JOURNEY</a>
            <button
              onClick={scrollToTop}
              className="hover:text-[#D4AF37] transition-colors cursor-pointer text-[#D4AF37]"
            >
              TOP ↑
            </button>
          </div>

          {/* Copyright */}
          <div className="text-[10px] font-mono text-[#8C6D4F] text-center md:text-right">
            © {new Date().getFullYear()} NAYANA CHAUDHARI • ALL RIGHTS RESERVED
          </div>

        </div>

      </div>
    </footer>
  );
};

export default ContactSection;