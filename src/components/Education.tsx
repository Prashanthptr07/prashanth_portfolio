import { education, languages } from '@/data/experience';

export default function Education() {
  return (
    <section id="education" className="relative py-32 lg:py-48">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        {/* Education */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3">
            <div className="reveal sticky top-32">
              <span className="label-accent">/ Education</span>
              <div className="mt-6 h-px w-12 bg-accent-400" />
            </div>
          </div>

          <div className="lg:col-span-9">
            <div className="reveal group grid grid-cols-1 gap-8 border-t border-ink-700 py-12 transition-colors duration-500 hover:border-accent-400/30 lg:grid-cols-12 lg:gap-6">
              {/* CGPA */}
              <div className="lg:col-span-3">
                <div className="font-display text-7xl font-bold tracking-tight text-accent-400 lg:text-8xl">
                  {education.cgpa}
                </div>
                <div className="mt-2 font-mono text-xs uppercase tracking-[0.15em] text-paper-400">
                  CGPA
                </div>
              </div>

              {/* Details */}
              <div className="lg:col-span-6 lg:flex lg:flex-col lg:justify-center">
                <h3 className="font-display text-2xl font-bold tracking-tight text-paper-100 lg:text-3xl">
                  {education.institution}
                </h3>
                <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1">
                  <span className="font-mono text-sm text-accent-400">{education.degree}</span>
                  <span className="font-mono text-xs text-paper-400">{education.date}</span>
                </div>
              </div>

              {/* Location */}
              <div className="lg:col-span-3 lg:flex lg:items-end">
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-paper-400">
                  {education.location}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Languages */}
        <div className="mt-32 grid grid-cols-1 gap-16 lg:mt-48 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3">
            <div className="reveal sticky top-32">
              <span className="label-accent">/ Languages</span>
              <div className="mt-6 h-px w-12 bg-accent-400" />
            </div>
          </div>

          <div className="lg:col-span-9">
            <div className="reveal flex flex-wrap items-baseline gap-x-8 gap-y-4">
              {languages.map((lang, i) => (
                <div key={lang} className="flex items-baseline gap-8">
                  <span className="font-display text-3xl font-medium tracking-tight text-paper-200 transition-colors duration-300 hover:text-accent-400 lg:text-4xl">
                    {lang}
                  </span>
                  {i < languages.length - 1 && (
                    <span className="text-ink-600">·</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
