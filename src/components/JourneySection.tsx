// src/components/JourneySection.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Milestone {
  id: string;
  year: string;
  phase: string;
  tag: string;
  title: string;
  stack: string[];
  narrative: string;
  breakthrough: string;
  metricLabel: string;
  metricValue: string;
  iconSvg: React.ReactNode;
}

const milestones: Milestone[] = [
  {
    id: 'm1',
    year: '2021',
    phase: 'PHASE 01',
    tag: 'THE FOUNDATION',
    title: 'The Genesis & Algorithmic Logic',
    stack: ['C Language', 'Data Structures', 'Pointers', 'CLI Tools'],
    narrative:
      'Embarked on the programming odyssey by diving straight into procedural fundamentals with C. Learned manual memory allocation, pointer arithmetic, and algorithmic reasoning from first principles.',
    breakthrough: 'Earned foundational C certification from Softaid with distinction.',
    metricLabel: 'FOUNDATION',
    metricValue: '1st Line of Code',
    iconSvg: (
      <svg className="w-5 h-5 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    id: 'm2',
    year: '2022',
    phase: 'PHASE 02',
    tag: 'OOP ARCHITECTURE',
    title: 'Object-Oriented Mastery & Systems Thinking',
    stack: ['Java OOP', 'C++', 'Inheritance', 'Exception Handling', 'Infosys'],
    narrative:
      'Expanded into the world of Object-Oriented software design. Studied encapsulation, polymorphism, inheritance, and clean coding paradigms. Secured verified credentials in Java by Infosys and C++ by Softaid.',
    breakthrough: 'Achieved Infosys Java Certification and mastered complex OOP design patterns.',
    metricLabel: 'CERTIFICATIONS',
    metricValue: '2 Industry Credentials',
    iconSvg: (
      <svg className="w-5 h-5 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    id: 'm3',
    year: '2023 – 2024',
    phase: 'PHASE 03',
    tag: 'FULL-STACK HORIZON',
    title: 'Modern Web, Relational Databases & BCA Honors',
    stack: ['React.js', 'JavaScript', 'Node.js', 'MySQL', 'MongoDB'],
    narrative:
      'Ventured deep into modern full-stack web technologies. Engineered the Travel Agency Booking Platform and the Student Management System. Graduated with Honors in BCA from Moolji Jaitha College.',
    breakthrough: 'Graduated BCA with Honors; shipped database-driven web applications.',
    metricLabel: 'DEGREE',
    metricValue: 'BCA Honors Graduate',
    iconSvg: (
      <svg className="w-5 h-5 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    id: 'm4',
    year: '2025 – Present',
    phase: 'PHASE 04',
    tag: 'MCA & ADVANCED ENGINEERING',
    title: 'Master of Computer Applications & System Craft',
    stack: ['MCA Scholar', 'Full-Stack Arch', 'Framer Motion', 'Cloud Systems'],
    narrative:
      'Pursuing Master of Computer Applications (MCA) at G.H. Raisoni CoEM, Jalgaon. Specializing in responsive frontends, backend REST architectures, database optimization, and high-performance interactive interfaces.',
    breakthrough: 'Built cinematic interactive portfolio ecosystem and production web applications.',
    metricLabel: 'SCHOLARSHIP',
    metricValue: 'MCA (2025 – 2027)',
    iconSvg: (
      <svg className="w-5 h-5 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    id: 'm5',
    year: '2026 & Beyond',
    phase: 'PHASE 05',
    tag: 'THE HORIZON',
    title: 'The Engineering Vision Ahead',
    stack: ['Full-Stack Engineering', 'Production APIs', 'Team Collaboration'],
    narrative:
      'Committed to contributing to ambitious, product-focused software development teams. Continuously evolving with emerging web standards, cloud architectures, and user-centric digital experiences.',
    breakthrough: 'Actively preparing for high-impact software engineering roles and collaborations.',
    metricLabel: 'ASPIRATION',
    metricValue: 'Production Impact',
    iconSvg: (
      <svg className="w-5 h-5 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export const JourneySection: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('m4');

  const currentIndex = milestones.findIndex((m) => m.id === activeId);
  const activeMilestone = milestones[currentIndex] || milestones[3];

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + milestones.length) % milestones.length;
    setActiveId(milestones[prevIdx].id);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % milestones.length;
    setActiveId(milestones[nextIdx].id);
  };

  return (
    <section
      id="journey"
      className="relative w-full bg-[#080605] text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black py-16 sm:py-24 md:py-28 px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/4 w-[28rem] sm:w-[36rem] h-[28rem] sm:h-[36rem] bg-[#D4AF37]/[0.025] rounded-full blur-[140px] sm:blur-[170px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/6 w-[22rem] sm:w-[30rem] h-[22rem] sm:h-[30rem] bg-[#8C6D4F]/[0.03] rounded-full blur-[130px] sm:blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6"
        >
          <span
            className="text-[10px] sm:text-[11px] font-medium tracking-[0.28em] sm:tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            05 / THE EVOLUTION
          </span>
          <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 sm:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6"
        >
          <div>
            <h2
              className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.88] select-none"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                CODING
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
                ODYSSEY.
              </span>
            </h2>
          </div>

          <p
            className="text-xs sm:text-[13px] font-light text-[#A8988B] max-w-md leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            An interactive roadmap chronicling the pivotal breakthroughs, certifications, and technical milestones that transformed lines of code into a lifelong engineering craft.
          </p>
        </motion.div>

        {/* ================= Interactive Step Navigator Tabs (Fully Mobile Responsive) ================= */}
        <div className="relative mb-6 sm:mb-10">
          {/* Mobile Swipe Hint */}
          <div className="md:hidden flex items-center justify-between text-[9px] font-mono tracking-widest text-[#8C6D4F] uppercase mb-2 px-1">
            <span>// SELECT MILESTONE PHASE</span>
            <span className="text-[#D4AF37]">SWIPE ↔</span>
          </div>

          {/* Scrollable Track on Mobile, Grid on Tablet/Desktop */}
          <div className="overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="flex sm:grid sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 min-w-max sm:min-w-0">
              {milestones.map((m) => {
                const isActive = m.id === activeId;
                return (
                  <button
                    type="button"
                    key={m.id}
                    onClick={() => setActiveId(m.id)}
                    className={`relative w-[145px] sm:w-auto p-2.5 sm:p-3.5 rounded-sm border transition-all duration-300 text-left cursor-pointer group flex flex-col justify-between shrink-0 ${
                      isActive
                        ? 'border-[#D4AF37] bg-[#16120E] shadow-[0_0_20px_rgba(212,175,55,0.2)]'
                        : 'border-[#8C6D4F]/30 bg-[#0E0B09]/80 hover:border-[#D4AF37]/60 hover:bg-[#120F0C]'
                    }`}
                  >
                    {/* Top indicator dot */}
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[8.5px] sm:text-[9px] font-mono tracking-wider text-[#8C6D4F] uppercase">
                        {m.phase}
                      </span>
                      <span
                        className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                          isActive
                            ? 'bg-[#D4AF37] shadow-[0_0_10px_#D4AF37]'
                            : 'bg-[#8C6D4F]/40 group-hover:bg-[#D4AF37]/60'
                        }`}
                      />
                    </div>

                    <div className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-[#F7E7C4] transition-colors leading-none mb-1">
                      {m.year}
                    </div>

                    <span className="text-[8.5px] sm:text-[9px] font-mono text-[#D4AF37] truncate block uppercase tracking-wider">
                      {m.tag}
                    </span>

                    {/* Active Bottom Glow Accent */}
                    {isActive && (
                      <motion.div
                        layoutId="activeTabGlow"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ================= Focused Milestone Showcase Card (Responsive Layout) ================= */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMilestone.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-[#0F0C0A] border border-[#8C6D4F]/40 hover:border-[#D4AF37]/80 rounded-sm p-4 sm:p-7 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.9)] transition-colors duration-500 overflow-hidden"
          >
            {/* Corner Decorative Brackets */}
            <div className="absolute top-2 left-2 w-3.5 h-3.5 sm:w-4 sm:h-4 border-t-2 border-l-2 border-[#D4AF37]/70 pointer-events-none" />
            <div className="absolute top-2 right-2 w-3.5 h-3.5 sm:w-4 sm:h-4 border-t-2 border-r-2 border-[#D4AF37]/70 pointer-events-none" />
            <div className="absolute bottom-2 left-2 w-3.5 h-3.5 sm:w-4 sm:h-4 border-b-2 border-l-2 border-[#D4AF37]/70 pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-3.5 h-3.5 sm:w-4 sm:h-4 border-b-2 border-r-2 border-[#D4AF37]/70 pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
              
              {/* Left Column: Big Milestone Overview (7 Cols) */}
              <div className="lg:col-span-7 space-y-3.5 sm:space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[9px] sm:text-[9.5px] font-mono tracking-widest uppercase text-[#D4AF37]">
                    {activeMilestone.phase} • {activeMilestone.year}
                  </span>
                  <span className="text-[9.5px] sm:text-[10px] font-mono tracking-wider uppercase text-[#8C6D4F]">
                    // {activeMilestone.tag}
                  </span>
                </div>

                <h3
                  className="text-2xl sm:text-3xl md:text-5xl tracking-wide text-white leading-tight break-words"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {activeMilestone.title}
                </h3>

                <p
                  className="text-xs sm:text-sm font-light text-[#D5CBC0] leading-relaxed break-words"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {activeMilestone.narrative}
                </p>

                {/* Key Breakthrough Banner */}
                <div className="p-3 sm:p-4 rounded-sm bg-[#16120E] border-l-2 border-[#D4AF37] space-y-1">
                  <span className="text-[8.5px] sm:text-[9px] font-mono tracking-widest uppercase text-[#D4AF37] block font-semibold">
                    KEY BREAKTHROUGH / ACHIEVEMENT
                  </span>
                  <p className="text-[11.5px] sm:text-[12.5px] text-[#E8DFD8] leading-normal font-light break-words">
                    {activeMilestone.breakthrough}
                  </p>
                </div>
              </div>

              {/* Right Column: Stack & Metric Box (5 Cols) */}
              <div className="lg:col-span-5 space-y-4 sm:space-y-5 lg:pl-6 lg:border-l border-[#8C6D4F]/25">
                
                {/* Metric Accent Card */}
                <div className="p-3.5 sm:p-5 rounded-sm bg-[#14100D] border border-[#8C6D4F]/30 flex items-center space-x-3.5 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#1B1510] border border-[#D4AF37]/40 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                    {activeMilestone.iconSvg}
                  </div>
                  <div className="min-w-0">
                    <span className="text-[8.5px] sm:text-[9.5px] font-mono tracking-widest uppercase text-[#8C6D4F] block truncate">
                      {activeMilestone.metricLabel}
                    </span>
                    <span
                      className="text-lg sm:text-2xl font-bold tracking-tight text-white block mt-0.5 truncate"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      {activeMilestone.metricValue}
                    </span>
                  </div>
                </div>

                {/* Technologies & Concepts Mastered */}
                <div>
                  <span className="text-[8.5px] sm:text-[9.5px] font-mono tracking-widest uppercase text-[#8C6D4F] block mb-2">
                    // TECHNOLOGIES &amp; PARADIGMS
                  </span>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {activeMilestone.stack.map((item) => (
                      <span
                        key={item}
                        className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[8.5px] sm:text-[9.5px] font-mono uppercase tracking-wider rounded bg-[#18130F] text-[#F7E7C4] border border-[#8C6D4F]/40"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Interactive Mobile Step Buttons */}
                <div className="pt-2 flex items-center justify-between gap-2 border-t border-[#8C6D4F]/20">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="px-3 py-1.5 border border-[#8C6D4F]/40 hover:border-[#D4AF37] bg-[#120F0C] hover:bg-[#D4AF37]/10 text-[9.5px] sm:text-[10px] font-mono uppercase tracking-wider text-[#A8988B] hover:text-[#D4AF37] rounded-sm transition-all cursor-pointer flex items-center space-x-1"
                  >
                    <span>← PREV</span>
                  </button>

                  <span className="text-[9.5px] font-mono text-[#D4AF37]">
                    {currentIndex + 1} / {milestones.length}
                  </span>

                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-3 py-1.5 border border-[#8C6D4F]/40 hover:border-[#D4AF37] bg-[#120F0C] hover:bg-[#D4AF37]/10 text-[9.5px] sm:text-[10px] font-mono uppercase tracking-wider text-[#A8988B] hover:text-[#D4AF37] rounded-sm transition-all cursor-pointer flex items-center space-x-1"
                  >
                    <span>NEXT →</span>
                  </button>
                </div>

              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default JourneySection;
