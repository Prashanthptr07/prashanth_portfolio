import { useEffect } from 'react';
import type { Project } from '@/data/projects';
import JobPortalMockup from '@/components/mockups/JobPortalMockup';
import EcommerceMockup from '@/components/mockups/EcommerceMockup';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    }
    return () => { document.body.style.overflow = ''; };
  }, [project]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[90] flex items-start justify-center overflow-y-auto bg-ink-950/90 px-4 py-20 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl rounded-2xl border border-ink-700 bg-ink-900 p-6 shadow-2xl sm:p-10"
        onClick={(e) => e.stopPropagation()}
        style={{
          animation: 'modalIn 0.4s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        <style>{`
          @keyframes modalIn {
            from { opacity: 0; transform: translateY(30px) scale(0.97); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }
        `}</style>

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-ink-600 text-paper-300 transition-colors duration-300 hover:border-accent-400 hover:text-accent-400"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Header */}
        <div className="mb-2 flex items-center gap-3">
          <span className="font-display text-3xl font-bold text-ink-600">{project.number}</span>
          <span className="label-accent">{project.category}</span>
        </div>

        <h3 className="font-display text-2xl font-bold tracking-tight text-paper-50 sm:text-3xl">
          {project.fullTitle}
        </h3>

        <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 font-mono text-xs text-paper-400">
          <span>Role: <span className="text-paper-200">{project.role}</span></span>
          <span>Date: <span className="text-paper-200">{project.date}</span></span>
        </div>

        {/* Mockup */}
        <div className="my-8">
          {project.id === 'job-portal' && <JobPortalMockup />}
          {project.id === 'ecommerce' && <EcommerceMockup />}
        </div>

        {/* Overview */}
        <div className="mb-8">
          <span className="label mb-3 block">Overview</span>
          <p className="text-sm leading-relaxed text-paper-300">{project.description}</p>
        </div>

        {/* Features */}
        <div className="mb-8">
          <span className="label mb-4 block">Features</span>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {project.features.map((f) => (
              <div key={f} className="flex items-center gap-3 text-sm text-paper-300">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
                {f}
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-8">
          <span className="label mb-3 block">Technologies</span>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="rounded-md border border-ink-600 bg-ink-800 px-3 py-1.5 font-mono text-xs text-paper-200"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-ink-600 px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-paper-100 transition-colors duration-300 hover:border-accent-400 hover:text-accent-400"
          >
            GitHub
            <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-accent-400 px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-ink-950 transition-colors duration-300 hover:bg-accent-300"
          >
            Live Demo
            <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1">↘</span>
          </a>
        </div>
      </div>
    </div>
  );
}
