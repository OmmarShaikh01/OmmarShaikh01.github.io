import { useScrollReveal } from "../hooks/useScrollReveal";

const DEGREES = [
  {
    title: "Masters of Science (Spl. Data Science)",
    date: "June 2022 — June 2024",
  },
  { title: "Bachelors of Science", date: "May 2019 — June 2022" },
];

export default function Education() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="education" className="py-[100px] bg-bg-secondary" ref={ref}>
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 font-body text-[0.8rem] font-semibold tracking-[3px] uppercase text-accent mb-3 before:inline-block before:w-6 before:h-0.5 before:gradient-accent before:rounded-sm">
            Academics
          </span>
          <h2 className="font-heading text-[clamp(2rem,4vw,2.8rem)] font-bold text-text-primary mb-12">
            Education
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-6 max-[900px]:grid-cols-1">
          {DEGREES.map(({ title, date }, i) => (
            <div
              key={i}
              className="reveal bg-bg-card border border-border-subtle rounded-[var(--radius-card)] px-7 py-8 hover:bg-bg-card-hover hover:border-border-accent hover:-translate-y-1 transition-all duration-300"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[rgba(123,97,255,0.1)] mb-4 text-[1.3rem]">
                <i className="fa-solid fa-graduation-cap" />
              </div>
              <h3 className="font-heading text-[1.1rem] font-semibold text-text-primary mb-1.5">
                {title}
              </h3>
              <div className="text-[0.85rem] text-accent font-medium">
                {date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
