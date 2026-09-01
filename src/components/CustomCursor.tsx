import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [viewMode, setViewMode] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    setHidden(false);

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let rafId = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }

      const target = e.target as HTMLElement;
      const projectEl = target.closest('[data-cursor="view"]');
      const linkEl = target.closest('a, button, [data-cursor="link"]');

      if (projectEl) {
        setViewMode(true);
        setHovering(false);
      } else if (linkEl) {
        setHovering(true);
        setViewMode(false);
      } else {
        setHovering(false);
        setViewMode(false);
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (hidden) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[200] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-400"
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[200] flex items-center justify-center rounded-full border border-paper-300 transition-[width,height,opacity,background-color] duration-300 ease-out"
        style={{
          width: viewMode ? '80px' : hovering ? '40px' : '28px',
          height: viewMode ? '80px' : hovering ? '40px' : '28px',
          marginLeft: viewMode ? '-40px' : hovering ? '-20px' : '-14px',
          marginTop: viewMode ? '-40px' : hovering ? '-20px' : '-14px',
          backgroundColor: viewMode ? 'rgb(var(--accent-400) / 0.1)' : 'transparent',
          borderColor: viewMode ? 'rgb(var(--accent-400))' : hovering ? 'rgb(var(--accent-400))' : 'rgb(var(--paper-300))',
        }}
      >
        {viewMode && (
          <span className="font-mono text-[10px] font-medium uppercase tracking-wider text-accent-400">
            View
          </span>
        )}
      </div>
    </>
  );
}
