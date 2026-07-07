import { useScrollReveal } from "../hooks/useScrollReveal";
import { ROLES } from "../data/profile";

export default function Experience() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="experience" className="py-24 bg-bg-primary" ref={ref}>
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="reveal mb-12">
          <span className="eyebrow">02 — Experience</span>
          <h2 className="section-title">Work Experience</h2>
        </div>

        <div className="flex flex-col gap-4">
          {ROLES.map(({ title, company, location, date, current, points, stack }, i) => (
            <div
              key={i}
              className="reveal card card--hover p-6 sm:p-8"
            >
              <div className="flex justify-between items-start flex-wrap gap-x-6 gap-y-2 mb-4">
                <div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="font-heading text-[1.3rem] font-semibold text-text-primary tracking-tight">
                      {title}
                    </h3>
                    {current && (
                      <span className="inline-flex items-center gap-1.5 text-[0.6875rem] uppercase tracking-wider text-status-online rounded-full border border-status-online/40 px-2.5 py-0.5">
                        <span className="status-dot relative inline-block w-1.5 h-1.5 bg-status-online" />
                        Current
                      </span>
                    )}
                  </div>
                  <div className="text-[0.9375rem] text-accent mt-1.5 font-medium">
                    {company}{" "}
                    <span className="text-text-muted font-normal">· {location}</span>
                  </div>
                </div>
                <div className="text-[0.875rem] text-text-muted whitespace-nowrap">
                  {date}
                </div>
              </div>

              {points.length > 0 && (
                <ul className="list-none flex flex-col gap-2.5 mt-4 mb-5">
                  {points.map((point, j) => (
                    <li
                      key={j}
                      className="relative pl-5 text-[0.9375rem] text-text-secondary leading-[1.65] before:content-['▹'] before:absolute before:left-0 before:text-accent"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              )}

              {stack.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {stack.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
