import { useScrollReveal } from "../hooks/useScrollReveal";

const ROLES = [
  {
    title: "Software Engineer",
    date: "Feb 2026 — Present",
    company: "Enforcer-CCA · Mumbai, IN (Remote)",
    points: [
      "Building Enforcer-CCA, an autonomous cloud governance platform focused on continuous compliance and automated remediation across AWS and Kubernetes.",
      "Developing API services, RBAC structures, and audit logging to align with SOC 2 and ISO 27001 compliance frameworks.",
      "Integrating native workflows with tools like Datadog, GitHub, Terraform, and Slack to enhance infrastructure visibility.",
      "Managing cloud infrastructure and deployment automation to support production operations.",
    ],
  },
  {
    title: "Automation & AI Engineer",
    date: "May 2023 — Feb 2026",
    company: "BAARTechnology · Mumbai, IN (Remote)",
    points: [
      "Designed an Enterprise User Lifecycle Management system, streamlining onboarding through automated AD and Exchange workflows.",
      "Built resilient MLOps and automation pipelines using Prefect and Docker, ensuring high availability and fault tolerance.",
      "Developed an Intermediate Domain Controller as a validation layer for version-controlled infrastructure updates.",
      "Aligned systems with security audit requirements by integrating role-based access control and JIT provisioning.",
      "Integrated ServiceNow APIs with PowerShell to accelerate ITSM ticket resolution workflows.",
    ],
  },
  {
    title: "Backend Developer",
    date: "Jan 2023 — May 2023",
    company: "PortfolioBuddy · Mumbai, IN",
    points: [
      "Developed a reliable backend architecture using Django to support platform flexibility.",
      "Configured data storage and retrieval processes with MongoDB for consistent performance.",
      "Integrated Keycloak for authentication and authorization to safeguard user data.",
      "Utilized Docker and Docker Compose for streamlined deployment across environments.",
      "Implemented monitoring with Grafana and Prometheus for operational visibility.",
    ],
  },
  {
    title: "Backend Developer",
    date: "Oct 2021 — Dec 2022",
    company: "Freelance · Mumbai, IN",
    points: [],
  },
];

export default function Experience() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="experience" className="py-24 bg-bg-primary" ref={ref}>
      <div className="max-w-[1056px] mx-auto px-4">
        <div className="reveal mb-12">
          <h2 className="font-heading text-[2rem] font-light text-text-primary">
            Work Experience
          </h2>
        </div>

        <div className="border-l border-border-strong pl-[1px]">
          {ROLES.map(({ title, date, company, points }, i) => (
            <div key={i} className="reveal relative mb-8 last:mb-0 group bg-bg-secondary p-6 hover:bg-bg-card transition-colors duration-150">
              <div className="absolute left-[-2px] top-0 bottom-0 w-[3px] bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex justify-between items-start flex-wrap gap-4 mb-4">
                <div>
                  <h3 className="font-heading text-[1.25rem] font-normal text-text-primary mb-1">
                    {title}
                  </h3>
                  <div className="text-[0.875rem] text-text-secondary">
                    {company}
                  </div>
                </div>
                <div className="text-[0.875rem] text-text-secondary">
                  {date}
                </div>
              </div>
              
              {points.length > 0 && (
                <ul className="list-none flex flex-col gap-2 mt-4">
                  {points.map((point, j) => (
                    <li
                      key={j}
                      className="relative pl-4 text-[0.875rem] text-text-primary leading-[1.5] before:content-['—'] before:absolute before:left-0 before:text-text-muted"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
