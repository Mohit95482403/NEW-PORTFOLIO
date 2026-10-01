import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import projectTravel from '../assets/project-travel.jpg';
import projectStudent from '../assets/project-student.jpg';
import projectPortfolio from '../assets/project-portfolio.jpg';

interface ProjectData {
  number: string;
  title: string;
  category: string;
  status: string;
  badge: string;
  route: string;
  image: string;
  description: string;
  tech: string[];
  features: string[];
  metrics: { label: string; value: string }[];
  projectDetails: {
    overview: string;
    coreEngine: string;
    databaseStrategy: string;
    uxHighlights: string;
  };
}

const projects: ProjectData[] = [
  {
    number: '01',
    title: 'Travel Agency System',
    category: 'FULL-STACK WEB APPLICATION',
    status: 'COMPLETED & VERIFIED',
    badge: 'FLAGSHIP PROJECT',
    route: 'https://travel-escape.nayana.dev/explore',
    image: projectTravel,
    description:
      'A comprehensive web-based travel booking and exploration portal engineered to streamline vacation planning. Featuring interactive itineraries, step-by-step reservation workflows, real-time schedule queries, and responsive interfaces.',
    tech: [
      'React.js',
      'JavaScript (ES6+)',
      'HTML5 / CSS3',
      'Node.js',
      'REST APIs',
      'UI/UX Design',
      'Responsive Web',
    ],
    features: [
      'Interactive day-by-day destination itinerary explorer with transparent package breakdowns',
      'Frictionless multi-stage booking pipeline with input validation and feedback loops',
      'Modular React component hierarchy delivering sub-second client-side transitions',
      'REST API endpoints synchronizing travel dates, tour availability, and pricing',
    ],
    metrics: [
      { label: 'FRONTEND', value: 'React.js Components' },
      { label: 'EXPERIENCE', value: '100% Mobile Ready' },
      { label: 'ARCHITECTURE', value: 'RESTful Integration' },
    ],
    projectDetails: {
      overview:
        'Conceived and engineered to modernize traditional leisure travel bookings. The platform delivers an intuitive digital concierge where travelers can discover curated holiday spots, review detailed schedules, and submit reservation requests without friction.',
      coreEngine:
        'Constructed using modular React functional components, custom hooks for form state management, interactive calendar pickers, and dynamic package filtering algorithms.',
      databaseStrategy:
        'Structured relational data schemas organizing vacation packages, itineraries, geographic regions, seasonal discounts, and customer booking logs.',
      uxHighlights:
        'Atmospheric luxury dark aesthetic with warm champagne accents, responsive card grids, touch-friendly navigation, and clear visual affordances on all devices.',
    },
  },
  {
    number: '02',
    title: 'Student Management System',
    category: 'DATABASE & BACKEND APPLICATION',
    status: 'ACADEMIC EXCELLENCE',
    badge: 'CORE SYSTEMS',
    route: 'mysql://cluster-01.edu/students/records',
    image: projectStudent,
    description:
      'An enterprise academic administration system architected to centralize student dossiers, academic records, and department workflows. Eliminates paper registries through instant indexed queries and hybrid data storage.',
    tech: [
      'Node.js',
      'Express.js',
      'MySQL',
      'MongoDB',
      'RESTful APIs',
      'CRUD Engine',
      'JavaScript',
      'Data Security',
    ],
    features: [
      'Centralized student profile repository tracking academic milestones, attendance, and grades',
      'Optimized MySQL relational schema with index-accelerated student identification lookup',
      'Flexible MongoDB document integration accommodating variable project submissions and notes',
      'Administrative CRUD dashboard offering quick filtering, bulk updates, and export tools',
    ],
    metrics: [
      { label: 'DATABASES', value: 'MySQL + MongoDB' },
      { label: 'QUERY SPEED', value: 'Instant Lookup' },
      { label: 'RELIABILITY', value: 'ACID Compliant' },
    ],
    projectDetails: {
      overview:
        'Developed to resolve data fragmentation and latency in collegiate administration. The platform equips registrars and faculty with instant search, tamper-evident record keeping, and straightforward grade entry.',
      coreEngine:
        'Node.js runtime backed by Express.js routing middleware, enforcing robust request sanitization, error handling, and structured JSON payloads.',
      databaseStrategy:
        'Hybrid dual-database paradigm: Normalized MySQL tables handle core student profiles and grades, while MongoDB collections store unstructured remarks and extracurricular archives.',
      uxHighlights:
        'High-density dashboard with instant keyboard shortcuts, inline status indicators, and clean tabular data presentation optimized for staff productivity.',
    },
  },
  {
    number: '03',
    title: 'Personal Portfolio Website',
    category: 'CREATIVE FRONTEND & DESIGN',
    status: 'PRODUCTION LIVE',
    badge: 'SIGNATURE SHOWCASE',
    route: 'https://nayanachaudhari.dev',
    image: projectPortfolio,
    description:
      'My bespoke digital presence engineered with modern web technologies, smooth scroll physics, and luxury cinematic aesthetics. Direct interactive bridge showcasing software projects, verified credentials, and resume access.',
    tech: [
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Lenis Smooth Scroll',
      'Responsive UX',
    ],
    features: [
      'Physics-based Lenis smooth scrolling paired with Framer Motion spring micro-interactions',
      'Bespoke champagne-gold and obsidian visual design system with ambient glow effects',
      'Embedded PDF resume viewer and instant download gateway for hiring managers',
      'Strict TypeScript architecture with component reusability and 60fps rendering',
    ],
    metrics: [
      { label: 'AESTHETICS', value: 'Cinematic Gold' },
      { label: 'PERFORMANCE', value: '60 FPS Fluid' },
      { label: 'RESPONSIVE', value: 'Ultra-Wide to Mobile' },
    ],
    projectDetails: {
      overview:
        'Designed as a premier digital introduction for engineering teams and recruiters. Blends cinematic storytelling with engineering rigor to present skills, academic background, and development work.',
      coreEngine:
        'Vite build pipeline leveraging React 19 and TypeScript, optimizing asset bundles and ensuring high-speed time-to-interactive.',
      databaseStrategy:
        'Structured static JSON data layer with verified external certification credentials and direct resume integration.',
      uxHighlights:
        'Warm ambient lighting, custom cursor kinematics, interactive spotlight cards, and gold-metallic typography.',
    },
  },
];

const categories = ['ALL PROJECTS', 'WEB APPS', 'DATABASES', 'CREATIVE'];

type LayoutMode = 'bento' | 'grid' | 'editorial';

// Interactive 3D Spotlight Card Component
interface PremiumCardProps {
  project: ProjectData;
  idx: number;
  layoutMode: LayoutMode;
  onOpenDetails: (project: ProjectData) => void;
}

const PremiumProjectCard: React.FC<PremiumCardProps> = ({
  project,
  idx,
  layoutMode,
  onOpenDetails,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tracking for spotlight
  const mouseX = useMotionValue(200);
  const mouseY = useMotionValue(200);

  const springConfig = { damping: 25, stiffness: 260 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const spotlightBg = useTransform(
    [smoothX, smoothY],
    ([x, y]) =>
      `radial-gradient(circle 380px at ${x}px ${y}px, rgba(212, 175, 55, 0.14), rgba(140, 109, 79, 0.05), transparent 75%)`
  );

  // Layout sizing logic
  let containerClasses = 'relative rounded-2xl border transition-all duration-500 overflow-hidden ';
  if (layoutMode === 'bento') {
    if (idx === 0) {
      containerClasses += 'lg:col-span-8 bg-[#0D0A08]/95 border-[#8C6D4F]/40 hover:border-[#D4AF37]/90 ';
    } else if (idx === 1) {
      containerClasses += 'lg:col-span-4 bg-[#0A0806]/95 border-[#8C6D4F]/35 hover:border-[#D4AF37]/90 ';
    } else {
      containerClasses += 'lg:col-span-7 bg-[#0D0A08]/95 border-[#8C6D4F]/40 hover:border-[#D4AF37]/90 ';
    }
  } else if (layoutMode === 'grid') {
    containerClasses += 'lg:col-span-4 flex flex-col justify-between bg-[#0C0A08]/95 border-[#8C6D4F]/40 hover:border-[#D4AF37]/90 ';
  } else {
    // editorial
    containerClasses += 'col-span-12 bg-[#0D0A08]/95 border-[#8C6D4F]/40 hover:border-[#D4AF37]/90 ';
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className={`${containerClasses} group shadow-[0_24px_70px_rgba(0,0,0,0.92)] hover:shadow-[0_30px_90px_rgba(212,175,55,0.16)]`}
    >
      {/* 1. Dynamic Cursor Spotlight */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-300"
        style={{
          background: spotlightBg,
          opacity: isHovered ? 1 : 0,
        }}
      />

      {/* 2. Top Golden Light Bar */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent z-20 group-hover:via-[#F7E7C4] transition-all duration-700" />

      {/* 3. Luxury Crosshair Corner Pins */}
      <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-[#D4AF37]/40 group-hover:border-[#D4AF37] transition-colors z-20" />
      <div className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-[#D4AF37]/40 group-hover:border-[#D4AF37] transition-colors z-20" />
      <div className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-[#D4AF37]/40 group-hover:border-[#D4AF37] transition-colors z-20" />
      <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-[#D4AF37]/40 group-hover:border-[#D4AF37] transition-colors z-20" />

      {/* 4. Giant Watermark Number */}
      <span
        className="absolute -bottom-6 -right-3 text-8xl sm:text-[9.5rem] font-bold text-[#EAD8C7]/[0.025] select-none pointer-events-none leading-none z-0 group-hover:text-[#D4AF37]/[0.045] transition-colors duration-700"
        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
      >
        {project.number}
      </span>

      {/* 5. Card Interior Layout */}
      {layoutMode === 'bento' ? (
        idx === 0 ? (
          /* ================= BENTO FLAGSHIP CARD (8-Col) ================= */
          <div className="relative z-10 p-6 sm:p-8 lg:p-10 flex flex-col justify-between h-full">
            {/* Header Telemetry */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-[#8C6D4F]/25">
              <div className="flex items-center space-x-2.5">
                <span className="px-2.5 py-1 text-[9.5px] font-mono font-bold tracking-widest text-[#D4AF37] bg-[#1A140F] border border-[#D4AF37]/40 rounded-sm">
                  PROJECT // {project.number}
                </span>
                <span className="px-2.5 py-1 text-[9px] font-mono tracking-widest uppercase text-[#F7E7C4] bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-sm">
                  {project.badge}
                </span>
              </div>
              <span className="flex items-center space-x-1.5 text-[9.5px] font-mono text-[#D4AF37]">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                <span>{project.status}</span>
              </span>
            </div>

            {/* Split Content: Preview Window + Details */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center mb-6">
              {/* Left Column: Visual Mockup */}
              <div className="md:col-span-6 relative">
                <div
                  onClick={() => onOpenDetails(project)}
                  data-cursor="EXPLORE"
                  className="relative rounded-xl border border-[#8C6D4F]/40 overflow-hidden bg-black/90 shadow-[0_16px_45px_rgba(0,0,0,0.85)] cursor-pointer group/preview"
                >
                  {/* Window Bar */}
                  <div className="h-7 bg-[#14100D] border-b border-[#8C6D4F]/30 px-3 flex items-center justify-between">
                    <div className="flex items-center space-x-1.5">
                      <div className="w-2 h-2 rounded-full bg-[#E0564C]/80" />
                      <div className="w-2 h-2 rounded-full bg-[#E0A84C]/80" />
                      <div className="w-2 h-2 rounded-full bg-[#4CE085]/80" />
                    </div>
                    <span className="text-[8.5px] font-mono tracking-wider text-[#8C6D4F] truncate max-w-[150px]">
                      {project.route}
                    </span>
                    <div className="w-2" />
                  </div>

                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top filter brightness-[0.92] contrast-[1.08] group-hover/preview:scale-[1.05] transition-all duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Hover Inspect Cue */}
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="px-3.5 py-1.5 border border-[#D4AF37] bg-black/85 text-[#F7E7C4] text-[9.5px] font-mono tracking-widest uppercase rounded shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                        EXPLORE CASE STUDY ↗
                      </span>
                    </div>

                    <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none text-[8.5px] font-mono">
                      <span className="px-2 py-0.5 bg-black/80 backdrop-blur-md border border-[#8C6D4F]/40 text-[#D4AF37] rounded">
                        REACT + NODE.JS
                      </span>
                      <span className="px-2 py-0.5 bg-black/80 backdrop-blur-md border border-[#8C6D4F]/40 text-[#E8DFD8] rounded">
                        100% RESPONSIVE
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Narrative */}
              <div className="md:col-span-6 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono tracking-[0.28em] uppercase text-[#D4AF37] block mb-1">
                    {project.category}
                  </span>
                  <h3
                    className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white uppercase tracking-tight leading-[0.92] mb-3 group-hover:text-[#F7E7C4] transition-colors"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-xs sm:text-[13px] font-light text-[#BDB0A4] leading-relaxed mb-4"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-1.5 mb-4 pl-3 border-l border-[#D4AF37]/50">
                    {project.features.slice(0, 2).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start space-x-2 text-[11.5px] text-[#D5CBC0] font-light">
                        <span className="text-[#D4AF37] font-bold text-xs">✦</span>
                        <span style={{ fontFamily: "'Montserrat', sans-serif" }}>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {project.tech.slice(0, 5).map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-[9.5px] font-medium tracking-[0.1em] uppercase rounded-sm border border-[#8C6D4F]/35 bg-[#14100D] text-[#E8D7C5] group-hover:border-[#D4AF37]/45 transition-colors"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 5 && (
                    <span className="px-2 py-1 text-[9.5px] font-mono text-[#D4AF37] bg-[#16120F] border border-[#8C6D4F]/30 rounded-sm">
                      +{project.tech.length - 5} MORE
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom Metrics & Action Row */}
            <div className="pt-4 border-t border-[#8C6D4F]/25 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="grid grid-cols-3 gap-2">
                {project.metrics.map((m) => (
                  <div key={m.label} className="px-3 py-1.5 rounded-sm border border-[#8C6D4F]/25 bg-[#060504]/80">
                    <span className="block text-[8.5px] font-mono text-[#8C6D4F] uppercase">{m.label}</span>
                    <span className="text-[11px] font-mono font-medium text-[#F7E7C4] truncate block">{m.value}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-2.5">
                <button
                  type="button"
                  onClick={() => onOpenDetails(project)}
                  className="px-5 py-2.5 border border-[#D4AF37] bg-[#D4AF37]/15 hover:bg-[#D4AF37] text-[#F7E7C4] hover:text-black text-[10.5px] font-medium tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.15)] flex items-center space-x-2 cursor-pointer"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  <span>CASE STUDY</span>
                  <span className="text-xs">↗</span>
                </button>
                <a
                  href="#contact"
                  className="px-4 py-2.5 border border-[#8C6D4F]/40 hover:border-[#D4AF37] text-[#BFA895] hover:text-white text-[10.5px] font-medium tracking-[0.2em] uppercase transition-colors"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  CONTACT
                </a>
              </div>
            </div>
          </div>
        ) : idx === 1 ? (
          /* ================= BENTO COMPACT / SYSTEMS CARD (4-Col) ================= */
          <div className="relative z-10 p-6 sm:p-7 flex flex-col justify-between h-full">
            <div>
              {/* Header Telemetry */}
              <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[#8C6D4F]/25">
                <span className="px-2 py-0.5 text-[9px] font-mono font-bold tracking-widest text-[#D4AF37] bg-[#1A140F] border border-[#D4AF37]/40 rounded-sm">
                  PROJECT // {project.number}
                </span>
                <span className="px-2 py-0.5 text-[8.5px] font-mono uppercase text-[#F7E7C4] bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-sm">
                  {project.badge}
                </span>
              </div>

              {/* Title & Category */}
              <span className="text-[9.5px] font-mono tracking-[0.24em] uppercase text-[#D4AF37] block mb-1">
                {project.category}
              </span>
              <h3
                className="text-2xl sm:text-3xl font-normal text-white uppercase tracking-tight leading-[0.95] mb-3 group-hover:text-[#F7E7C4] transition-colors"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {project.title}
              </h3>

              {/* Preview Box */}
              <div
                onClick={() => onOpenDetails(project)}
                data-cursor="SCHEMAS"
                className="relative rounded-lg border border-[#8C6D4F]/35 overflow-hidden bg-black/90 mb-4 cursor-pointer group/sys aspect-[16/10]"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover filter brightness-[0.88] group-hover/sys:scale-[1.04] transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/sys:opacity-100 transition-opacity bg-black/50">
                  <span className="px-3 py-1 border border-[#D4AF37] bg-black text-[#F7E7C4] text-[9px] font-mono uppercase rounded">
                    OPEN SCHEMAS 🔍
                  </span>
                </div>
                <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[8px] font-mono">
                  <span className="text-[#D4AF37]">MYSQL + MONGODB</span>
                  <span className="text-[#C5B8AB]">INDEX SEARCH</span>
                </div>
              </div>

              <p
                className="text-xs font-light text-[#BDB0A4] leading-relaxed mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {project.description}
              </p>

              {/* Systems Telemetry Box */}
              <div className="p-3 bg-[#080605] border border-[#8C6D4F]/30 rounded-sm space-y-1.5 mb-4">
                <div className="flex items-center justify-between text-[9px] font-mono">
                  <span className="text-[#8C6D4F]">STORAGE ENGINE</span>
                  <span className="text-[#F7E7C4]">MySQL Relational</span>
                </div>
                <div className="flex items-center justify-between text-[9px] font-mono">
                  <span className="text-[#8C6D4F]">FLEXIBLE ARCHIVE</span>
                  <span className="text-[#F7E7C4]">MongoDB BSON</span>
                </div>
                <div className="flex items-center justify-between text-[9px] font-mono">
                  <span className="text-[#8C6D4F]">INTERFACE</span>
                  <span className="text-[#D4AF37]">Admin Console</span>
                </div>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-[9px] font-mono uppercase bg-[#14100D] border border-[#8C6D4F]/30 text-[#D5CBC0]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action */}
            <div className="pt-3 border-t border-[#8C6D4F]/25 flex items-center justify-between">
              <button
                type="button"
                onClick={() => onOpenDetails(project)}
                className="w-full py-2.5 border border-[#D4AF37]/70 bg-[#D4AF37]/10 hover:bg-[#D4AF37] text-[#F7E7C4] hover:text-black text-[10px] font-medium tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <span>VIEW ARCHITECTURE</span>
                <span className="text-xs">↗</span>
              </button>
            </div>
          </div>
        ) : (
          /* ================= BENTO SIGNATURE / CREATIVE CARD (7-Col) ================= */
          <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-between h-full">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-5 pb-3 border-b border-[#8C6D4F]/25">
                <div className="flex items-center space-x-2">
                  <span className="px-2.5 py-1 text-[9.5px] font-mono font-bold tracking-widest text-[#D4AF37] bg-[#1A140F] border border-[#D4AF37]/40 rounded-sm">
                    PROJECT // {project.number}
                  </span>
                  <span className="px-2.5 py-1 text-[9px] font-mono tracking-widest uppercase text-[#F7E7C4] bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-sm">
                    {project.badge}
                  </span>
                </div>
                <span className="flex items-center space-x-1.5 text-[9.5px] font-mono text-[#D4AF37]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4CE085]" />
                  <span>{project.status}</span>
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center mb-5">
                <div className="md:col-span-6">
                  <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#D4AF37] block mb-1">
                    {project.category}
                  </span>
                  <h3
                    className="text-3xl sm:text-4xl font-normal text-white uppercase tracking-tight leading-[0.92] mb-3 group-hover:text-[#F7E7C4] transition-colors"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-xs sm:text-[13px] font-light text-[#BDB0A4] leading-relaxed mb-3"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {project.description}
                  </p>
                  
                  {/* Highlights */}
                  <div className="space-y-1.5 pl-3 border-l border-[#D4AF37]/50 mb-3">
                    {project.features.slice(0, 2).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start space-x-2 text-[11px] text-[#D5CBC0] font-light">
                        <span className="text-[#D4AF37] font-bold text-xs">✦</span>
                        <span style={{ fontFamily: "'Montserrat', sans-serif" }}>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-6">
                  <div
                    onClick={() => onOpenDetails(project)}
                    data-cursor="DESIGN"
                    className="relative rounded-xl border border-[#8C6D4F]/40 overflow-hidden bg-black/90 cursor-pointer group/art aspect-[16/10]"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover filter brightness-[0.9] group-hover/art:scale-[1.05] transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover/art:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="px-3.5 py-1.5 border border-[#D4AF37] bg-black/85 text-[#F7E7C4] text-[9.5px] font-mono tracking-widest uppercase rounded shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                        VIEW DESIGN SYSTEM ↗
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tech Chips */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-[9.5px] font-medium tracking-[0.1em] uppercase rounded-sm border border-[#8C6D4F]/35 bg-[#14100D] text-[#E8D7C5]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="pt-3 border-t border-[#8C6D4F]/25 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center space-x-2">
                {project.metrics.map((m) => (
                  <span key={m.label} className="text-[9.5px] font-mono text-[#D4AF37] bg-[#16120F] px-2 py-0.5 border border-[#8C6D4F]/30 rounded">
                    {m.value}
                  </span>
                ))}
              </div>

              <button
                type="button"
                onClick={() => onOpenDetails(project)}
                className="px-4 py-2 border border-[#D4AF37] bg-[#D4AF37]/15 hover:bg-[#D4AF37] text-[#F7E7C4] hover:text-black text-[10px] font-medium tracking-[0.2em] uppercase transition-all duration-300 flex items-center space-x-2 cursor-pointer"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <span>EXPLORE DETAILS</span>
                <span className="text-xs">↗</span>
              </button>
            </div>
          </div>
        )
      ) : (
        /* ================= GRID / EDITORIAL CARD FORMAT ================= */
        <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-between h-full">
          <div>
            {/* Header Telemetry */}
            <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[#8C6D4F]/25">
              <span className="px-2.5 py-1 text-[9.5px] font-mono font-bold tracking-widest text-[#D4AF37] bg-[#1A140F] border border-[#D4AF37]/40 rounded-sm">
                PROJECT // {project.number}
              </span>
              <span className="px-2 py-0.5 text-[8.5px] font-mono uppercase text-[#F7E7C4] bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-sm">
                {project.badge}
              </span>
            </div>

            {/* Media Window */}
            <div
              onClick={() => onOpenDetails(project)}
              data-cursor="EXPLORE"
              className="relative rounded-xl border border-[#8C6D4F]/40 overflow-hidden bg-black/90 mb-5 cursor-pointer group/poster aspect-[16/10]"
            >
              <div className="h-6 bg-[#14100D] border-b border-[#8C6D4F]/30 px-3 flex items-center space-x-1.5">
                <div className="w-2 h-2 rounded-full bg-[#E0564C]/80" />
                <div className="w-2 h-2 rounded-full bg-[#E0A84C]/80" />
                <div className="w-2 h-2 rounded-full bg-[#4CE085]/80" />
                <span className="text-[8px] font-mono text-[#8C6D4F] ml-2 truncate">
                  {project.title.toLowerCase().replace(/\s+/g, '-')}
                </span>
              </div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover filter brightness-[0.9] group-hover/poster:scale-[1.04] transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover/poster:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="px-3.5 py-1.5 border border-[#D4AF37] bg-black/85 text-[#F7E7C4] text-[9.5px] font-mono uppercase rounded shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                  VIEW CASE STUDY ↗
                </span>
              </div>
            </div>

            {/* Title & Desc */}
            <span className="text-[10px] font-mono tracking-[0.24em] uppercase text-[#D4AF37] block mb-1">
              {project.category}
            </span>
            <h3
              className="text-3xl sm:text-4xl font-normal text-white uppercase tracking-tight leading-[0.92] mb-3 group-hover:text-[#F7E7C4] transition-colors"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              {project.title}
            </h3>
            <p
              className="text-xs font-light text-[#BDB0A4] leading-relaxed mb-4 line-clamp-3"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {project.description}
            </p>

            {/* Tech Chips */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tech.slice(0, 4).map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 text-[9px] font-mono uppercase bg-[#14100D] border border-[#8C6D4F]/30 text-[#D5CBC0]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-3 border-t border-[#8C6D4F]/25 flex items-center justify-between">
            <span className="text-[9.5px] font-mono text-[#D4AF37]">
              {project.metrics[0].value}
            </span>
            <button
              type="button"
              onClick={() => onOpenDetails(project)}
              className="px-4 py-2 border border-[#D4AF37] bg-[#D4AF37]/15 hover:bg-[#D4AF37] text-[#F7E7C4] hover:text-black text-[9.5px] font-medium tracking-[0.2em] uppercase transition-all duration-300 flex items-center space-x-1.5 cursor-pointer"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <span>EXPLORE</span>
              <span className="text-xs">↗</span>
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('ALL PROJECTS');
  const [layoutMode, setLayoutMode] = useState<LayoutMode>('bento');
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'ALL PROJECTS') return true;
    if (activeFilter === 'WEB APPS') return project.category.includes('WEB');
    if (activeFilter === 'DATABASES') return project.category.includes('DATABASE');
    if (activeFilter === 'CREATIVE') return project.category.includes('DESIGN') || project.category.includes('FRONTEND');
    return true;
  });

  return (
    <section
      id="work"
      className="relative w-full bg-[#080706] text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-24 pb-36 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* Studio Ambient Atmospheric Glows */}
      <div className="absolute top-1/4 left-1/4 w-[46rem] h-[46rem] bg-[#D4AF37]/5 rounded-full blur-[220px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] bg-[#8C6D4F]/6 rounded-full blur-[200px] pointer-events-none" />

      {/* Subtle Grid Architectural Lines */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
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
            02 / FEATURED WORK
          </span>
          <div className="w-24 h-[1px] bg-gradient-to-r from-[#D4AF37]/90 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline & Description */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.8rem] tracking-tight uppercase leading-[0.84] select-none"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                FEATURED PROJECTS.
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
                ARCHITECTURAL GRID.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-col gap-3 max-w-md"
          >
            <p
              className="text-xs sm:text-sm font-light text-[#A8988B] leading-relaxed"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Curated portfolio of full-stack web applications, database administrative systems, and responsive digital interfaces crafted by Nayana Chaudhari.
            </p>
            <div className="flex items-center space-x-3 text-[10px] font-mono text-[#D4AF37]">
              <span>✦ REACT.JS</span>
              <span>✦ NODE.JS</span>
              <span>✦ MYSQL / MONGODB</span>
            </div>
          </motion.div>
        </div>

        {/* Filter & Layout Control Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-4 border-b border-[#8C6D4F]/25"
        >
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isActive = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`relative px-4 py-2 rounded-sm text-[10.5px] font-medium tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'text-white border border-[#D4AF37] bg-[#1A140F] shadow-[0_0_15px_rgba(212,175,55,0.25)]'
                      : 'text-[#8C6D4F] border border-transparent hover:text-[#E8DFD8] hover:border-[#8C6D4F]/40'
                  }`}
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  <span>{cat}</span>
                </button>
              );
            })}
          </div>

          {/* Grid Layout Switcher */}
          <div className="flex items-center space-x-1.5 p-1 bg-[#120E0B] border border-[#8C6D4F]/30 rounded-md self-start md:self-auto">
            <span className="text-[9px] font-mono text-[#8C6D4F] uppercase px-2">LAYOUT:</span>
            <button
              onClick={() => setLayoutMode('bento')}
              title="Bento Architectural Grid"
              className={`px-3 py-1.5 text-[9.5px] font-mono tracking-widest uppercase rounded transition-all cursor-pointer flex items-center space-x-1.5 ${
                layoutMode === 'bento'
                  ? 'bg-[#D4AF37] text-black font-bold shadow-[0_0_10px_rgba(212,175,55,0.3)]'
                  : 'text-[#A8988B] hover:text-white'
              }`}
            >
              <span>⊞ BENTO</span>
            </button>
            <button
              onClick={() => setLayoutMode('grid')}
              title="Symmetric 3-Column Grid"
              className={`px-3 py-1.5 text-[9.5px] font-mono tracking-widest uppercase rounded transition-all cursor-pointer flex items-center space-x-1.5 ${
                layoutMode === 'grid'
                  ? 'bg-[#D4AF37] text-black font-bold shadow-[0_0_10px_rgba(212,175,55,0.3)]'
                  : 'text-[#A8988B] hover:text-white'
              }`}
            >
              <span>▥ 3-COL</span>
            </button>
            <button
              onClick={() => setLayoutMode('editorial')}
              title="Cinematic Editorial Feed"
              className={`px-3 py-1.5 text-[9.5px] font-mono tracking-widest uppercase rounded transition-all cursor-pointer flex items-center space-x-1.5 ${
                layoutMode === 'editorial'
                  ? 'bg-[#D4AF37] text-black font-bold shadow-[0_0_10px_rgba(212,175,55,0.3)]'
                  : 'text-[#A8988B] hover:text-white'
              }`}
            >
              <span>☰ FEED</span>
            </button>
          </div>
        </motion.div>

        {/* Master Project Grid Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <PremiumProjectCard
                key={project.number}
                project={project}
                idx={idx}
                layoutMode={layoutMode}
                onOpenDetails={setSelectedProject}
              />
            ))}

            {/* In Bento mode, add a complementary Architectural Standards & Engineering Card to balance the grid! */}
            {layoutMode === 'bento' && activeFilter === 'ALL PROJECTS' && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-5 relative rounded-2xl border border-[#8C6D4F]/40 bg-[#090706]/95 p-6 sm:p-8 flex flex-col justify-between overflow-hidden group hover:border-[#D4AF37]/80 transition-all duration-500 shadow-[0_24px_70px_rgba(0,0,0,0.92)]"
              >
                {/* Hairline Accents */}
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#D4AF37]/50" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#D4AF37]/50" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#D4AF37]/50" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#D4AF37]/50" />

                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#8C6D4F]/25">
                    <span className="text-[9px] font-mono tracking-widest text-[#D4AF37] uppercase">
                      SYSTEM CAPABILITIES // METRICS
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
                  </div>

                  <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#D4AF37] block mb-1">
                    ENGINEERING BENCHMARKS
                  </span>
                  <h3
                    className="text-2xl sm:text-3xl font-normal text-white uppercase tracking-tight leading-[0.95] mb-3 group-hover:text-[#F7E7C4] transition-colors"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    READY FOR PRODUCTION BUILDS
                  </h3>

                  <p
                    className="text-xs font-light text-[#BDB0A4] leading-relaxed mb-5"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Focused on robust software architecture, component-driven frontend interfaces, relational database normalization, and modern agile delivery.
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-5">
                    <div className="p-3 bg-[#120E0B] border border-[#8C6D4F]/30 rounded-sm">
                      <span className="block text-[8.5px] font-mono text-[#8C6D4F] uppercase mb-0.5">
                        ACADEMIC RIGOR
                      </span>
                      <span className="text-xs font-mono font-bold text-[#F7E7C4]">
                        MCA Scholar (2027)
                      </span>
                      <span className="block text-[9px] text-[#A8988B] mt-0.5">BCA Honors Graduate</span>
                    </div>

                    <div className="p-3 bg-[#120E0B] border border-[#8C6D4F]/30 rounded-sm">
                      <span className="block text-[8.5px] font-mono text-[#8C6D4F] uppercase mb-0.5">
                        CERTIFIED STACK
                      </span>
                      <span className="text-xs font-mono font-bold text-[#D4AF37]">
                        C, C++, Info Java
                      </span>
                      <span className="block text-[9px] text-[#A8988B] mt-0.5">Full Software Lifecycle</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-5">
                    <div className="flex items-center justify-between text-[10px] font-mono text-[#D5CBC0]">
                      <span>Clean Modular Architecture</span>
                      <span className="text-[#D4AF37]">100%</span>
                    </div>
                    <div className="w-full h-1 bg-[#1A140F] rounded-full overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-r from-[#8C6D4F] to-[#D4AF37]" />
                    </div>

                    <div className="flex items-center justify-between text-[10px] font-mono text-[#D5CBC0]">
                      <span>Mobile & Desktop Responsiveness</span>
                      <span className="text-[#D4AF37]">100%</span>
                    </div>
                    <div className="w-full h-1 bg-[#1A140F] rounded-full overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-r from-[#8C6D4F] to-[#D4AF37]" />
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#8C6D4F]/25 flex items-center justify-between">
                  <a
                    href="#contact"
                    className="w-full py-2.5 border border-[#D4AF37] bg-[#D4AF37]/15 hover:bg-[#D4AF37] text-[#F7E7C4] hover:text-black text-[10px] font-medium tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center space-x-2 text-center"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    <span>START A COLLABORATION</span>
                    <span className="text-xs">↗</span>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Case Study Deep-Dive Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl bg-[#0D0A08] border border-[#D4AF37]/50 text-[#E8DFD8] rounded-2xl shadow-[0_35px_120px_rgba(0,0,0,0.98)] max-h-[92vh] overflow-y-auto z-10 p-6 sm:p-10"
            >
              {/* Modal Top Light Bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

              {/* Header Bar */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#8C6D4F]/30">
                <div className="flex items-center space-x-3">
                  <span className="px-2.5 py-1 text-[10px] font-mono font-bold tracking-widest text-[#D4AF37] bg-[#1A140F] border border-[#D4AF37]/40 rounded">
                    CASE STUDY // {selectedProject.number}
                  </span>
                  <span className="text-xs font-mono tracking-widest uppercase text-[#BFA895]">
                    {selectedProject.badge}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-9 h-9 rounded-full border border-[#8C6D4F]/50 flex items-center justify-center text-[#BFA895] hover:text-white hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {/* Title & Preview Banner */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center mb-8">
                <div className="md:col-span-7">
                  <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#D4AF37] block mb-1">
                    {selectedProject.category}
                  </span>
                  <h2
                    className="text-4xl sm:text-5xl text-white tracking-tight uppercase leading-none mb-3"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {selectedProject.title}
                  </h2>
                  <p
                    className="text-xs sm:text-[13px] font-light text-[#BDB0A4] leading-relaxed mb-4"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {selectedProject.projectDetails.overview}
                  </p>
                  <div className="flex items-center space-x-2 text-[9.5px] font-mono text-[#D4AF37]">
                    <span className="w-2 h-2 rounded-full bg-[#4CE085]" />
                    <span>STATUS: {selectedProject.status}</span>
                  </div>
                </div>

                <div className="md:col-span-5 rounded-xl border border-[#8C6D4F]/40 overflow-hidden shadow-2xl relative aspect-[16/10]">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Architecture Tri-Pill Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="p-4 bg-[#14100D] border border-[#8C6D4F]/30 rounded-lg">
                  <div className="flex items-center space-x-1.5 mb-2">
                    <span className="text-[#D4AF37] text-xs">⚙</span>
                    <span className="text-[10.5px] font-mono uppercase text-[#D4AF37] font-semibold">
                      Core Functionality
                    </span>
                  </div>
                  <p className="text-xs text-[#C5B8AB] font-light leading-relaxed">
                    {selectedProject.projectDetails.coreEngine}
                  </p>
                </div>

                <div className="p-4 bg-[#14100D] border border-[#8C6D4F]/30 rounded-lg">
                  <div className="flex items-center space-x-1.5 mb-2">
                    <span className="text-[#D4AF37] text-xs">🗄</span>
                    <span className="text-[10.5px] font-mono uppercase text-[#D4AF37] font-semibold">
                      Database Strategy
                    </span>
                  </div>
                  <p className="text-xs text-[#C5B8AB] font-light leading-relaxed">
                    {selectedProject.projectDetails.databaseStrategy}
                  </p>
                </div>

                <div className="p-4 bg-[#14100D] border border-[#8C6D4F]/30 rounded-lg">
                  <div className="flex items-center space-x-1.5 mb-2">
                    <span className="text-[#D4AF37] text-xs">✨</span>
                    <span className="text-[10.5px] font-mono uppercase text-[#D4AF37] font-semibold">
                      User Experience
                    </span>
                  </div>
                  <p className="text-xs text-[#C5B8AB] font-light leading-relaxed">
                    {selectedProject.projectDetails.uxHighlights}
                  </p>
                </div>
              </div>

              {/* Key Features Built List */}
              <div className="mb-8">
                <h4 className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#D4AF37] mb-3">
                  // VERIFIED KEY FEATURES & DELIVERABLES
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedProject.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-[#120E0B] border border-[#8C6D4F]/25 rounded-md flex items-start space-x-2.5"
                    >
                      <span className="text-[#D4AF37] text-xs font-bold mt-0.5">✦</span>
                      <span
                        className="text-xs text-[#E8DFD8] font-light leading-relaxed"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stack Pills & CTA Actions */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-5 border-t border-[#8C6D4F]/30">
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-[10px] font-mono uppercase border border-[#8C6D4F]/40 bg-[#16120F] text-[#D4AF37] rounded-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-3">
                  <a
                    href="#contact"
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2.5 border border-[#D4AF37] bg-[#D4AF37] text-black font-semibold text-[10.5px] tracking-[0.2em] uppercase rounded-sm hover:bg-[#F7E7C4] transition-colors"
                  >
                    DISCUSS PROJECT
                  </a>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-4 py-2.5 border border-[#8C6D4F]/40 text-[#A8988B] hover:text-white text-[10.5px] tracking-[0.2em] uppercase rounded-sm transition-colors cursor-pointer"
                  >
                    CLOSE
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;