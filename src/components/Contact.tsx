import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Contact() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="contact" className="py-24 bg-bg-primary" ref={ref}>
      <div className="max-w-[1056px] mx-auto px-4">
        <div className="reveal bg-bg-secondary border border-border-subtle p-12 max-md:p-8">
          <h2 className="font-heading text-[2.5rem] font-light mb-6 text-text-primary">
            Let's Work Together
          </h2>
          <p className="text-[1rem] text-text-primary font-normal max-w-[600px] mb-10 leading-[1.6]">
            I'm open to discussing new opportunities, interesting projects, or ways to collaborate on building reliable software.
          </p>
          <div className="flex gap-[1px] flex-wrap">
            <a
              href="mailto:ommarshaikh20@gmail.com"
              className="inline-flex items-center justify-between gap-4 px-4 py-3 min-w-[160px] font-body text-[0.875rem] bg-accent text-text-inverse hover:bg-accent-hover transition-colors duration-150 no-underline"
            >
              Send Email <i className="fa-solid fa-arrow-right text-[0.8rem]" />
            </a>
            <a
              href="https://www.linkedin.com/in/ommar-shaikh-02b3a1207/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between gap-4 px-4 py-3 min-w-[160px] font-body text-[0.875rem] bg-bg-card text-text-primary border border-border-subtle hover:bg-bg-card-hover transition-colors duration-150 no-underline"
            >
              LinkedIn <i className="fa-brands fa-linkedin-in text-[0.9rem]" />
            </a>
            <a
              href="https://github.com/OmmarShaikh01"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between gap-4 px-4 py-3 min-w-[160px] font-body text-[0.875rem] bg-bg-card text-text-primary border border-border-subtle hover:bg-bg-card-hover transition-colors duration-150 no-underline"
            >
              GitHub <i className="fa-brands fa-github text-[0.9rem]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
