import { marqueeSkills } from '@/data/skills';

export default function SkillsMarquee() {
  const doubled = [...marqueeSkills, ...marqueeSkills];

  return (
    <section className="relative overflow-hidden border-y border-ink-700 py-8 lg:py-10">
      <div className="group flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee items-center group-hover:[animation-play-state:paused]">
          {doubled.map((skill, i) => (
            <span key={i} className="flex items-center">
              <span className="px-8 font-display text-2xl font-medium tracking-tight text-paper-300 transition-colors duration-300 hover:text-accent-400 lg:text-3xl">
                {skill}
              </span>
              <span className="text-accent-400">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
