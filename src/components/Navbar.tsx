import { useEffect, useState } from 'react';
import { site } from '@/data/site';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useMagnetic } from '@/hooks/useMagnetic';
import { useTheme } from '@/hooks/useTheme';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection();
  const talkRef = useMagnetic<HTMLAnchorElement>(0.2);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-ink-950/80 backdrop-blur-xl border-b border-ink-700'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 lg:px-12">
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex items-center gap-3"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-ink-600 font-mono text-sm font-bold text-accent-400 transition-colors duration-300 group-hover:border-accent-400 group-hover:bg-accent-400/10">
              {site.initials}
            </span>
            <span className="font-display text-sm font-semibold tracking-tight text-paper-100">
              {site.name}
            </span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {site.navLinks.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = active === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="group relative font-mono text-xs uppercase tracking-[0.15em] transition-colors duration-300"
                >
                  <span className={isActive ? 'text-accent-400' : 'text-paper-300 group-hover:text-paper-100'}>
                    {link.label}
                  </span>
                  <span
                    className={`absolute -bottom-1.5 left-0 h-px bg-accent-400 transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggle}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-ink-600 text-paper-300 transition-colors duration-300 hover:border-accent-400 hover:text-accent-400"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
              )}
            </button>

            <a
              ref={talkRef}
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden items-center gap-2 rounded-full border border-ink-600 px-5 py-2.5 font-mono text-xs uppercase tracking-[0.15em] text-paper-100 transition-colors duration-300 hover:border-accent-400 hover:text-accent-400 lg:flex"
            >
              Let's Talk
              <span className="text-accent-400">↗</span>
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col gap-1.5 lg:hidden"
              aria-label="Toggle menu"
            >
              <span className={`h-px w-6 bg-paper-100 transition-all duration-300 ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
              <span className={`h-px w-6 bg-paper-100 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`h-px w-6 bg-paper-100 transition-all duration-300 ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
            </button>
          </div>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-ink-950 transition-all duration-500 lg:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex h-full flex-col items-start justify-center gap-2 px-8">
          {site.navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="group flex items-baseline gap-4"
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.4s ease ${i * 0.08 + 0.1}s, transform 0.4s ease ${i * 0.08 + 0.1}s`,
              }}
            >
              <span className="font-mono text-xs text-accent-400">0{i + 1}</span>
              <span className="font-display text-4xl font-bold tracking-tight text-paper-100 transition-colors group-hover:text-accent-400">
                {link.label}
              </span>
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="mt-8 flex items-center gap-2 font-mono text-sm uppercase tracking-[0.15em] text-accent-400"
            style={{
              opacity: menuOpen ? 1 : 0,
              transition: 'opacity 0.4s ease 0.6s',
            }}
          >
            Let's Talk <span>↗</span>
          </a>
        </div>
      </div>
    </>
  );
}
