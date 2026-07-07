/* ============================================================
   Single source of truth for site content.
   All copy/metrics mirror latex/resume.tex — keep in sync.
   ============================================================ */

export const RESUME_URL = import.meta.env.BASE_URL + "resume.html";

export const PROFILE = {
  name: "Ommar Shaikh",
  role: "Founder & Principal Software Engineer",
  tagline: "Cloud Governance · DevSecOps Automation · MLOps",
  location: "Mumbai, IN",
  timezone: "Remote · EST hours",
  availability: "Open to senior / principal roles",
  email: "ommarshaikh20@gmail.com",
  phone: "+91 932-487-1009",
  summary:
    "Founder & Principal Software Engineer building Enforcer-CCA — an autonomous cloud governance platform delivering continuous compliance (SOC 2, ISO 27001) and self-healing remediation across AWS and Kubernetes. 4+ years shipping scalable, production-grade MLOps and cloud infrastructure, including high-availability identity automation for 48,000+ objects.",
} as const;

/* Rotating role titles for the hero typing effect */
export const TITLES = [
  "Founder & Principal Engineer",
  "Cloud Governance Architect",
  "DevSecOps & MLOps Engineer",
];

/* Headline metrics — each is a real, résumé-backed achievement */
export const METRICS = [
  { value: "4+", label: "Years building production cloud infra" },
  { value: "85%", label: "ULM latency reduction via automation" },
  { value: "99.9%", label: "Uptime on fault-tolerant pipelines" },
  { value: "48K+", label: "Identities automated (5K+ users)" },
] as const;

export const SOCIALS = [
  {
    href: "mailto:ommarshaikh20@gmail.com",
    icon: "fa-solid fa-envelope",
    label: "Email",
  },
  {
    href: "https://www.linkedin.com/in/ommar-shaikh-02b3a1207/",
    icon: "fa-brands fa-linkedin-in",
    label: "LinkedIn",
  },
  {
    href: "https://github.com/OmmarShaikh01",
    icon: "fa-brands fa-github",
    label: "GitHub",
  },
  {
    href: "https://www.enforcer-cca.com/",
    icon: "fa-solid fa-shield-halved",
    label: "Enforcer-CCA",
  },
] as const;

/* Sections shown in the navbar (order = scroll order) */
export const NAV_ITEMS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
] as const;

export const ABOUT = {
  paragraphs: [
    "I'm a founder-engineer based in Mumbai, working across remote teams on EST hours. I design automation frameworks, cloud governance platforms, and reliable infrastructure that holds up under enterprise-grade compliance requirements.",
    "Right now I'm building Enforcer-CCA, delivering continuous compliance and self-healing remediation across AWS and Kubernetes. I bring deep DevSecOps automation, backend architecture, and scalable system design to everything I ship.",
  ],
  focus: [
    "Cloud Governance & Compliance",
    "DevSecOps Automation",
    "MLOps & Data Pipelines",
    "Backend & API Architecture",
  ],
} as const;

export type Role = {
  title: string;
  company: string;
  location: string;
  date: string;
  current?: boolean;
  points: string[];
  stack: string[];
};

export const ROLES: Role[] = [
  {
    title: "Founder & Principal Software Engineer",
    company: "Enforcer-CCA",
    location: "Mumbai, IN (Remote)",
    date: "Feb 2026 — Present",
    current: true,
    points: [
      "Founded and built Enforcer-CCA, an autonomous cloud governance platform delivering continuous compliance and self-healing remediation across AWS and Kubernetes.",
      "Designed enterprise-grade APIs, RBAC, and audit logging supporting SOC 2 and ISO 27001 compliance frameworks.",
      "Built native integrations with Datadog, GitHub, Slack, PagerDuty, Terraform, Jira, Okta, and Splunk, driving early design-partner adoption during private beta.",
      "Owned the complete software lifecycle: architecture, cloud infrastructure, deployment automation, and production operations.",
    ],
    stack: ["Python", "Kubernetes", "AWS", "Terraform", "GitOps", "FastAPI"],
  },
  {
    title: "Senior Automation & AI Engineer",
    company: "BAARTechnology",
    location: "Mumbai, IN (Remote)",
    date: "May 2023 — Feb 2026",
    points: [
      "Architected an Enterprise User Lifecycle Management system, reducing manual ULM latency by 85% through automated AD and Exchange workflows.",
      "Engineered fault-tolerant MLOps and automation pipelines using Prefect and Docker, maintaining 99.9% uptime.",
      "Developed an Intermediate Domain Controller (IDC) validation layer enabling zero-downtime rollbacks and version-controlled infrastructure.",
      "Integrated RBAC and JIT provisioning to reach 100% alignment with security audit requirements.",
      "Streamlined ITSM workflows by integrating ServiceNow APIs with PowerShell, cutting ticket resolution from days to minutes.",
    ],
    stack: ["Python", "Prefect", "Docker", "Azure AD", "PowerShell", "ServiceNow"],
  },
  {
    title: "Backend Developer",
    company: "PortfolioBuddy",
    location: "Mumbai, IN",
    date: "Jan 2023 — May 2023",
    points: [
      "Developed a robust backend architecture in Django, enhancing platform flexibility and scalability.",
      "Optimized data storage and retrieval with MongoDB for high performance and reliability.",
      "Integrated Keycloak for secure authentication and authorization.",
      "Shipped with Docker and Docker Compose for seamless multi-environment deployment.",
      "Established real-time monitoring and alerting with Grafana and Prometheus.",
    ],
    stack: ["Django", "MongoDB", "Keycloak", "Docker", "Grafana"],
  },
  {
    title: "Backend Developer",
    company: "Freelance",
    location: "Mumbai, IN",
    date: "Oct 2021 — Dec 2022",
    points: [],
    stack: [],
  },
];

export type Project = {
  title: string;
  type: string;
  points: string[];
  stack: string[];
  link?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Enforcer-CCA",
    type: "Founder-Led Cloud Governance Platform",
    points: [
      "Developed distributed Python services to evaluate infrastructure state, detect configuration drift, and orchestrate policy-driven remediation workflows.",
      "Implemented Kubernetes controllers, IaC validation, and GitOps-based automation pipelines enforcing SOC 2 and ISO 27001 compliance.",
    ],
    stack: ["Python", "Kubernetes", "GitOps", "AWS", "Terraform"],
    link: "https://www.enforcer-cca.com/",
  },
  {
    title: "Enterprise AI-Driven User Lifecycle Framework",
    type: "Confidential Financial Institution",
    points: [
      "Designed a modular, high-availability ULM architecture enabling multi-region scalability for 48,000+ AD objects and 5,000+ users.",
      "Integrated Prefect orchestration for real-time identity updates with robust error recovery, cutting manual intervention.",
      "Built a rule-driven framework with integrated audit logging, compliance enforcement, and role-based access management.",
      "Authored standardized SOPs for maintenance, disaster recovery, and weekly infrastructure rollouts.",
    ],
    stack: ["Python", "Prefect", "Azure AD", "Exchange", "RBAC"],
  },
];

export const SKILLS = [
  {
    icon: "fa-solid fa-code",
    title: "Programming Languages",
    tags: ["Python", "PowerShell"],
  },
  {
    icon: "fa-solid fa-server",
    title: "Backend Development",
    tags: ["FastAPI", "Django", "REST APIs", "OpenAPI", "SQLAlchemy", "MongoDB", "RDBMS"],
  },
  {
    icon: "fa-solid fa-cloud",
    title: "Cloud & Infrastructure",
    tags: ["AWS", "Azure AD", "Exchange Online", "Docker", "Kubernetes", "Helm", "Terraform"],
  },
  {
    icon: "fa-solid fa-gears",
    title: "Automation & Orchestration",
    tags: ["Apache Airflow", "Prefect", "ServiceNow", "Event-Driven Systems"],
  },
  {
    icon: "fa-solid fa-brain",
    title: "AI & Machine Learning",
    tags: ["LangChain", "Hugging Face", "CrewAI", "MLflow", "ChromaDB", "LLM Pipelines"],
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
] as const;

/* The stack recruiters scan for first */
export const CORE_STACK = [
  "Python",
  "AWS",
  "Kubernetes",
  "Terraform",
  "FastAPI",
  "Docker",
  "Prefect",
  "MLOps",
  "DevSecOps",
] as const;



export const EDUCATION = [
  {
    title: "Master of Science — Data Science",
    date: "June 2022 — June 2024",
  },
  {
    title: "Bachelor of Science",
    date: "May 2019 — June 2022",
  },
] as const;
