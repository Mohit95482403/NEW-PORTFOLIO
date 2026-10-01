import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [cursorText, setCursorText] = useState<string>('');
  const [isDesktop, setIsDesktop] = useState(false);

  // Position motion values
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Snappy spring for the inner precision pointer
  const dotSpringConfig = { damping: 40, stiffness: 900, mass: 0.1 };
  const dotX = useSpring(mouseX, dotSpringConfig);
  const dotY = useSpring(mouseY, dotSpringConfig);

  // Smooth fluid spring for the outer luxury halo ring
  const ringSpringConfig = { damping: 26, stiffness: 220, mass: 0.45 };
  const ringX = useSpring(mouseX, ringSpringConfig);
  const ringY = useSpring(mouseY, ringSpringConfig);

  useEffect(() => {
    // Only enable on desktop devices with fine pointers
    const checkIsDesktop = () => {
      const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
      setIsDesktop(hasFinePointer);
    };

    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Detect cursor context
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Check if target or parent has custom cursor cue
      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorTarget) {
        setCursorText(cursorTarget.getAttribute('data-cursor') || '');
      } else {
        setCursorText('');
      }

      // Check if hovering clickable interactive element
      const interactive = target.closest(
        'button, a, input, select, textarea, [role="button"], .cursor-pointer, summary'
      );
      setIsPointer(Boolean(interactive));
    };

    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUp = () => setIsPressed(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('resize', checkIsDesktop);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isDesktop) return null;

  const hasText = cursorText.length > 0;
  const ringSize = hasText ? 84 : isPointer ? 56 : 38;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none">
      {/* 1. OUTER LUXURY KINEMATIC HALO RING */}
      <motion.div
        className="fixed top-0 left-0 rounded-full flex items-center justify-center border backdrop-blur-[1px] transition-colors duration-300"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          width: ringSize,
          height: ringSize,
          opacity: isVisible ? 1 : 0,
          scale: isPressed ? 0.82 : 1,
          borderColor: isPointer || hasText ? 'rgba(212, 175, 55, 0.95)' : 'rgba(212, 175, 55, 0.45)',
          backgroundColor: hasText
            ? 'rgba(13, 10, 8, 0.88)'
            : isPointer
            ? 'rgba(212, 175, 55, 0.12)'
            : 'rgba(212, 175, 55, 0.03)',
          boxShadow: isPointer || hasText
            ? '0 0 25px rgba(212, 175, 55, 0.28), inset 0 0 15px rgba(212, 175, 55, 0.1)'
            : '0 0 15px rgba(212, 175, 55, 0.12)',
        }}
        transition={{
          width: { duration: 0.24, ease: [0.16, 1, 0.3, 1] },
          height: { duration: 0.24, ease: [0.16, 1, 0.3, 1] },
          scale: { duration: 0.15 },
        }}
      >
        {/* Reticle Crosshair Ticks (Precision Horology Aesthetics) */}
        {!hasText && (
          <>
            <div
              className={`absolute top-0 left-1/2 -translate-x-1/2 w-[1.5px] h-[3.5px] bg-[#D4AF37] transition-opacity duration-300 ${
                isPointer ? 'opacity-90' : 'opacity-40'
              }`}
            />
            <div
              className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[1.5px] h-[3.5px] bg-[#D4AF37] transition-opacity duration-300 ${
                isPointer ? 'opacity-90' : 'opacity-40'
              }`}
            />
            <div
              className={`absolute left-0 top-1/2 -translate-y-1/2 h-[1.5px] w-[3.5px] bg-[#D4AF37] transition-opacity duration-300 ${
                isPointer ? 'opacity-90' : 'opacity-40'
              }`}
            />
            <div
              className={`absolute right-0 top-1/2 -translate-y-1/2 h-[1.5px] w-[3.5px] bg-[#D4AF37] transition-opacity duration-300 ${
                isPointer ? 'opacity-90' : 'opacity-40'
              }`}
            />
          </>
        )}

        {/* Dynamic Context Text (e.g. "EXPLORE", "VIEW", "OPEN") */}
        {hasText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="text-[9px] font-mono font-bold tracking-[0.22em] text-[#F7E7C4] uppercase text-center px-2"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>

      {/* 2. INNER LUMINOUS PRECISION DOT */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          width: isPointer && !hasText ? 8 : hasText ? 0 : 5,
          height: isPointer && !hasText ? 8 : hasText ? 0 : 5,
          opacity: isVisible && !hasText ? 1 : 0,
          backgroundColor: isPointer ? '#FFFFFF' : '#F7E7C4',
          boxShadow: isPointer
            ? '0 0 12px #FFFFFF, 0 0 20px #D4AF37'
            : '0 0 8px rgba(212, 175, 55, 0.8)',
        }}
        transition={{
          width: { duration: 0.2 },
          height: { duration: 0.2 },
        }}
      />
    </div>
  );
};

export default CustomCursor;
