import { expertise } from '@/data/skills';

export default function Expertise() {
  return (
    <section id="expertise" className="relative py-32 lg:py-48">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        <div className="mb-20 flex flex-col gap-4">
          <div className="reveal">
            <span className="label-accent">/ What I Do</span>
          </div>
          <h2 className="reveal-blur font-display text-section font-bold leading-[0.9] tracking-tightest text-paper-50">
            EXPERTISE
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-ink-700 bg-ink-700 md:grid-cols-2">
          {expertise.map((area) => (
            <div
              key={area.number}
              className="group relative bg-ink-950 p-8 transition-all duration-500 hover:bg-ink-900 lg:p-12"
            >
              {/* Number */}
              <div className="mb-6 flex items-center justify-between">
                <span className="font-display text-5xl font-bold text-ink-600 transition-all duration-500 group-hover:text-accent-400 lg:text-6xl">
                  {area.number}
                </span>
                <div className="h-px w-0 bg-accent-400 transition-all duration-500 group-hover:w-16" />
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-bold tracking-tight text-paper-100 transition-colors duration-300 group-hover:text-accent-400 lg:text-2xl">
                {area.title}
              </h3>

              {/* Items */}
              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                {area.items.map((item) => (
                  <li
                    key={item}
                    className="font-mono text-sm text-paper-400 transition-colors duration-300 group-hover:text-paper-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              {/* Accent line bottom */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-accent-400 transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
