import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

interface TechItem {
  name: string;
  role: string;
}

interface SkillCategory {
  title: string;
  subtitle: string;
  badge: string;
  icon: string;
  stat: string;
  statLabel: string;
  colSpan: string;
  description: string;
  technologies: TechItem[];
  highlights: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'FRONTEND DEVELOPMENT',
    subtitle: 'USER INTERFACES & WEB PAGES',
    badge: 'CORE FOCUS',
    icon: '💻',
    stat: '100%',
    statLabel: 'MOBILE & DESKTOP',
    colSpan: 'lg:col-span-7',
    description:
      'I enjoy building clean, interactive, and responsive websites that feel natural to use. Specialized in React.js, modern CSS layouts, and intuitive user experiences.',
    technologies: [
      { name: 'React.js', role: 'Component hierarchy, state, and interactive UI' },
      { name: 'JavaScript (ES6+)', role: 'Modern features, async logic, and DOM manipulation' },
      { name: 'HTML5', role: 'Accessible and clean semantic structure' },
      { name: 'CSS3', role: 'Flexbox, CSS Grid, and responsive styling' },
      { name: 'Responsive Design', role: 'Smooth viewing across phones, tablets, and desktops' },
    ],
    highlights: [
      'Reusable React component architecture',
      'Smooth animations and responsive page layouts',
      'Clean, accessible, and maintainable code',
    ],
  },
  {
    title: 'BACKEND DEVELOPMENT',
    subtitle: 'SERVERS & RESTFUL APIS',
    badge: 'SERVER-SIDE',
    icon: '⚙',
    stat: 'RESTful',
    statLabel: 'API DESIGN',
    colSpan: 'lg:col-span-5',
    description:
      'Building dependable server-side logic and connecting user interfaces with databases through structured REST APIs.',
    technologies: [
      { name: 'Node.js', role: 'JavaScript server runtime and execution' },
      { name: 'REST APIs', role: 'Clean routing and JSON data exchange' },
      { name: 'Express.js', role: 'Backend middleware and route handling' },
      { name: 'Server Logic', role: 'Client-server communication workflows' },
    ],
    highlights: [
      'Clear REST API endpoints',
      'Reliable error handling and data validation',
      'Smooth client-server communication',
    ],
  },
  {
    title: 'DATABASES & STORAGE',
    subtitle: 'DATA MANAGEMENT',
    badge: 'DATA SYSTEMS',
    icon: '🗄',
    stat: 'SQL & NOSQL',
    statLabel: 'MANAGEMENT',
    colSpan: 'lg:col-span-5',
    description:
      'Designing structured tables in MySQL and document collections in MongoDB to organize, update, and retrieve application data reliably.',
    technologies: [
      { name: 'MySQL', role: 'Relational table design, primary keys, and SQL queries' },
      { name: 'MongoDB', role: 'Flexible document stores and JSON-like data records' },
      { name: 'Query Optimization', role: 'Fast record lookups and efficient queries' },
      { name: 'Data Organization', role: 'Logical schemas and data integrity' },
    ],
    highlights: [
      'Relational table relationships in MySQL',
      'Flexible document collections in MongoDB',
      'Fast and reliable data retrieval',
    ],
  },
  {
    title: 'PROGRAMMING & CERTIFICATIONS',
    subtitle: 'CORE COMPUTER SCIENCE',
    badge: 'CERTIFIED',
    icon: '🎓',
    stat: '3 VERIFIED',
    statLabel: 'CERTIFICATIONS',
    colSpan: 'lg:col-span-7',
    description:
      'Certified in core programming languages by Infosys and Softaid. Grounded in solid Object-Oriented Programming (OOP) concepts, clean algorithms, and systematic problem solving.',
    technologies: [
      { name: 'Java (Infosys)', role: 'OOP concepts, inheritance, classes & methods' },
      { name: 'C++ (Softaid)', role: 'Pointers, memory concepts, and logic building' },
      { name: 'C Language (Softaid)', role: 'Procedural fundamentals and basic data structures' },
      { name: 'OOP Fundamentals', role: 'Encapsulation, inheritance, and modular code design' },
    ],
    highlights: [
      'Java Programming Certification — Infosys (Dec 2022)',
      'C++ Programming Certification — Softaid (Mar 2022)',
      'C Programming Certification — Softaid (Oct 2021)',
    ],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const SkillsSection: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  return (
    <section
      id="skills"
      className="relative w-full bg-[#070605] text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-16 pb-28 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* Ambient Lighting Orbs */}
      <div className="absolute top-1/3 left-1/4 w-[38rem] h-[38rem] bg-[#D4AF37]/5 rounded-full blur-[190px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] bg-[#8C6D4F]/5 rounded-full blur-[180px] pointer-events-none" />

      {/* Cyber Grid Lines */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)`,
          backgroundSize: '72px 72px',
        }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="mb-12">
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
              03 / SKILLS &amp; TECHNOLOGIES
            </span>
            <div className="w-24 h-[1px] bg-gradient-to-r from-[#D4AF37]/90 via-[#8C6D4F]/40 to-transparent" />
          </motion.div>

          {/* Section Headline */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-6"
          >
            <h2
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.8rem] tracking-tight uppercase leading-[0.84] select-none"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                TECHNICAL SKILLS.
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
                TOOLS &amp; EXPERIENCE.
              </span>
            </h2>

            <p
              className="text-xs sm:text-sm font-light text-[#A8988B] max-w-md leading-relaxed"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              The programming languages, web technologies, and database tools I use to build full-stack web applications and software solutions.
            </p>
          </motion.div>
        </div>

        {/* ================= SKILLS SUMMARY STRIP ================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-xl border border-[#8C6D4F]/30 bg-[#0E0B09]/90 backdrop-blur-xl mb-10 shadow-[0_15px_40px_rgba(0,0,0,0.8)]"
        >
          {[
            { label: 'FRONTEND', val: 'REACT & JS', sub: 'HTML5, CSS3 & Responsive' },
            { label: 'BACKEND', val: 'NODE.JS', sub: 'Express & REST APIs' },
            { label: 'DATABASES', val: 'SQL & NOSQL', sub: 'MySQL + MongoDB' },
            { label: 'CERTIFICATIONS', val: '3 VERIFIED', sub: 'Infosys & Softaid' },
          ].map((t) => (
            <div key={t.label} className="p-3 border-l-2 border-[#D4AF37]/50 pl-4">
              <span className="block text-[9px] font-mono tracking-widest text-[#8C6D4F] uppercase mb-1">
                {t.label}
              </span>
              <span className="text-xl sm:text-2xl font-light text-white tracking-tight" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                {t.val}
              </span>
              <span className="block text-[10px] font-mono text-[#D4AF37]">
                • {t.sub}
              </span>
            </div>
          ))}
        </motion.div>

        {/* ================= BENTO GRID ================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          {skillCategories.map((block) => (
            <motion.div
              key={block.title}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className={`${block.colSpan} relative p-7 sm:p-9 rounded-2xl border border-[#8C6D4F]/35 bg-[#0C0A08]/90 backdrop-blur-2xl overflow-hidden transition-all duration-500 hover:border-[#D4AF37]/80 hover:shadow-[0_20px_60px_rgba(212,175,55,0.12)] group`}
            >
              {/* Top Metallic Light Sweep */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent" />

              {/* Corner Precision Pins */}
              <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-[#D4AF37]/50 group-hover:border-[#D4AF37] transition-colors" />
              <div className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-[#D4AF37]/50 group-hover:border-[#D4AF37] transition-colors" />
              <div className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-[#D4AF37]/50 group-hover:border-[#D4AF37] transition-colors" />
              <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-[#D4AF37]/50 group-hover:border-[#D4AF37] transition-colors" />

              {/* Card Meta Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2.5">
                  <span className="w-7 h-7 rounded border border-[#8C6D4F]/40 bg-[#16120E] flex items-center justify-center text-xs text-[#D4AF37]">
                    {block.icon}
                  </span>
                  <div>
                    <span className="block text-[9.5px] font-mono tracking-[0.22em] uppercase text-[#D4AF37]">
                      {block.badge}
                    </span>
                    <span className="text-[10px] font-mono text-[#8C6D4F] uppercase">
                      {block.subtitle}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="block text-sm font-mono font-semibold text-[#F7E7C4]">
                    {block.stat}
                  </span>
                  <span className="text-[9px] font-mono text-[#8C6D4F] uppercase">
                    {block.statLabel}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3
                className="text-3xl sm:text-4xl font-normal tracking-wide text-white mb-3 group-hover:text-[#F7E7C4] transition-colors"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {block.title}
              </h3>

              {/* Description */}
              <p
                className="text-xs sm:text-[13.5px] text-[#A8988B] font-light leading-relaxed mb-6 group-hover:text-[#D5CBC0] transition-colors"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {block.description}
              </p>

              {/* Key Highlights */}
              <div className="space-y-1.5 mb-6 py-2 px-3 bg-[#130F0C] border border-[#8C6D4F]/25 rounded">
                <span className="block text-[9px] font-mono tracking-widest uppercase text-[#8C6D4F] mb-1">
                  // KEY HIGHLIGHTS
                </span>
                {block.highlights.map((item, pIdx) => (
                  <div key={pIdx} className="flex items-center space-x-2 text-[11px] text-[#D5CBC0] font-light">
                    <span className="text-[#D4AF37] text-xs">✦</span>
                    <span style={{ fontFamily: "'Montserrat', sans-serif" }}>{item}</span>
                  </div>
                ))}
              </div>

              {/* Technologies List */}
              <div className="pt-4 border-t border-[#8C6D4F]/25">
                <span className="block text-[9px] font-mono tracking-widest uppercase text-[#8C6D4F] mb-2.5">
                  // TECHNOLOGIES (CLICK FOR DETAILS)
                </span>
                <div className="flex flex-wrap gap-2">
                  {block.technologies.map((tech) => {
                    const isSelected = selectedTech === tech.name;
                    return (
                      <button
                        type="button"
                        key={tech.name}
                        onClick={() => setSelectedTech(isSelected ? null : tech.name)}
                        className={`px-3.5 py-1.5 text-[10.5px] font-medium tracking-[0.14em] uppercase rounded-sm border transition-all duration-300 cursor-pointer text-left flex items-center space-x-1.5 ${
                          isSelected
                            ? 'border-[#D4AF37] bg-[#D4AF37] text-black shadow-[0_0_15px_rgba(212,175,55,0.4)] font-semibold'
                            : 'border-[#8C6D4F]/40 bg-[#14100D] text-[#E8D7C5] hover:border-[#D4AF37]/70 hover:text-white hover:bg-[#1A140F]'
                        }`}
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                        <span>{tech.name}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Detail Box for Clicked Tech */}
                {selectedTech && block.technologies.some((t) => t.name === selectedTech) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-3 p-3 bg-[#18130F] border border-[#D4AF37]/50 rounded-sm"
                  >
                    {block.technologies
                      .filter((t) => t.name === selectedTech)
                      .map((t) => (
                        <div key={t.name} className="text-xs">
                          <span className="font-semibold text-white">{t.name}: </span>
                          <span className="text-[#C5B8AB] font-light">{t.role}</span>
                        </div>
                      ))}
                  </motion.div>
                )}
              </div>

            </motion.div>
          ))}
        </motion.div>

        {/* ================= SOFT SKILLS & LANGUAGES ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-8"
        >
          {/* Soft Skills (7 Cols) */}
          <div className="md:col-span-7 p-7 rounded-2xl border border-[#8C6D4F]/35 bg-[#0C0A08]/90 backdrop-blur-2xl relative overflow-hidden group hover:border-[#D4AF37]/70 transition-all duration-500">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center space-x-2.5">
                <span className="w-7 h-7 rounded border border-[#8C6D4F]/40 bg-[#16120F] flex items-center justify-center text-xs text-[#D4AF37]">
                  🤝
                </span>
                <div>
                  <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#D4AF37]">
                    HOW I WORK //
                  </span>
                  <span className="text-xs font-mono tracking-wider uppercase text-white font-medium ml-2">
                    SOFT SKILLS
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {[
                { title: 'Communication', desc: 'Clear communicator, good listener, and comfortable collaborating with team members.' },
                { title: 'Organizational Skills', desc: 'Keeping files and code well-structured, documentation clear, and tasks organized.' },
                { title: 'Time Management', desc: 'Setting realistic milestones, staying focused, and meeting project deadlines consistently.' },
                { title: 'Attention to Detail', desc: 'Careful with code quality, catching bugs early, and polishing user interactions.' },
              ].map((skill) => (
                <div
                  key={skill.title}
                  className="p-3.5 bg-[#14100D] border border-[#8C6D4F]/30 rounded-lg hover:border-[#D4AF37]/60 transition-colors"
                >
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-xs font-semibold text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      {skill.title}
                    </p>
                    <span className="text-[10px] font-mono text-[#D4AF37]">
                      ✓
                    </span>
                  </div>
                  <p className="text-[11px] text-[#A8988B] font-light leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Languages (5 Cols) */}
          <div className="md:col-span-5 p-7 rounded-2xl border border-[#8C6D4F]/35 bg-[#0C0A08]/90 backdrop-blur-2xl relative overflow-hidden group hover:border-[#D4AF37]/70 transition-all duration-500 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2.5 mb-4">
                <span className="w-7 h-7 rounded border border-[#8C6D4F]/40 bg-[#16120F] flex items-center justify-center text-xs text-[#D4AF37]">
                  🌐
                </span>
                <div>
                  <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#D4AF37]">
                    COMMUNICATION //
                  </span>
                  <span className="text-xs font-mono tracking-wider uppercase text-white font-medium ml-2">
                    LANGUAGES SPOKEN
                  </span>
                </div>
              </div>
              
              <p className="text-xs text-[#A8988B] font-light mb-6 leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Comfortable communicating across multilingual and diverse engineering teams.
              </p>
            </div>

            <div className="space-y-3">
              {[
                { name: 'ENGLISH', proficiency: 'Professional Working Proficiency', level: '90%' },
                { name: 'HINDI', proficiency: 'Fluent Spoken & Written', level: '100%' },
                { name: 'MARATHI', proficiency: 'Native Mother Tongue', level: '100%' },
              ].map((lang) => (
                <div
                  key={lang.name}
                  className="p-3 bg-[#14100D] border border-[#8C6D4F]/30 rounded-lg group-hover:border-[#D4AF37]/50 transition-colors"
                >
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-semibold text-white tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      {lang.name}
                    </span>
                    <span className="text-[10px] font-mono text-[#D4AF37]">
                      {lang.proficiency}
                    </span>
                  </div>
                  {/* Gauge */}
                  <div className="w-full h-1.5 bg-[#090706] rounded-full overflow-hidden border border-[#8C6D4F]/20">
                    <div
                      className="h-full bg-gradient-to-r from-[#8C6D4F] to-[#D4AF37] rounded-full"
                      style={{ width: lang.level }}
                    />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default SkillsSection;