import { useMemo } from "react";
import { useTypedEffect } from "../hooks/useTypedEffect";
import { PROFILE, TITLES, SOCIALS, METRICS, RESUME_URL } from "../data/profile";

const QUICK_FACTS = [
  { icon: "fa-solid fa-location-dot", text: PROFILE.location },
  { icon: "fa-solid fa-clock", text: PROFILE.timezone },
  { icon: "fa-solid fa-briefcase", text: "4+ yrs experience" },
];

export default function Hero() {
  const titles = useMemo(() => TITLES, []);
  const typed = useTypedEffect(titles);

  return (
    <section id="hero" className="relative flex items-center pt-28 pb-16">
      <div className="relative z-[1] max-w-[1120px] mx-auto px-6 w-full">
        <div className="flex flex-col max-w-[780px]">
          {/* Availability badge */}
          <div className="badge self-start mb-7">
            <span className="status-dot relative inline-block w-2 h-2 bg-status-online" />
            {PROFILE.availability}
          </div>

          <h1 className="font-heading text-[clamp(2.75rem,7vw,4.75rem)] font-bold leading-[1.02] mb-4 text-text-primary tracking-[-0.03em]">
            {PROFILE.name}
          </h1>
          <p className="font-heading text-[clamp(1.15rem,3vw,1.6rem)] font-medium text-text-secondary mb-6 min-h-[1.6em]">
            <span className="text-accent">/</span> {typed}
            <span className="inline-block w-[10px] h-[1.05em] bg-accent ml-[3px] align-text-bottom animate-blink" />
          </p>

          <p className="text-[clamp(1rem,1.4vw,1.125rem)] text-text-secondary leading-[1.7] mb-7 max-w-[680px]">
            {PROFILE.summary}
          </p>

          {/* Quick facts */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 mb-9 text-[0.9rem] text-text-secondary">
            {QUICK_FACTS.map(({ icon, text }) => (
              <span key={text} className="inline-flex items-center gap-2">
                <i className={`${icon} text-accent text-[0.85rem]`} />
                {text}
              </span>
            ))}
          </div>

          {/* Primary CTAs */}
          <div className="flex gap-3 flex-wrap mb-8">
            <a href={RESUME_URL} target="_blank" rel="noopener" className="btn btn--primary">
              View Résumé <i className="fa-solid fa-arrow-up-right-from-square text-[0.8rem]" />
            </a>
            <a href="#contact" className="btn btn--ghost">
              Get In Touch <i className="fa-solid fa-arrow-right text-[0.8rem]" />
            </a>
          </div>

          {/* Socials */}
          <div className="flex gap-3">
            {SOCIALS.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noopener"}
                aria-label={label}
                title={label}
                className="icon-btn text-[1.1rem]"
              >
                <i className={icon} />
              </a>
            ))}
          </div>
        </div>

        {/* Metrics strip — real, résumé-backed numbers */}
        <div className="grid grid-cols-4 gap-4 mt-16 max-[720px]:grid-cols-2">
          {METRICS.map(({ value, label }) => (
            <div key={label} className="card card--hover p-6">
              <div className="font-heading text-[clamp(1.9rem,4vw,2.75rem)] font-bold text-accent leading-none mb-2 tracking-[-0.02em]">
                {value}
              </div>
              <div className="text-[0.8125rem] text-text-secondary leading-snug">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
