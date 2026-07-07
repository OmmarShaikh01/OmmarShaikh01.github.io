import { useState, useEffect, useCallback, useMemo } from "react";
import { useActiveSection } from "../hooks/useActiveSection";
import { NAV_ITEMS, RESUME_URL } from "../data/profile";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const sectionIds = useMemo(() => NAV_ITEMS.map((n) => n.href.slice(1)), []);
  const activeId = useActiveSection(sectionIds);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 w-full z-[1000] h-16 transition-colors duration-200 ${
        scrolled
          ? "bg-bg-primary/75 backdrop-blur-xl border-b border-border-subtle"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1120px] mx-auto w-full h-full px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="font-heading font-bold text-[1.0625rem] text-text-primary no-underline hover:text-accent transition-colors tracking-tight"
        >
          Ommar<span className="text-accent">.</span>
        </a>

        {/* Nav links */}
        <div
          className={`flex items-center gap-1 max-md:fixed max-md:top-16 max-md:w-full max-md:h-[calc(100vh-64px)] max-md:flex-col max-md:items-stretch max-md:bg-bg-primary/95 max-md:backdrop-blur-xl max-md:pt-6 max-md:px-6 max-md:pb-10 max-md:gap-1 max-md:border-l max-md:border-border-subtle max-md:transition-[right] max-md:duration-200 max-md:ease-out ${
            menuOpen ? "max-md:right-0" : "max-md:right-[-100%]"
          }`}
        >
          {NAV_ITEMS.map(({ href, label }) => {
            const isActive = activeId === href.slice(1);
            return (
              <a
                key={href}
                href={href}
                onClick={closeMenu}
                aria-current={isActive ? "page" : undefined}
                className={`text-[0.875rem] font-medium px-3.5 py-2 rounded-full no-underline transition-colors duration-150 max-md:text-left max-md:py-3 max-md:rounded-xl ${
                  isActive
                    ? "text-text-primary bg-bg-card"
                    : "text-text-secondary hover:text-text-primary hover:bg-bg-card/60"
                }`}
              >
                {label}
              </a>
            );
          })}

          {/* Résumé CTA — always in reach */}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener"
            onClick={closeMenu}
            className="ml-2 max-md:ml-0 max-md:mt-4 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-accent text-white text-[0.875rem] font-medium hover:bg-accent-hover transition-colors duration-150 no-underline max-md:py-3"
          >
            Résumé <i className="fa-solid fa-arrow-up-right-from-square text-[0.75rem]" />
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          aria-controls="navbar"
          className="hidden max-md:flex flex-col justify-center gap-[5px] cursor-pointer bg-transparent border-none w-10 h-10 rounded-full hover:bg-bg-card transition-colors duration-150"
        >
          <span
            className={`block w-[18px] h-[1.5px] bg-text-primary mx-auto transition-transform duration-200 ${
              menuOpen ? "-rotate-45 translate-y-[3px]" : ""
            }`}
          />
          <span
            className={`block w-[18px] h-[1.5px] bg-text-primary mx-auto transition-transform duration-200 ${
              menuOpen ? "rotate-45 -translate-y-[4px]" : ""
            }`}
          />
        </button>
      </div>
    </nav>
  );
}
