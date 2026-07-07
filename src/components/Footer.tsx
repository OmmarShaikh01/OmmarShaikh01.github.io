import { SOCIALS, RESUME_URL } from "../data/profile";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-border-subtle bg-bg-primary">
      <div className="max-w-[1120px] mx-auto px-6 flex justify-between items-center gap-4 flex-wrap max-sm:flex-col max-sm:items-start">
        <div>
          <p className="font-heading text-[1rem] text-text-primary m-0 font-bold tracking-tight">
            Ommar<span className="text-accent">.</span>
          </p>
          <p className="text-[0.8125rem] text-text-muted m-0 mt-1">
            &copy; {new Date().getFullYear()} · Built with React &amp; Tailwind
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener"
            className="text-[0.875rem] text-text-secondary hover:text-accent transition-colors no-underline"
          >
            Résumé
          </a>
          <span className="text-border-strong">·</span>
          {SOCIALS.filter((s) => !s.href.startsWith("mailto")).map(
            ({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-text-secondary hover:text-accent transition-colors text-[1.05rem]"
              >
                <i className={icon} />
              </a>
            ),
          )}
          <a
            href="#hero"
            aria-label="Back to top"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-bg-card text-text-primary hover:bg-accent hover:text-white transition-colors ml-2"
          >
            <i className="fa-solid fa-arrow-up text-[0.8rem]" />
          </a>
        </div>
      </div>
    </footer>
  );
}
