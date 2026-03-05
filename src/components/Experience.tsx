import { useScrollReveal } from "../hooks/useScrollReveal";

const ROLES = [
  {
    title: "Senior Automation & AI Engineer",
    date: "May 2023 — Feb 2026",
    company: "BAARTechnology · Mumbai, IN (Remote)",
    points: [
      "Architected an Enterprise ULM system for 5,000+ users, reducing manual onboarding latency by 85% through automated AD and Exchange workflows.",
      "Engineered fault-tolerant MLOps and automation pipelines using Prefect and Docker, maintaining 99.9% uptime.",
      "Developed an Intermediate Domain Controller (IDC) as a validation layer, enabling zero-downtime rollbacks and version-controlled infrastructure.",
      "Optimized security compliance by integrating RBAC and JIT provisioning, ensuring 100% alignment with audit requirements.",
      "Streamlined ITSM workflows by integrating ServiceNow APIs with PowerShell, cutting ticket resolution time from days to minutes.",
    ],
  },
  {
    title: "Backend Developer",
    date: "Jan 2023 — May 2023",
    company: "PortfolioBuddy · Mumbai, IN",
    points: [
      "Developed a robust backend architecture using Django, enhancing platform flexibility and scalability.",
      "Optimized data storage and retrieval with MongoDB, ensuring high performance and reliability.",
      "Integrated Keycloak for secure authentication and authorization, safeguarding user data.",
      "Implemented Docker and Docker Compose for seamless deployment and scalability across environments.",
      "Established real-time monitoring with Grafana and Prometheus, ensuring minimal downtime.",
    ],
  },
  {
    title: "Backend Developer",
    date: "Oct 2021 — Dec 2022",
    company: "Freelance · Mumbai, IN",
    points: [
      "Integrated Discord API for real-time communication and effective user management within a Discord community.",
      "Automated tasks and provided real-time responses through bots, streamlining community interactions.",
      "Implemented efficient MongoDB schemas to manage large volumes of user data seamlessly.",
      "Built innovative social network bots to facilitate interactions and improve user engagement.",
    ],
  },
];

export default function Experience() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="experience" className="py-[100px]" ref={ref}>
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 font-body text-[0.8rem] font-semibold tracking-[3px] uppercase text-accent mb-3 before:inline-block before:w-6 before:h-0.5 before:gradient-accent before:rounded-sm">
            Career
          </span>
          <h2 className="font-heading text-[clamp(2rem,4vw,2.8rem)] font-bold text-text-primary mb-12">
            Work Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative pl-10 before:content-[''] before:absolute before:left-[8px] before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-accent before:via-accent-alt before:to-transparent before:rounded-sm max-md:pl-7">
          {ROLES.map(({ title, date, company, points }, i) => (
            <div key={i} className="reveal relative mb-12 last:mb-0 group">
              {/* Dot */}
              <div className="absolute left-[-40px] top-[6px] w-[18px] h-[18px] rounded-full bg-bg-primary border-[3px] border-accent z-10 group-hover:shadow-[0_0_16px_var(--color-accent-glow)] transition-shadow duration-300 max-md:left-[-28px] max-md:w-3.5 max-md:h-3.5" />

              {/* Card */}
              <div className="bg-bg-card border border-border-subtle rounded-[var(--radius-card)] p-8 hover:bg-bg-card-hover hover:border-border-accent hover:translate-x-2 transition-all duration-300 max-md:p-6">
                <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                  <span className="font-heading text-[1.2rem] font-semibold text-text-primary">
                    {title}
                  </span>
                  <span className="text-[0.85rem] font-medium text-accent whitespace-nowrap">
                    {date}
                  </span>
                </div>
                <div className="text-[0.95rem] text-text-muted mb-4">
                  {company}
                </div>
                <ul className="list-none">
                  {points.map((point, j) => (
                    <li
                      key={j}
                      className="relative pl-5 mb-2.5 text-[0.93rem] text-text-secondary leading-[1.7] before:content-['▹'] before:absolute before:left-0 before:text-accent before:text-[0.9rem]"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
