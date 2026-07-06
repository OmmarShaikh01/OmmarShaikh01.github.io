import { useScrollReveal } from "../hooks/useScrollReveal";

const PROJECTS = [
  {
    title: "Enforcer-CCA",
    type: "Cloud Governance Platform",
    points: [
      "Developed Python services to evaluate infrastructure state, detect configuration drift, and orchestrate policy-driven remediation.",
      "Implemented Kubernetes controllers and GitOps-based automation pipelines to align with compliance standards.",
    ],
    link: "https://www.enforcer-cca.com/",
  },
  {
    title: "Enterprise AI-Driven User Lifecycle Framework",
    type: "Financial Institution Project",
    points: [
      "Designed a modular architecture enabling seamless scalability for large-scale AD environments.",
      "Integrated Prefect orchestration into data pipelines for reliable identity updates and robust error recovery.",
      "Implemented a rule-driven framework featuring integrated audit logging and role-based access management.",
      "Authored standardized operational procedures for maintenance, disaster recovery, and infrastructure rollouts.",
    ],
  },
];

export default function Projects() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="projects" className="py-24 bg-bg-secondary" ref={ref}>
      <div className="max-w-[1056px] mx-auto px-4">
        <div className="reveal mb-12">
          <h2 className="font-heading text-[2rem] font-light text-text-primary">
            Featured Projects
          </h2>
        </div>
        
        <div className="grid grid-cols-2 gap-[1px] bg-border-subtle p-[1px] max-[900px]:grid-cols-1">
          {PROJECTS.map((project, i) => (
            <div 
              key={i}
              className="reveal bg-bg-primary p-6 relative hover:bg-bg-card transition-colors duration-150 flex flex-col justify-between"
            >
              <div>
                <div className="text-[0.75rem] text-text-muted uppercase tracking-[0.32px] mb-2">
                  {project.type}
                </div>
                <h3 className="font-heading text-[1.25rem] font-normal mb-4">
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-accent no-underline hover:underline decoration-1 underline-offset-2 transition-colors">
                      {project.title}
                    </a>
                  ) : (
                    <span className="text-text-primary">{project.title}</span>
                  )}
                </h3>
                <ul className="list-none flex flex-col gap-2 mb-6">
                  {project.points.map((point, j) => (
                    <li
                      key={j}
                      className="relative pl-4 text-[0.875rem] text-text-primary leading-[1.5] before:content-['—'] before:absolute before:left-0 before:text-text-muted"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              
              {project.link && (
                <div className="mt-auto">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[0.875rem] text-accent hover:text-accent-hover no-underline">
                    View Project <i className="fa-solid fa-arrow-right ml-2 text-[0.75rem]" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
