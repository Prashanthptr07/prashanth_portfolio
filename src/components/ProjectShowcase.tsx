import { useRef } from 'react';
import type { Project } from '@/data/projects';
import JobPortalMockup from '@/components/mockups/JobPortalMockup';
import EcommerceMockup from '@/components/mockups/EcommerceMockup';

interface ProjectShowcaseProps {
  project: Project;
  onOpen: () => void;
}

export default function ProjectShowcase({ project, onOpen }: ProjectShowcaseProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleParallax = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    el.style.transform = `perspective(1000px) rotateY(${x * 3}deg) rotateX(${-y * 3}deg)`;
  };

  const resetParallax = () => {
    if (ref.current) {
      ref.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
    }
  };

  return (
    <div
      className="group relative cursor-pointer reveal-scale"
      data-cursor="view"
      onClick={onOpen}
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-6">
        {/* Text side */}
        <div className="order-2 lg:order-1 lg:col-span-5 lg:flex lg:flex-col lg:justify-center">
          <div className="flex items-center gap-3">
            <span className="font-display text-6xl font-bold text-ink-600 transition-colors duration-500 group-hover:text-accent-400 lg:text-7xl">
              {project.number}
            </span>
            <span className="label-accent">{project.category}</span>
          </div>

          <h3 className="mt-4 font-display text-4xl font-bold tracking-tight text-paper-50 transition-colors duration-300 group-hover:text-accent-400 lg:text-5xl">
            {project.title}
          </h3>

          <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper-400">
            {project.description}
          </p>

          {/* Meta */}
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-1 font-mono text-xs text-paper-400">
            <span>Role: <span className="text-paper-200">{project.role}</span></span>
            <span>Date: <span className="text-paper-200">{project.date}</span></span>
          </div>

          {/* Tech */}
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="rounded-md border border-ink-600 bg-ink-800 px-2.5 py-1 font-mono text-[10px] text-paper-300"
              >
                {t}
              </span>
            ))}
          </div>

          {/* View link */}
          <div className="mt-8 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-accent-400">
            <span>View Case Study</span>
            <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
          </div>
        </div>

        {/* Mockup side */}
        <div className="order-1 lg:order-2 lg:col-span-7">
          <div
            ref={ref}
            onMouseMove={handleParallax}
            onMouseLeave={resetParallax}
            className="relative transition-transform duration-200 ease-out preserve-3d"
          >
            {/* Glow */}
            <div className="absolute -inset-4 rounded-3xl bg-accent-400/5 blur-3xl transition-opacity duration-500 group-hover:bg-accent-400/10" />

            {/* Accent line */}
            <div className="absolute -left-2 top-0 h-full w-px bg-accent-400 transition-all duration-500 group-hover:-left-3" />

            <div className="relative overflow-hidden rounded-2xl">
              <div className="transition-transform duration-500 group-hover:scale-[1.02]">
                {project.id === 'job-portal' && <JobPortalMockup />}
                {project.id === 'ecommerce' && <EcommerceMockup />}
              </div>

              {/* Overlay info on hover */}
              <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-ink-950/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="p-6">
                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-accent-400">
                    Click to view details →
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
