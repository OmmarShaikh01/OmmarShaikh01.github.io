import { useScrollReveal } from "../hooks/useScrollReveal";

const POINTS = [
  "Designed a modular, high-availability ULM architecture enabling seamless multi-region scalability for 48,000+ AD objects and 5,000+ users.",
  "Integrated Prefect orchestration into data pipelines for real-time identity updates, reducing manual intervention and ensuring robust error recovery.",
  "Implemented a rule-driven framework with integrated audit logging, compliance enforcement, and role-based access management.",
  "Authored standardized SOPs for maintenance, disaster recovery, and weekly infrastructure rollouts to guarantee operational continuity.",
];

export default function Projects() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="projects" className="py-[100px] bg-bg-secondary" ref={ref}>
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 font-body text-[0.8rem] font-semibold tracking-[3px] uppercase text-accent mb-3 before:inline-block before:w-6 before:h-0.5 before:gradient-accent before:rounded-sm">
            Work
          </span>
          <h2 className="font-heading text-[clamp(2rem,4vw,2.8rem)] font-bold text-text-primary mb-12">
            Featured Project
          </h2>
        </div>
        <div className="reveal bg-bg-card border border-border-subtle rounded-[var(--radius-card)] p-10 relative overflow-hidden hover:bg-bg-card-hover hover:border-border-accent hover:-translate-y-1 transition-all duration-300 before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:gradient-accent max-md:p-7">
          <div className="text-[0.8rem] font-semibold text-accent uppercase tracking-[2px] mb-3">
            Enterprise Solution
          </div>
          <h3 className="font-heading text-[1.4rem] font-bold mb-2">
            Enterprise AI-Driven User Lifecycle Framework
          </h3>
          <div className="text-[0.9rem] text-text-muted mb-5">
            Confidential Financial Institution
          </div>
          <ul className="list-none">
            {POINTS.map((point, i) => (
              <li
                key={i}
                className="relative pl-5 mb-2.5 text-[0.93rem] text-text-secondary leading-[1.7] before:content-['▹'] before:absolute before:left-0 before:text-accent"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
