import { useScrollReveal } from "../hooks/useScrollReveal";
import { PROJECTS } from "../data/profile";

export default function Projects() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="projects" className="py-24 bg-bg-secondary" ref={ref}>
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="reveal mb-12">
          <span className="eyebrow">03 — Projects</span>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        <div className="grid grid-cols-2 gap-4 max-[900px]:grid-cols-1">
          {PROJECTS.map((project, i) => (
            <div
              key={i}
              className="reveal card card--hover p-6 sm:p-8 flex flex-col"
            >
              <div className="flex-1">
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="text-[0.75rem] text-text-muted uppercase tracking-[0.12em]">
                    {project.type}
                  </div>
                  {project.link && (
                    <i className="fa-solid fa-arrow-up-right-from-square text-text-muted text-[0.75rem]" />
                  )}
                </div>
                <h3 className="font-heading text-[1.4rem] font-semibold mb-4 tracking-tight">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-primary hover:text-accent no-underline transition-colors"
                    >
                      {project.title}
                    </a>
                  ) : (
                    <span className="text-text-primary">{project.title}</span>
                  )}
                </h3>
                <ul className="list-none flex flex-col gap-2.5 mb-6">
                  {project.points.map((point, j) => (
                    <li
                      key={j}
                      className="relative pl-5 text-[0.9375rem] text-text-secondary leading-[1.65] before:content-['▹'] before:absolute before:left-0 before:text-accent"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.stack.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[0.875rem] font-medium text-accent hover:text-accent-hover no-underline"
                  >
                    View Project{" "}
                    <i className="fa-solid fa-arrow-right ml-2 text-[0.75rem]" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
