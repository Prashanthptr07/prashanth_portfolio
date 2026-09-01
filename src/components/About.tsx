import { stats } from '@/data/experience';

export default function About() {
  return (
    <section id="about" className="relative py-32 lg:py-48">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
          {/* Left: Label */}
          <div className="lg:col-span-3">
            <div className="reveal sticky top-32">
              <span className="label-accent">/ About</span>
              <div className="mt-6 h-px w-12 bg-accent-400" />
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-9">
            <h2 className="reveal-blur font-display text-3xl font-bold leading-[1.1] tracking-tight text-paper-50 sm:text-4xl lg:text-5xl">
              I BUILD WEB EXPERIENCES THAT COMBINE CLEAN INTERFACES WITH PRACTICAL FUNCTIONALITY.
            </h2>

            <p className="reveal mt-10 max-w-2xl text-base leading-relaxed text-paper-400 lg:text-lg">
              I'm a BCA graduate and Full-stack Developer with a strong foundation in
              web development, programming, and database management. Through hands-on
              project experience, I've built responsive web applications and practical
              digital solutions that solve real problems. I approach every challenge with
              a problem-solving mindset and a continuous learning attitude.
            </p>

            {/* Typographic elements */}
            <div className="reveal mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink-700 bg-ink-700 sm:grid-cols-4">
              {[
                { label: 'BCA', sub: 'Degree' },
                { label: 'FULL-STACK', sub: 'Development' },
                { label: 'WEB', sub: 'Applications' },
                { label: 'DATABASES', sub: 'Management' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="group bg-ink-950 p-6 transition-colors duration-300 hover:bg-ink-900 lg:p-8"
                >
                  <div className="font-display text-2xl font-bold tracking-tight text-paper-100 transition-colors duration-300 group-hover:text-accent-400 lg:text-3xl">
                    {item.label}
                  </div>
                  <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.15em] text-paper-400">
                    {item.sub}
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="reveal mt-16 flex flex-wrap gap-12 lg:gap-20">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-5xl font-bold tracking-tight text-accent-400 lg:text-6xl">
                    {stat.value}
                  </div>
                  <div className="mt-2 font-mono text-xs uppercase tracking-[0.15em] text-paper-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
