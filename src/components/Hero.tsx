import { useMemo } from "react";
import { useTypedEffect } from "../hooks/useTypedEffect";

const TITLES = [
  "Senior AI & Automation Engineer",
  "MLOps & Cloud Architect",
  "Agentic AI Specialist",
  "Enterprise Automation Expert",
];

const SOCIALS = [
  {
    href: "mailto:ommarshaikh20@gmail.com",
    icon: "fa-solid fa-envelope",
    label: "Email",
  },
  {
    href: "https://www.linkedin.com/in/ommar-shaikh-02b3a1207/",
    icon: "fa-brands fa-linkedin-in",
    label: "LinkedIn",
  },
  {
    href: "https://github.com/OmmarShaikh01",
    icon: "fa-brands fa-github",
    label: "GitHub",
  },
  {
    href: "https://ommarshaikh01.github.io/",
    icon: "fa-solid fa-globe",
    label: "Website",
  },
];

export default function Hero() {
  const titles = useMemo(() => TITLES, []);
  const typed = useTypedEffect(titles);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Gradient orbs */}
      <div className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-35 pointer-events-none top-[-100px] right-[-150px] bg-[radial-gradient(circle,rgba(0,212,255,0.4),transparent_70%)] animate-float-orb" />
      <div className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-35 pointer-events-none bottom-[-80px] left-[-120px] bg-[radial-gradient(circle,rgba(123,97,255,0.35),transparent_70%)] animate-float-orb-reverse" />

      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        <p className="text-[1.1rem] font-medium text-accent mb-3 tracking-[1px]">
          Hello, I'm
        </p>
        <h1 className="font-heading text-[clamp(2.8rem,7vw,5rem)] font-extrabold leading-[1.1] mb-4">
          Ommar <span className="gradient-text">Shaikh</span>
        </h1>
        <p className="font-heading text-[clamp(1.2rem,3vw,1.8rem)] font-medium text-text-secondary mb-6 min-h-[2.4em]">
          {typed}
          <span className="inline-block w-[3px] h-[1.2em] bg-accent ml-1 align-text-bottom animate-blink" />
        </p>
        <p className="text-[1.05rem] text-text-secondary max-w-[640px] leading-[1.8] mb-9">
          Senior AI &amp; Automation Engineer with 4+ years of experience
          building scalable, production-grade MLOps and cloud infrastructure.
          Specialized in Agentic AI workflows (LangChain, CrewAI) and
          high-availability identity automation supporting 48,000+ objects.
        </p>
        <div className="flex gap-4 flex-wrap max-[480px]:flex-col">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-body text-[0.9rem] font-semibold gradient-accent text-[#060610] shadow-[0_4px_24px_var(--color-accent-glow)] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,212,255,0.4)] transition-all duration-300 no-underline hover:text-[#060610] max-[480px]:justify-center"
          >
            <i className="fa-solid fa-paper-plane" /> Get In Touch
          </a>
          <a
            href="#experience"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-body text-[0.9rem] font-semibold bg-transparent text-text-primary border-[1.5px] border-border-accent hover:-translate-y-0.5 hover:bg-[rgba(0,212,255,0.08)] hover:text-accent transition-all duration-300 no-underline max-[480px]:justify-center"
          >
            <i className="fa-solid fa-briefcase" /> View Experience
          </a>
        </div>
        <div className="flex gap-4 mt-10">
          {SOCIALS.map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noopener"}
              aria-label={label}
              title={label}
              className="flex items-center justify-center w-11 h-11 rounded-xl border border-border-subtle text-text-secondary text-[1.1rem] hover:bg-bg-card-hover hover:text-accent hover:border-border-accent transition-all duration-300 no-underline"
            >
              <i className={icon} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
