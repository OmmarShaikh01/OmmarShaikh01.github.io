import { useScrollReveal } from "../hooks/useScrollReveal";
import { ABOUT } from "../data/profile";

export default function About() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="about" className="py-24 bg-bg-secondary" ref={ref}>
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="reveal mb-12">
          <span className="eyebrow">01 — About</span>
          <h2 className="section-title">About Me</h2>
        </div>
        <div className="grid grid-cols-2 gap-12 items-start max-[900px]:grid-cols-1">
          <div className="reveal">
            {ABOUT.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-text-secondary text-[1.0625rem] leading-[1.8] mb-6 last:mb-0 max-w-[540px]"
              >
                {p}
              </p>
            ))}
          </div>
          <div className="reveal">
            <div className="text-[0.8125rem] uppercase tracking-[0.16em] text-text-muted mb-4">
              Focus Areas
            </div>
            <div className="grid grid-cols-2 gap-3 max-[480px]:grid-cols-1">
              {ABOUT.focus.map((label) => (
                <div
                  key={label}
                  className="card card--hover p-5 flex items-start gap-3"
                >
                  <i className="fa-solid fa-check text-accent text-[0.9rem] mt-[3px]" />
                  <div className="text-[0.9375rem] text-text-primary font-medium">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
