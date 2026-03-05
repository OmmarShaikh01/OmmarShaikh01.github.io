import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Contact() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="contact" className="py-[100px]" ref={ref}>
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="reveal bg-bg-card border border-border-subtle rounded-[var(--radius-card)] px-12 py-16 text-center relative overflow-hidden max-md:px-6 max-md:py-10">
          {/* Decorative orbs */}
          <div className="absolute w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(0,212,255,0.12),transparent_70%)] top-[-100px] right-[-100px] pointer-events-none" />
          <div className="absolute w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(123,97,255,0.1),transparent_70%)] bottom-[-80px] left-[-80px] pointer-events-none" />

          <span className="relative z-10 inline-flex items-center gap-2 font-body text-[0.8rem] font-semibold tracking-[3px] uppercase text-accent mb-3 before:inline-block before:w-6 before:h-0.5 before:gradient-accent before:rounded-sm">
            Say Hello
          </span>
          <h2 className="relative z-10 font-heading text-[clamp(1.8rem,4vw,2.6rem)] font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="relative z-10 text-[1.05rem] text-text-secondary max-w-[520px] mx-auto mb-8">
            I'm always open to discussing new opportunities, interesting
            projects, or ways to collaborate on building great software.
          </p>
          <div className="relative z-10 flex justify-center gap-4 flex-wrap">
            <a
              href="mailto:ommarshaikh20@gmail.com"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-body text-[0.9rem] font-semibold gradient-accent text-[#060610] shadow-[0_4px_24px_var(--color-accent-glow)] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,212,255,0.4)] transition-all duration-300 no-underline hover:text-[#060610]"
            >
              <i className="fa-solid fa-envelope" /> Send Email
            </a>
            <a
              href="https://www.linkedin.com/in/ommar-shaikh-02b3a1207/"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-body text-[0.9rem] font-semibold bg-transparent text-text-primary border-[1.5px] border-border-accent hover:-translate-y-0.5 hover:bg-[rgba(0,212,255,0.08)] hover:text-accent transition-all duration-300 no-underline"
            >
              <i className="fa-brands fa-linkedin-in" /> LinkedIn
            </a>
            <a
              href="https://github.com/OmmarShaikh01"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-body text-[0.9rem] font-semibold bg-transparent text-text-primary border-[1.5px] border-border-accent hover:-translate-y-0.5 hover:bg-[rgba(0,212,255,0.08)] hover:text-accent transition-all duration-300 no-underline"
            >
              <i className="fa-brands fa-github" /> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
