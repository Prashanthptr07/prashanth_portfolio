import { useState } from 'react';
import { projects } from '@/data/projects';
import ProjectShowcase from '@/components/ProjectShowcase';
import ProjectModal from '@/components/ProjectModal';

export default function Projects() {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const active = projects.find((p) => p.id === activeProject) || null;

  return (
    <section id="work" className="relative py-32 lg:py-48">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        <div className="mb-20">
          <div className="reveal mb-4">
            <span className="label-accent">/ Selected Work</span>
          </div>
          <h2 className="reveal-blur font-display text-section font-bold leading-[0.9] tracking-tightest text-paper-50">
            SELECTED WORK
          </h2>
          <p className="reveal mt-6 max-w-md text-sm leading-relaxed text-paper-400">
            A selection of projects built through hands-on development.
          </p>
        </div>

        <div className="space-y-32 lg:space-y-48">
          {projects.map((project) => (
            <ProjectShowcase
              key={project.id}
              project={project}
              onOpen={() => setActiveProject(project.id)}
            />
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActiveProject(null)} />
    </section>
  );
}
