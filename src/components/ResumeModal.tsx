import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-[#0E0C0A] border border-[#8C6D4F]/60 text-[#E8DFD8] rounded-xl shadow-[0_25px_80px_rgba(0,0,0,0.95)] max-h-[90vh] overflow-y-auto z-10 p-6 sm:p-10 print:bg-white print:text-black print:p-0 print:border-none print:shadow-none"
        >
          {/* Top Control Bar (Hidden when printing) */}
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#8C6D4F]/30 print:hidden">
            <div className="flex items-center space-x-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-pulse" />
              <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#D4AF37]">
                CURRICULUM VITAE // VERIFIED
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={handlePrint}
                className="px-4 py-2 text-xs font-mono tracking-wider uppercase border border-[#8C6D4F]/50 bg-[#16120F] hover:border-[#D4AF37] hover:text-[#F7E7C4] rounded transition-colors flex items-center space-x-1.5"
              >
                <span>PRINT / SAVE PDF</span>
                <span>🖨️</span>
              </button>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full border border-[#8C6D4F]/50 flex items-center justify-center text-[#BFA895] hover:text-white hover:border-[#D4AF37] transition-colors"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Resume Header */}
          <div className="text-center sm:text-left border-b border-[#8C6D4F]/30 pb-6 mb-6">
            <h1
              className="text-4xl sm:text-5xl tracking-tight text-white uppercase mb-1"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              NAYANA CHAUDHARI
            </h1>
            <p className="text-xs sm:text-sm font-medium tracking-[0.2em] text-[#D4AF37] uppercase mb-4">
              Software Developer
            </p>

            <div className="flex flex-wrap gap-y-2 gap-x-6 text-xs text-[#BFA895] font-light justify-center sm:justify-start">
              <a
                href="mailto:chaudharinandni2403@gmail.com"
                className="hover:text-[#D4AF37] transition-colors flex items-center space-x-1.5"
              >
                <span>✉</span>
                <span>chaudharinandni2403@gmail.com</span>
              </a>
              <a
                href="tel:9175181306"
                className="hover:text-[#D4AF37] transition-colors flex items-center space-x-1.5"
              >
                <span>📞</span>
                <span>+91 9175181306</span>
              </a>
              <span className="flex items-center space-x-1.5 text-[#A8988B]">
                <span>📍</span>
                <span>Jalgaon, Maharashtra, India</span>
              </span>
            </div>
          </div>

          {/* Education */}
          <div className="mb-6">
            <div className="flex items-center space-x-2 border-b border-[#8C6D4F]/30 pb-1.5 mb-3">
              <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#D4AF37]">
                EDUCATION
              </span>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between">
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-white">
                    Master of Computer Applications (MCA)
                  </h3>
                  <p className="text-xs text-[#BFA895]">
                    G.H. Raisoni College of Engineering &amp; Management, Jalgaon
                  </p>
                </div>
                <div className="text-xs text-[#D4AF37] sm:text-right mt-1 sm:mt-0 font-mono">
                  <span>2025 – Expected July 2027</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start justify-between">
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-white">
                    Bachelor of Computer Applications (BCA)
                  </h3>
                  <p className="text-xs text-[#BFA895]">
                    Moolji Jaitha College, Jalgaon
                  </p>
                  <p className="text-xs text-[#D4AF37]/90 font-medium mt-0.5">
                    Graduated with Honors
                  </p>
                </div>
                <div className="text-xs text-[#A8988B] sm:text-right mt-1 sm:mt-0 font-mono">
                  <span>Jalgaon</span>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mb-6">
            <div className="flex items-center space-x-2 border-b border-[#8C6D4F]/30 pb-1.5 mb-3">
              <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#D4AF37]">
                TECHNICAL SKILLS
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-3 bg-[#15120F] border border-[#8C6D4F]/20 rounded">
                <span className="block text-[10.5px] font-mono uppercase text-[#D4AF37] mb-1 font-semibold">
                  Frontend
                </span>
                <p className="text-[#D5CBC0] leading-relaxed">
                  HTML5, CSS3, JavaScript, React.js
                </p>
              </div>

              <div className="p-3 bg-[#15120F] border border-[#8C6D4F]/20 rounded">
                <span className="block text-[10.5px] font-mono uppercase text-[#D4AF37] mb-1 font-semibold">
                  Backend
                </span>
                <p className="text-[#D5CBC0] leading-relaxed">
                  Node.js, Express, REST APIs
                </p>
              </div>

              <div className="p-3 bg-[#15120F] border border-[#8C6D4F]/20 rounded">
                <span className="block text-[10.5px] font-mono uppercase text-[#D4AF37] mb-1 font-semibold">
                  Database
                </span>
                <p className="text-[#D5CBC0] leading-relaxed">
                  MySQL, MongoDB
                </p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-6">
            <div className="flex items-center space-x-2 border-b border-[#8C6D4F]/30 pb-1.5 mb-3">
              <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#D4AF37]">
                CERTIFICATIONS
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-3 border border-[#8C6D4F]/30 bg-[#14100D] rounded">
                <h4 className="text-xs font-semibold text-white mb-1">
                  Java Programming Certification
                </h4>
                <p className="text-[11px] text-[#D4AF37]">Issuer: Infosys</p>
                <p className="text-[10px] text-[#A8988B] font-mono mt-1">Oct 2022 – Dec 2022</p>
              </div>

              <div className="p-3 border border-[#8C6D4F]/30 bg-[#14100D] rounded">
                <h4 className="text-xs font-semibold text-white mb-1">
                  C++ Programming Certification
                </h4>
                <p className="text-[11px] text-[#D4AF37]">Issuer: Softaid</p>
                <p className="text-[10px] text-[#A8988B] font-mono mt-1">Jan 2022 – Mar 2022</p>
              </div>

              <div className="p-3 border border-[#8C6D4F]/30 bg-[#14100D] rounded">
                <h4 className="text-xs font-semibold text-white mb-1">
                  C Programming Certification
                </h4>
                <p className="text-[11px] text-[#D4AF37]">Issuer: Softaid</p>
                <p className="text-[10px] text-[#A8988B] font-mono mt-1">Aug 2021 – Oct 2021</p>
              </div>
            </div>
          </div>

          {/* Project Highlights */}
          <div className="mb-6">
            <div className="flex items-center space-x-2 border-b border-[#8C6D4F]/30 pb-1.5 mb-3">
              <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#D4AF37]">
                PROJECT HIGHLIGHTS
              </span>
            </div>

            <div className="space-y-4">
              <div className="p-3.5 bg-[#14100D] border border-[#8C6D4F]/30 rounded">
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="text-sm font-semibold text-white">Travel Agency System</h4>
                  <span className="text-[10px] font-mono text-[#D4AF37]">Frontend &amp; Web</span>
                </div>
                <p className="text-xs text-[#BDB0A4] leading-relaxed">
                  Contributed to the frontend development of a web-based travel booking application using responsive and user-friendly interfaces. Designed and implemented pages for travel packages, booking, and user interaction while ensuring a smooth user experience.
                </p>
              </div>

              <div className="p-3.5 bg-[#14100D] border border-[#8C6D4F]/30 rounded">
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="text-sm font-semibold text-white">Student Management System</h4>
                  <span className="text-[10px] font-mono text-[#D4AF37]">Database &amp; Backend</span>
                </div>
                <p className="text-xs text-[#BDB0A4] leading-relaxed">
                  Designed and developed a system to manage student records, streamline information handling, and improve data accessibility.
                </p>
              </div>

              <div className="p-3.5 bg-[#14100D] border border-[#8C6D4F]/30 rounded">
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="text-sm font-semibold text-white">Portfolio Website</h4>
                  <span className="text-[10px] font-mono text-[#D4AF37]">React &amp; Motion</span>
                </div>
                <p className="text-xs text-[#BDB0A4] leading-relaxed">
                  Built a responsive personal portfolio to showcase technical skills, projects, and certifications.
                </p>
              </div>
            </div>
          </div>

          {/* Soft Skills & Languages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <div className="flex items-center space-x-2 border-b border-[#8C6D4F]/30 pb-1.5 mb-2.5">
                <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#D4AF37]">
                  SOFT SKILLS
                </span>
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                {['Communication', 'Organizational Skills', 'Time Management', 'Attention to Detail'].map((s) => (
                  <span key={s} className="px-2.5 py-1 bg-[#16120F] border border-[#8C6D4F]/40 text-[#D5CBC0] rounded-sm">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-2 border-b border-[#8C6D4F]/30 pb-1.5 mb-2.5">
                <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#D4AF37]">
                  LANGUAGES
                </span>
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                {['English', 'Hindi', 'Marathi'].map((l) => (
                  <span key={l} className="px-2.5 py-1 bg-[#16120F] border border-[#8C6D4F]/40 text-[#D4AF37] rounded-sm font-medium">
                    {l}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
