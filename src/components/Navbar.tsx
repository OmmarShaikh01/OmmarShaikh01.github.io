import { useState, useEffect, useCallback, useMemo } from "react";
import { useActiveSection } from "../hooks/useActiveSection";

const NAV_ITEMS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const sectionIds = useMemo(() => NAV_ITEMS.map((n) => n.href.slice(1)), []);
  const activeId = useActiveSection(sectionIds);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 60);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        scrolled
          ? "bg-[rgba(10,10,15,0.85)] backdrop-blur-[16px] shadow-[0_1px_0_var(--color-border-subtle)] py-3"
          : "py-[18px]"
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-heading font-extrabold text-[1.4rem] text-text-primary tracking-[-0.5px] no-underline hover:text-text-primary"
        >
          O<span className="gradient-text">.</span>Shaikh
        </a>

        {/* Nav links */}
        <div
          className={`flex gap-8 max-md:fixed max-md:top-0 max-md:w-[280px] max-md:h-screen max-md:flex-col max-md:bg-[rgba(10,10,15,0.97)] max-md:backdrop-blur-[20px] max-md:pt-20 max-md:px-8 max-md:pb-8 max-md:gap-6 max-md:border-l max-md:border-border-subtle max-md:transition-[right] max-md:duration-300 max-md:ease-[cubic-bezier(0.4,0,0.2,1)] ${
            menuOpen ? "max-md:right-0" : "max-md:right-[-100%]"
          }`}
        >
          {NAV_ITEMS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              className={`text-[0.88rem] font-medium relative pb-1 no-underline transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:rounded-sm after:transition-[width] after:duration-300 after:gradient-accent hover:text-text-primary hover:after:w-full ${
                activeId === href.slice(1)
                  ? "text-accent after:w-full"
                  : "text-text-secondary after:w-0"
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle navigation"
          className="hidden max-md:flex flex-col gap-[5px] cursor-pointer bg-transparent border-none p-1"
        >
          <span
            className={`block w-6 h-0.5 bg-text-primary rounded-sm transition-transform duration-300 ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-text-primary rounded-sm transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-text-primary rounded-sm transition-transform duration-300 ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>
    </nav>
  );
}
