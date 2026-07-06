import { useScrollReveal } from "../hooks/useScrollReveal";

const STATS = [
  { label: "Infrastructure Scaling" },
  { label: "Performance Optimization" },
  { label: "Cloud Governance" },
  { label: "DevSecOps Automation" },
];

export default function About() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="about" className="py-24 bg-bg-secondary" ref={ref}>
      <div className="max-w-[1056px] mx-auto px-4">
        <div className="reveal mb-12">
          <h2 className="font-heading text-[2rem] font-light text-text-primary">
            About Me
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-8 items-start max-[900px]:grid-cols-1">
          <div className="reveal">
            <p className="text-text-primary text-[1rem] leading-[1.6] mb-6 font-normal max-w-[480px]">
              I am a Software Engineer based in Mumbai, IN, working across remote teams. I specialize in designing automation frameworks, cloud governance platforms, and reliable infrastructure.
            </p>
            <p className="text-text-primary text-[1rem] leading-[1.6] font-normal max-w-[480px]">
              Currently building Enforcer-CCA, I focus on delivering continuous compliance and remediation workflows across AWS and Kubernetes. I bring expertise in DevSecOps automation, backend architecture, and scalable system design to every project.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-[1px] reveal max-[480px]:grid-cols-1 bg-border-subtle p-[1px]">
            {STATS.map(({ label }, i) => (
              <div
                key={i}
                className="bg-bg-secondary p-6 flex flex-col justify-between h-[120px] hover:bg-bg-card transition-colors duration-150"
              >
                <i className="fa-solid fa-check text-accent text-[1rem]"></i>
                <div className="text-[0.875rem] text-text-primary font-medium mt-4">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
