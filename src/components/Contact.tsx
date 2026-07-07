import { useState, useCallback } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { PROFILE, RESUME_URL } from "../data/profile";

const CHANNELS = [
  {
    icon: "fa-brands fa-linkedin-in",
    label: "LinkedIn",
    value: "in/ommar-shaikh",
    href: "https://www.linkedin.com/in/ommar-shaikh-02b3a1207/",
  },
  {
    icon: "fa-brands fa-github",
    label: "GitHub",
    value: "OmmarShaikh01",
    href: "https://github.com/OmmarShaikh01",
  },
  {
    icon: "fa-solid fa-phone",
    label: "Phone",
    value: PROFILE.phone,
    href: "tel:+919324871009",
  },
  {
    icon: "fa-solid fa-location-dot",
    label: "Location",
    value: `${PROFILE.location} · ${PROFILE.timezone}`,
  },
];

export default function Contact() {
  const ref = useScrollReveal<HTMLElement>();
  const [copied, setCopied] = useState(false);

  const copyEmail = useCallback(() => {
    navigator.clipboard?.writeText(PROFILE.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  }, []);

  return (
    <section id="contact" className="py-24 bg-bg-secondary" ref={ref}>
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="reveal card p-8 sm:p-12">
          <span className="eyebrow">07 — Contact</span>
          <h2 className="section-title text-[clamp(2rem,4vw,2.75rem)] mb-4">
            Let's Work Together
          </h2>
          <p className="text-[1.0625rem] text-text-secondary max-w-[640px] mb-3 leading-[1.7]">
            I'm open to senior / principal roles and interesting engineering
            challenges. The fastest way to reach me is email — I typically reply
            within a day.
          </p>
          <div className="badge mb-10 text-status-online border-status-online/30">
            <span className="status-dot relative inline-block w-2 h-2 bg-status-online" />
            {PROFILE.availability}
          </div>

          {/* Primary actions */}
          <div className="flex gap-3 flex-wrap mb-10">
            <a href={`mailto:${PROFILE.email}`} className="btn btn--primary">
              Send Email <i className="fa-solid fa-arrow-right text-[0.8rem]" />
            </a>
            <a href={RESUME_URL} target="_blank" rel="noopener" className="btn btn--ghost">
              View Résumé{" "}
              <i className="fa-solid fa-arrow-up-right-from-square text-[0.8rem]" />
            </a>
            <button onClick={copyEmail} className="btn btn--ghost">
              {copied ? "Copied!" : "Copy Email"}{" "}
              <i
                className={`fa-solid ${copied ? "fa-check text-status-online" : "fa-copy"} text-[0.8rem]`}
              />
            </button>
          </div>

          {/* Direct channels */}
          <div className="grid grid-cols-2 gap-3 max-[600px]:grid-cols-1">
            {CHANNELS.map(({ icon, label, value, href }) => {
              const inner = (
                <>
                  <i className={`${icon} text-accent text-[1.1rem] w-5 text-center shrink-0`} />
                  <div className="min-w-0">
                    <div className="text-[0.75rem] uppercase tracking-[0.12em] text-text-muted">
                      {label}
                    </div>
                    <div className="text-[0.9375rem] text-text-primary truncate">
                      {value}
                    </div>
                  </div>
                </>
              );
              const cls =
                "flex items-center gap-4 rounded-2xl border border-border-subtle bg-bg-primary p-5 transition-colors duration-200";
              return href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`${cls} hover:bg-bg-card hover:border-border-strong no-underline`}
                >
                  {inner}
                </a>
              ) : (
                <div key={label} className={cls}>
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
