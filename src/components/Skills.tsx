import { useScrollReveal } from "../hooks/useScrollReveal";

const CATEGORIES = [
  {
    icon: "fa-solid fa-code",
    title: "Programming Languages",
    tags: [
      "Python",
      "PowerShell",
    ],
  },
  {
    icon: "fa-solid fa-server",
    title: "Backend Development",
    tags: [
      "FastAPI",
      "Django",
      "REST APIs",
      "OpenAPI",
      "SQLAlchemy",
      "MongoDB",
      "RDBMS",
    ],
  },
  {
    icon: "fa-solid fa-cloud",
    title: "Cloud & Infrastructure",
    tags: [
      "AWS",
      "Azure AD",
      "Exchange Online",
      "Docker",
      "Kubernetes",
      "Helm",
      "Terraform",
    ],
  },
  {
    icon: "fa-solid fa-gears",
    title: "Automation & Orchestration",
    tags: [
      "Apache Airflow",
      "Prefect",
      "ServiceNow",
      "Event-Driven Systems",
    ],
  },
  {
    icon: "fa-solid fa-brain",
    title: "AI & Machine Learning",
    tags: [
      "LangChain",
      "Hugging Face",
      "CrewAI",
      "MLflow",
      "ChromaDB",
      "LLM Pipelines",
    ],
  },
  {
    icon: "fa-solid fa-chart-line",
    title: "Monitoring & Observability",
    tags: ["Grafana", "Prometheus"],
  },
  {
    icon: "fa-solid fa-toolbox",
    title: "Developer Tools",
    tags: ["Git", "Docker Compose", "Playwright", "Keycloak", "LM Studio"],
  },
];

export default function Skills() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="skills" className="py-24 bg-bg-primary" ref={ref}>
      <div className="max-w-[1056px] mx-auto px-4">
        <div className="reveal mb-12">
          <h2 className="font-heading text-[2rem] font-light text-text-primary">
            Skills &amp; Technologies
          </h2>
        </div>
        
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[1px] bg-border-subtle p-[1px]">
          {CATEGORIES.map(({ icon, title, tags }) => (
            <div
              key={title}
              className="reveal bg-bg-secondary p-6 hover:bg-bg-card transition-colors duration-150"
            >
              <div className="flex items-center gap-3 mb-4 text-text-primary">
                <i className={`${icon} text-[1.2rem] text-accent`} />
                <h3 className="font-heading text-[1rem] font-medium m-0">
                  {title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-3 py-1 text-[0.75rem] text-text-primary bg-bg-card border border-border-subtle"
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
