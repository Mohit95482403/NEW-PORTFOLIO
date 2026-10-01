// src/components/ExperienceSection.tsx
import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import certJava from '../assets/cert-java.jpg';
import certCpp from '../assets/cert-cpp.jpg';
import certC from '../assets/cert-c.jpg';

interface EducationItem {
  id: string;
  year: string;
  status: string;
  title: string;
  degreeType: string;
  organization: string;
  location: string;
  description: string;
  highlights: string[];
}

interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  period: string;
  credentialBadge: string;
  image: string;
  description: string;
  skills: string[];
}

const educationList: EducationItem[] = [
  {
    id: '01',
    year: '2025 – 2027',
    status: 'CURRENTLY PURSUING',
    title: 'MASTER OF COMPUTER APPLICATIONS (MCA)',
    degreeType: 'Postgraduate Degree',
    organization: 'G.H. RAISONI COLLEGE OF ENGINEERING & MANAGEMENT',
    location: 'JALGAON, MAHARASHTRA',
    description:
      'Pursuing Master of Computer Applications (MCA) with a strong emphasis on full-stack web development, advanced software engineering practices, scalable architectures, and modern database management systems. Expected graduation in July 2027.',
    highlights: [
      'Full-Stack Web Development',
      'Advanced Database Systems (MySQL & MongoDB)',
      'Software Engineering & OOP Design',
      'Scalable Web Services & APIs',
    ],
  },
  {
    id: '02',
    year: '2021 – 2024',
    status: 'GRADUATED WITH HONORS',
    title: 'BACHELOR OF COMPUTER APPLICATIONS (BCA)',
    degreeType: 'Undergraduate Degree',
    organization: 'MOOLJI JAITHA COLLEGE',
    location: 'JALGAON, MAHARASHTRA',
    description:
      'Graduated with Honors in Computer Applications, establishing solid foundational expertise in algorithmic logic, data structures, object-oriented programming, relational databases, and interactive web technologies.',
    highlights: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming (Java / C++)',
      'Relational Database Management (RDBMS)',
      'Frontend Development & UI Design',
    ],
  },
];

const certificatesList: CertificateItem[] = [
  {
    id: 'cert-1',
    title: 'Java Programming Certification',
    issuer: 'Infosys',
    period: 'Oct 2022 – Dec 2022',
    credentialBadge: 'Verified Credential • Infosys',
    image: certJava,
    description:
      'Completed comprehensive Java certification by Infosys, learning core Object-Oriented Programming (OOP) concepts, classes, inheritance, polymorphism, encapsulation, exception handling, and clean programming practices.',
    skills: ['Java OOP', 'Classes & Objects', 'Inheritance', 'Exception Handling', 'Clean Code'],
  },
  {
    id: 'cert-2',
    title: 'C++ Programming Certification',
    issuer: 'Softaid Computer Education',
    period: 'Jan 2022 – Mar 2022',
    credentialBadge: 'Accredited Training • Softaid',
    image: certCpp,
    description:
      'Completed certification in C++ programming by Softaid, covering low-level memory allocation, pointers, object orientation, and structured algorithm design.',
    skills: ['C++', 'Pointers & References', 'Memory Management', 'OOP Paradigms'],
  },
  {
    id: 'cert-3',
    title: 'C Programming Certification',
    issuer: 'Softaid Computer Education',
    period: 'Aug 2021 – Oct 2021',
    credentialBadge: 'Foundation Certificate • Softaid',
    image: certC,
    description:
      'Foundational programming course in C by Softaid, learning core procedural programming logic, data structures, pointer arithmetic, and algorithmic problem-solving logic.',
    skills: ['C Language', 'Data Structures', 'Procedural Logic', 'Algorithms'],
  },
];

export const ExperienceSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 90%'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      id="education"
      ref={containerRef}
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-4 pb-20 sm:pb-28 px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* Target anchor aliases */}
      <span id="experience" className="absolute -top-20" aria-hidden="true" />
      <span id="certifications" className="absolute top-[50%]" aria-hidden="true" />

      {/* Subtle Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[32rem] sm:w-[42rem] h-[32rem] sm:h-[42rem] bg-[#D4AF37]/[0.03] rounded-full blur-[120px] sm:blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[24rem] sm:w-[36rem] h-[24rem] sm:h-[36rem] bg-[#8C6D4F]/[0.035] rounded-full blur-[130px] sm:blur-[170px] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        
        {/* ========================================================
            PART 1: ACADEMIC EDUCATION SECTION (MOBILE-OPTIMIZED)
           ======================================================== */}
        <div className="mb-16 sm:mb-24">
          {/* Eyebrow Header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-3 sm:space-x-4 mb-5 sm:mb-7"
          >
            <span
              className="text-[10px] sm:text-[11px] font-medium tracking-[0.28em] sm:tracking-[0.35em] uppercase text-[#D4AF37]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              04 / ACADEMIC BACKGROUND
            </span>
            <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
          </motion.div>

          {/* Section Headline */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10 sm:mb-14"
          >
            <h2
              className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.88] select-none"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                ACADEMIC
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
                EDUCATION.
              </span>
            </h2>
          </motion.div>

          {/* Minimalist Route Map */}
          <div className="relative w-full">
            {/* Background Track */}
            <div className="absolute left-[13px] sm:left-[19px] md:left-[140px] top-4 bottom-8 w-[1px] bg-[#8C6D4F]/20" />
            
            {/* Animated Gold Track */}
            <motion.div
              style={{ height: lineHeight }}
              className="absolute left-[13px] sm:left-[19px] md:left-[140px] top-4 w-[2px] bg-gradient-to-b from-[#D4AF37] via-[#C99E5D] to-[#8C6D4F]/10 shadow-[0_0_10px_#D4AF37] origin-top"
            />

            <div className="space-y-10 sm:space-y-12">
              {educationList.map((stop, idx) => (
                <motion.div
                  key={stop.id}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.7, delay: idx * 0.1 }}
                  className="relative flex flex-col md:flex-row items-start group"
                >
                  {/* Desktop Year (Left side of track) */}
                  <div className="hidden md:flex flex-col items-end w-[140px] shrink-0 pr-8 pt-0.5 text-right">
                    <span className="text-[11px] font-mono tracking-[0.2em] text-[#D4AF37] group-hover:text-white transition-colors">
                      {stop.year}
                    </span>
                    <span className="text-[9px] font-mono tracking-wider uppercase text-[#8C6D4F] mt-1">
                      {stop.status}
                    </span>
                  </div>

                  {/* Route Node */}
                  <div className="absolute left-[13px] sm:left-[19px] md:left-[140px] top-1 sm:top-1.5 -translate-x-1/2 flex items-center justify-center">
                    <div className="absolute w-5 h-5 sm:w-7 sm:h-7 rounded-full border border-[#D4AF37]/0 group-hover:border-[#D4AF37]/50 group-hover:scale-150 transition-all duration-700 ease-out" />
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#120F0C] border-2 border-[#8C6D4F] group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] group-hover:shadow-[0_0_14px_#D4AF37] transition-all duration-300" />
                  </div>

                  {/* Content (Right side of track - fully constrained to avoid horizontal overflow on mobile) */}
                  <div className="ml-8 sm:ml-10 md:ml-12 pl-1 sm:pl-2 flex-1 min-w-0">
                    {/* Mobile Year & Status Badge */}
                    <div className="md:hidden flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.16em] text-[#D4AF37] font-semibold">
                        {stop.year}
                      </span>
                      <span className="text-[8.5px] font-mono tracking-wider uppercase text-[#E8DFD8] px-2 py-0.5 border border-[#8C6D4F]/40 bg-[#16120E] rounded-full">
                        {stop.status}
                      </span>
                    </div>

                    {/* Title & Degree Badge */}
                    <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1.5 mb-1.5">
                      <h3
                        className="text-2xl sm:text-3xl md:text-4xl tracking-wide text-white group-hover:text-[#F7E7C4] transition-colors leading-[1.1] break-words"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {stop.title}
                      </h3>
                      <span className="text-[8.5px] sm:text-[9.5px] font-mono uppercase tracking-wider text-[#D4AF37] px-2 py-0.5 rounded bg-[#D4AF37]/10 border border-[#D4AF37]/30 shrink-0">
                        {stop.degreeType}
                      </span>
                    </div>
                    
                    {/* Organization & Location */}
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[9.5px] sm:text-[10.5px] font-medium tracking-[0.12em] sm:tracking-[0.16em] uppercase text-[#A8988B] mb-2.5 leading-relaxed">
                      <span style={{ fontFamily: "'Montserrat', sans-serif" }}>{stop.organization}</span>
                      <span className="text-[#8C6D4F] hidden xs:inline">•</span>
                      <span className="text-[#8C6D4F]">{stop.location}</span>
                    </div>
                    
                    {/* Description */}
                    <p 
                      className="text-xs sm:text-[13px] font-light text-[#A8988B] leading-[1.65] sm:leading-[1.75] max-w-2xl group-hover:text-[#D5CBC0] transition-colors mb-3.5 break-words"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {stop.description}
                    </p>

                    {/* Coursework & Focus Badges */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                      {stop.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="text-[8.5px] sm:text-[9.5px] font-mono tracking-wider uppercase px-2 sm:px-2.5 py-0.5 sm:py-1 rounded bg-[#16120E] border border-[#8C6D4F]/30 text-[#D5CBC0] group-hover:border-[#D4AF37]/40 transition-colors"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================
            PART 2: CERTIFICATIONS SECTION (BELOW EDUCATION)
           ======================================================== */}
        <div className="pt-10 sm:pt-14 border-t border-[#8C6D4F]/30">
          
          {/* Eyebrow & Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10"
          >
            <div>
              <div className="flex items-center space-x-3 mb-2.5 sm:mb-3">
                <span
                  className="text-[10px] sm:text-[11px] font-medium tracking-[0.28em] sm:tracking-[0.35em] uppercase text-[#D4AF37]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  VERIFIED CREDENTIALS
                </span>
                <div className="w-12 sm:w-16 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 to-transparent" />
              </div>
              <h3
                className="text-3xl sm:text-5xl md:text-6xl tracking-tight uppercase leading-[0.9]"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-[#E8DFD8] to-[#998B7E]">
                  PROFESSIONAL
                </span>{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#D4AF37] to-[#694F25]">
                  CERTIFICATES.
                </span>
              </h3>
            </div>

            <p
              className="text-xs sm:text-[12.5px] font-light text-[#A8988B] max-w-md leading-relaxed"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Industry-accredited programming certifications demonstrating verified proficiency in object-oriented architecture, algorithms, and systems engineering.
            </p>
          </motion.div>

          {/* Certificate Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {certificatesList.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.8, delay: index * 0.12 }}
                className="group relative bg-[#0D0B09]/90 border border-[#8C6D4F]/35 hover:border-[#D4AF37]/80 rounded-sm overflow-hidden flex flex-col transition-all duration-500 hover:shadow-[0_16px_45px_rgba(212,175,55,0.14)]"
              >
                {/* Certificate Visual Image Frame with Click-to-Enlarge Cue */}
                <div
                  onClick={() => setSelectedCert(cert)}
                  className="relative aspect-[4/3] w-full overflow-hidden bg-black cursor-pointer"
                  title="Click to view full certificate"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover filter brightness-[0.93] contrast-[1.04] group-hover:scale-105 group-hover:brightness-105 transition-all duration-700 ease-out"
                  />

                  {/* Corner Accent Brackets */}
                  <div className="absolute top-2 left-2 w-3.5 h-3.5 sm:w-4 sm:h-4 border-t-2 border-l-2 border-[#D4AF37]/80 pointer-events-none transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute top-2 right-2 w-3.5 h-3.5 sm:w-4 sm:h-4 border-t-2 border-r-2 border-[#D4AF37]/80 pointer-events-none transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute bottom-2 left-2 w-3.5 h-3.5 sm:w-4 sm:h-4 border-b-2 border-l-2 border-[#D4AF37]/80 pointer-events-none transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute bottom-2 right-2 w-3.5 h-3.5 sm:w-4 sm:h-4 border-b-2 border-r-2 border-[#D4AF37]/80 pointer-events-none transition-transform duration-300 group-hover:scale-110" />

                  {/* Subtle Gradient Shade & Hover Spotlight Cue */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                    <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-black/85 border border-[#D4AF37] text-[9.5px] sm:text-[10px] font-mono tracking-widest text-[#F7E7C4] shadow-[0_0_15px_rgba(212,175,55,0.4)] flex items-center space-x-1.5 uppercase">
                      <svg className="w-3.5 h-3.5 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span>VIEW FULL</span>
                    </span>
                  </div>

                  {/* Issuer Stamp Top Right */}
                  <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 z-10">
                    <span className="px-2 py-0.5 text-[8px] sm:text-[8.5px] font-mono tracking-wider uppercase rounded bg-black/85 border border-[#8C6D4F]/50 text-[#D4AF37]">
                      {cert.issuer}
                    </span>
                  </div>
                </div>

                {/* Certificate Content Info */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Date / Period */}
                    <div className="flex items-center justify-between text-[9.5px] sm:text-[10px] font-mono text-[#8C6D4F] mb-1.5">
                      <span>{cert.period}</span>
                      <span className="text-[#D4AF37] font-semibold">VERIFIED</span>
                    </div>

                    {/* Title */}
                    <h4
                      className="text-xl sm:text-2xl tracking-wide text-white group-hover:text-[#F7E7C4] transition-colors leading-tight mb-2 sm:mb-2.5"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      {cert.title}
                    </h4>

                    {/* Short Info */}
                    <p
                      className="text-[11.5px] sm:text-[12px] font-light text-[#A8988B] leading-[1.65] mb-3.5 sm:mb-4"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {cert.description}
                    </p>
                  </div>

                  {/* Skills / Coursework Chips & Action */}
                  <div className="pt-3 border-t border-[#8C6D4F]/20 space-y-2.5 sm:space-y-3">
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[8.5px] sm:text-[9px] font-mono tracking-wider uppercase px-2 py-0.5 rounded bg-[#16120E] border border-[#8C6D4F]/30 text-[#C4B29E]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedCert(cert)}
                      className="w-full py-2 px-3 border border-[#8C6D4F]/40 hover:border-[#D4AF37] bg-[#120F0C] hover:bg-[#D4AF37]/10 text-[9.5px] sm:text-[10px] font-mono tracking-widest uppercase text-[#D4AF37] rounded-sm transition-all duration-300 flex items-center justify-center space-x-1.5 cursor-pointer"
                    >
                      <span>VIEW CREDENTIAL</span>
                      <span className="text-xs">→</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>

      {/* ========================================================
          FULLSCREEN CERTIFICATE PREVIEW MODAL (MOBILE RESPONSIVE)
         ======================================================== */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Dialog Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-4xl w-full bg-[#0F0C09] border border-[#D4AF37]/70 rounded-sm shadow-[0_25px_80px_rgba(0,0,0,0.95),0_0_40px_rgba(212,175,55,0.2)] overflow-hidden z-10 flex flex-col max-h-[94vh]"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-[#8C6D4F]/30 bg-[#16120E]">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                  <span
                    className="text-[10.5px] sm:text-xs font-mono tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#D4AF37]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {selectedCert.credentialBadge}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#8C6D4F]/50 flex items-center justify-center text-[#A8988B] hover:text-white hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors cursor-pointer text-xs sm:text-sm font-mono"
                  title="Close modal"
                >
                  ✕
                </button>
              </div>

              {/* Modal Scrollable Body */}
              <div className="overflow-y-auto p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
                {/* Large Certificate Image with Golden Accent Frame */}
                <div className="relative rounded-sm border-2 border-[#D4AF37]/50 overflow-hidden bg-black shadow-[0_10px_35px_rgba(0,0,0,0.8)]">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="w-full h-auto object-contain max-h-[50vh] sm:max-h-[60vh] mx-auto filter brightness-[0.98] contrast-[1.03]"
                  />
                </div>

                {/* Details Breakdown */}
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-2 border-b border-[#8C6D4F]/20 pb-2.5 sm:pb-3">
                    <h3
                      className="text-2xl sm:text-3xl md:text-4xl tracking-wide text-white leading-tight"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      {selectedCert.title}
                    </h3>
                    <div className="text-[10px] sm:text-[11px] font-mono text-[#D4AF37]">
                      {selectedCert.issuer} • {selectedCert.period}
                    </div>
                  </div>

                  <p
                    className="text-[11.5px] sm:text-[13px] font-light text-[#D5CBC0] leading-relaxed"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {selectedCert.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                    {selectedCert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[9px] sm:text-[10px] font-mono tracking-wider uppercase px-2 sm:px-2.5 py-0.5 sm:py-1 rounded bg-[#1B1510] border border-[#D4AF37]/35 text-[#F7E7C4]"
                      >
                        ✓ {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="px-4 sm:px-6 py-3 sm:py-3.5 bg-[#14100D] border-t border-[#8C6D4F]/20 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="px-4 sm:px-5 py-1.5 sm:py-2 border border-[#8C6D4F]/50 hover:border-[#D4AF37] text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#D4AF37] hover:text-white rounded-sm transition-colors cursor-pointer"
                >
                  CLOSE PREVIEW
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ExperienceSection;