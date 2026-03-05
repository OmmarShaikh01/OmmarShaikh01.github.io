import { useScrollReveal } from "../hooks/useScrollReveal";

const CATEGORIES = [
  {
    icon: "fa-solid fa-cloud",
    title: "Cloud Infrastructure",
    tags: [
      "AWS",
      "Azure AD",
      "Exchange Online",
      "Terraform",
      "Kubernetes",
      "Docker",
      "Helm",
    ],
  },
  {
    icon: "fa-solid fa-gears",
    title: "Automation & Orchestration",
    tags: [
      "PowerShell",
      "Prefect",
      "Apache Airflow",
      "ServiceNow",
      "Event-Driven Systems",
    ],
  },
  {
    icon: "fa-solid fa-brain",
    title: "AI Engineering",
    tags: [
      "Python",
      "LangChain",
      "HuggingFace",
      "MLflow",
      "CrewAI",
      "ChromaDB",
      "LLM Pipelines",
      "FastAPI",
    ],
  },
  {
    icon: "fa-solid fa-chart-line",
    title: "Monitoring & Observability",
    tags: ["Grafana", "Prometheus"],
  },
  {
    icon: "fa-solid fa-server",
    title: "Backend Development",
    tags: [
      "Django",
      "FastAPI",
      "MongoDB",
      "SQLAlchemy",
      "RDBMS",
      "OpenAPI",
      "REST APIs",
    ],
  },
  {
    icon: "fa-solid fa-toolbox",
    title: "Other Tools",
    tags: ["Git", "Playwright", "LMStudio", "Docker Compose", "Keycloak"],
  },
];

export default function Skills() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="skills" className="py-[100px] bg-bg-secondary" ref={ref}>
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 font-body text-[0.8rem] font-semibold tracking-[3px] uppercase text-accent mb-3 before:inline-block before:w-6 before:h-0.5 before:gradient-accent before:rounded-sm">
            Expertise
          </span>
          <h2 className="font-heading text-[clamp(2rem,4vw,2.8rem)] font-bold text-text-primary mb-12">
            Skills &amp; Technologies
          </h2>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-6 max-[480px]:grid-cols-1">
          {CATEGORIES.map(({ icon, title, tags }, i) => (
            <div
              key={title}
              className="reveal bg-bg-card border border-border-subtle rounded-[var(--radius-card)] px-7 py-8 hover:bg-bg-card-hover hover:border-border-accent hover:-translate-y-1 transition-all duration-300"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[rgba(0,212,255,0.08)] mb-[18px] text-[1.3rem]">
                <i className={icon} />
              </div>
              <h3 className="font-heading text-[1.1rem] font-semibold mb-4 text-text-primary">
                {title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-3.5 py-1.5 text-[0.8rem] font-medium text-text-secondary bg-[rgba(255,255,255,0.04)] border border-border-subtle rounded-full hover:bg-[rgba(0,212,255,0.1)] hover:text-accent hover:border-border-accent transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
