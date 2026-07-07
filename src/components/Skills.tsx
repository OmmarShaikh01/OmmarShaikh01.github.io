import { useScrollReveal } from "../hooks/useScrollReveal";
import { SKILLS, CORE_STACK } from "../data/profile";

export default function Skills() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="skills" className="py-24 bg-bg-primary" ref={ref}>
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="reveal mb-12">
          <span className="eyebrow">04 — Skills</span>
          <h2 className="section-title">Skills &amp; Technologies</h2>
        </div>

        {/* Core stack — what recruiters scan for first */}
        <div className="reveal card p-6 sm:p-7 mb-4">
          <div className="text-[0.8125rem] uppercase tracking-[0.16em] text-text-muted mb-4">
            Core Stack
          </div>
          <div className="flex flex-wrap gap-2.5">
            {CORE_STACK.map((tech) => (
              <span key={tech} className="tag tag--accent text-[0.875rem] px-3.5 py-1.5">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
          {SKILLS.map(({ icon, title, tags }) => (
            <div key={title} className="reveal card card--hover p-6">
              <div className="flex items-center gap-3 mb-4 text-text-primary">
                <i className={`${icon} text-[1.2rem] text-accent`} />
                <h3 className="font-heading text-[1.05rem] font-semibold m-0 tracking-tight">
                  {title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="tag">
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
