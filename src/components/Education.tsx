import { useScrollReveal } from "../hooks/useScrollReveal";
import { EDUCATION } from "../data/profile";

export default function Education() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="education" className="py-24 bg-bg-primary" ref={ref}>
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="reveal mb-12">
          <span className="eyebrow">06 — Education</span>
          <h2 className="section-title">Education</h2>
        </div>

        <div className="grid grid-cols-2 gap-4 max-[900px]:grid-cols-1">
          {EDUCATION.map(({ title, date }) => (
            <div key={title} className="reveal card card--hover p-6">
              <div className="flex items-center gap-3 mb-2 text-text-primary">
                <i className="fa-solid fa-graduation-cap text-[1.2rem] text-accent" />
                <h3 className="font-heading text-[1.15rem] font-semibold m-0 tracking-tight">
                  {title}
                </h3>
              </div>
              <div className="text-[0.875rem] text-text-muted pl-9">{date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
