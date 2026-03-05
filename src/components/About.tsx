import { useScrollReveal } from "../hooks/useScrollReveal";

const STATS = [
  { number: "4+", label: "Years Experience" },
  { number: "85%", label: "Latency Reduction" },
  { number: "48K+", label: "AD Objects Managed" },
  { number: "99.9%", label: "System Uptime" },
];

export default function About() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="about" className="py-[100px]" ref={ref}>
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 font-body text-[0.8rem] font-semibold tracking-[3px] uppercase text-accent mb-3 before:inline-block before:w-6 before:h-0.5 before:gradient-accent before:rounded-sm">
            About Me
          </span>
          <h2 className="font-heading text-[clamp(2rem,4vw,2.8rem)] font-bold text-text-primary mb-12">
            Who I Am
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-12 items-start max-[900px]:grid-cols-1">
          <div className="reveal">
            <p className="text-text-secondary text-[1.02rem] leading-[1.9] mb-5">
              I'm a Senior AI &amp; Automation Engineer based in Mumbai, India,
              working across remote and EST timezone teams. I specialize in
              designing enterprise-level automation frameworks, Agentic AI
              pipelines, and fault-tolerant cloud infrastructure.
            </p>
            <p className="text-text-secondary text-[1.02rem] leading-[1.9] mb-5">
              With a track record of reducing operational latency by 85% and
              maintaining 99.9% uptime for critical systems, I bring deep
              expertise in Python, PowerShell, AWS, and modern MLOps tooling to
              every project. My work supports 48,000+ managed objects and 5,000+
              users at enterprise scale.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5 reveal max-[480px]:grid-cols-1">
            {STATS.map(({ number, label }) => (
              <div
                key={label}
                className="bg-bg-card border border-border-subtle rounded-[var(--radius-card)] px-6 py-7 text-center hover:bg-bg-card-hover hover:border-border-accent hover:-translate-y-1 transition-all duration-300"
              >
                <div className="font-heading text-[2.2rem] font-bold gradient-text">
                  {number}
                </div>
                <div className="text-[0.85rem] text-text-muted mt-1">
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
