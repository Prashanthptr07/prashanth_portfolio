import { site } from '@/data/site';

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-ink-700 py-16 lg:py-24">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        <div className="flex flex-col items-start justify-between gap-12 lg:flex-row lg:items-center">
          {/* Left */}
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-ink-600 font-mono text-sm font-bold text-accent-400">
              {site.initials}
            </span>
            <span className="font-display text-sm font-semibold tracking-tight text-paper-100">
              {site.name}
            </span>
          </div>

          {/* Center */}
          <span className="font-mono text-xs uppercase tracking-[0.15em] text-paper-400">
            Full-stack Developer
          </span>

          {/* Right */}
          <div className="flex items-center gap-6">
            <a
              href={site.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline font-mono text-xs uppercase tracking-[0.15em] text-paper-300 transition-colors duration-300 hover:text-accent-400"
            >
              GitHub
            </a>
            <a
              href={site.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline font-mono text-xs uppercase tracking-[0.15em] text-paper-300 transition-colors duration-300 hover:text-accent-400"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${site.email}`}
              className="link-underline font-mono text-xs uppercase tracking-[0.15em] text-paper-300 transition-colors duration-300 hover:text-accent-400"
            >
              Email
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-ink-700 pt-8 sm:flex-row sm:items-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-paper-400">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
          <button
            onClick={scrollTop}
            className="group flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-paper-300 transition-colors duration-300 hover:text-accent-400"
          >
            Back to Top
            <span className="transition-transform duration-300 group-hover:-translate-y-1">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
