import { experience } from '@/data/experience';

export default function Experience() {
  return (
    <section id="experience" className="relative py-32 lg:py-48">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        <div className="mb-20">
          <div className="reveal mb-4">
            <span className="label-accent">/ Experience</span>
          </div>
          <h2 className="reveal-blur font-display text-section font-bold leading-[0.9] tracking-tightest text-paper-50">
            EXPERIENCE
          </h2>
        </div>

        <div className="reveal">
          {experience.map((exp) => (
            <div
              key={exp.number}
              className="group grid grid-cols-1 gap-8 border-t border-ink-700 py-12 transition-colors duration-500 hover:border-accent-400/30 lg:grid-cols-12 lg:gap-6 lg:py-16"
            >
              {/* Number */}
              <div className="lg:col-span-2">
                <span className="font-display text-6xl font-bold text-ink-600 transition-colors duration-500 group-hover:text-accent-400 lg:text-7xl">
                  {exp.number}
                </span>
              </div>

              {/* Position + Company */}
              <div className="lg:col-span-4">
                <h3 className="font-display text-xl font-bold tracking-tight text-paper-100 lg:text-2xl">
                  {exp.position}
                </h3>
                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1">
                  <span className="font-mono text-sm text-accent-400">{exp.company}</span>
                  <span className="font-mono text-xs text-paper-400">{exp.location}</span>
                </div>
                <span className="mt-3 block font-mono text-xs uppercase tracking-[0.15em] text-paper-400">
                  {exp.date}
                </span>
              </div>

              {/* Description */}
              <div className="lg:col-span-4">
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed text-paper-400">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="lg:col-span-2">
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-ink-600 bg-ink-800 px-2.5 py-1 font-mono text-[10px] text-paper-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
