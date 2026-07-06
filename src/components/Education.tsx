import { useScrollReveal } from "../hooks/useScrollReveal";

const DEGREES = [
  {
    title: "Masters of Science (Spl. Data Science)",
    date: "June 2022 — June 2024",
  },
  { 
    title: "Bachelors of Science", 
    date: "May 2019 — June 2022" 
  },
];

export default function Education() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="education" className="py-24 bg-bg-secondary" ref={ref}>
      <div className="max-w-[1056px] mx-auto px-4">
        <div className="reveal mb-12">
          <h2 className="font-heading text-[2rem] font-light text-text-primary">
            Education
          </h2>
        </div>
        
        <div className="grid grid-cols-2 gap-[1px] bg-border-subtle p-[1px] max-[900px]:grid-cols-1">
          {DEGREES.map(({ title, date }) => (
            <div
              key={title}
              className="reveal bg-bg-primary p-6 hover:bg-bg-card transition-colors duration-150"
            >
              <div className="flex items-center gap-3 mb-2 text-text-primary">
                <i className="fa-solid fa-graduation-cap text-[1.2rem] text-accent" />
                <h3 className="font-heading text-[1.125rem] font-medium m-0">
                  {title}
                </h3>
              </div>
              <div className="text-[0.875rem] text-text-secondary pl-9">
                {date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
