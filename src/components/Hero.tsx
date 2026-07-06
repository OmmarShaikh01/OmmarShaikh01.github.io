import { useMemo } from "react";
import { useTypedEffect } from "../hooks/useTypedEffect";

const TITLES = [
  "Software Engineer",
  "Cloud Architect",
  "Automation Specialist",
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
      className="relative min-h-[90vh] flex items-center pt-20 bg-bg-primary"
    >
      <div className="max-w-[1056px] mx-auto px-4 w-full">
        <div className="flex flex-col max-w-[640px]">
          <h1 className="font-heading text-[clamp(2.5rem,6vw,4rem)] font-light leading-[1.2] mb-4 text-text-primary tracking-tight">
            Ommar Shaikh
          </h1>
          <p className="font-heading text-[clamp(1.1rem,3vw,1.5rem)] font-normal text-text-secondary mb-8 min-h-[2.4em]">
            {typed}
            <span className="inline-block w-[1px] h-[1.1em] bg-accent ml-[2px] align-text-bottom animate-blink" />
          </p>
          <p className="text-[1rem] text-text-primary leading-[1.5] mb-10 font-normal">
            Software Engineer building Enforcer-CCA, focused on cloud governance and continuous compliance across AWS and Kubernetes. Experienced in building scalable MLOps and cloud infrastructure.
          </p>
          
          <div className="flex gap-[1px] flex-wrap mb-12">
            <a
              href="#contact"
              className="inline-flex items-center justify-between gap-4 px-4 py-3 min-w-[160px] font-body text-[0.875rem] bg-accent text-text-inverse hover:bg-accent-hover transition-colors duration-150 no-underline"
            >
              Get In Touch <i className="fa-solid fa-arrow-right text-[0.8rem]" />
            </a>
            <a
              href="#experience"
              className="inline-flex items-center justify-between gap-4 px-4 py-3 min-w-[160px] font-body text-[0.875rem] bg-bg-card text-text-primary hover:bg-bg-card-hover transition-colors duration-150 no-underline"
            >
              View Experience <i className="fa-solid fa-arrow-right text-[0.8rem]" />
            </a>
          </div>
          
          <div className="flex gap-[1px]">
            {SOCIALS.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noopener"}
                aria-label={label}
                title={label}
                className="flex items-center justify-center w-12 h-12 bg-bg-secondary text-text-primary text-[1.1rem] hover:bg-bg-card transition-colors duration-150 no-underline"
              >
                <i className={icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
