import { useState, useEffect, useCallback, useMemo } from "react";
import { useActiveSection } from "../hooks/useActiveSection";

const NAV_ITEMS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
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
      setScrolled(window.scrollY > 0);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 w-full z-[1000] transition-colors duration-150 h-[48px] border-b border-border-subtle ${
        scrolled ? "bg-bg-secondary" : "bg-bg-primary"
      }`}
    >
      <div className="w-full h-full px-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-heading font-medium text-[0.875rem] text-text-primary no-underline hover:text-accent transition-colors"
        >
          Ommar Shaikh
        </a>

        {/* Nav links */}
        <div
          className={`flex gap-4 max-md:fixed max-md:top-[48px] max-md:w-full max-md:h-[calc(100vh-48px)] max-md:flex-col max-md:bg-bg-secondary max-md:pt-4 max-md:px-4 max-md:pb-10 max-md:gap-0 max-md:border-l max-md:border-border-subtle max-md:transition-[right] max-md:duration-150 max-md:ease-out ${
            menuOpen ? "max-md:right-0" : "max-md:right-[-100%]"
          }`}
        >
          {NAV_ITEMS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              className={`text-[0.875rem] font-normal px-4 py-2 no-underline transition-colors duration-150 max-md:border-b max-md:border-border-subtle ${
                activeId === href.slice(1)
                  ? "text-text-primary bg-bg-card max-md:bg-bg-card max-md:border-l-[3px] max-md:border-l-accent max-md:pl-[13px]"
                  : "text-text-secondary hover:text-text-primary hover:bg-bg-card max-md:border-l-[3px] max-md:border-l-transparent max-md:pl-[13px]"
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
          className="hidden max-md:flex flex-col justify-center gap-[4px] cursor-pointer bg-transparent border-none w-[32px] h-[32px] hover:bg-bg-card transition-colors duration-150"
        >
          <span
            className={`block w-[16px] h-[1px] bg-text-primary mx-auto transition-transform duration-150 ${
              menuOpen ? "-rotate-45 translate-y-[2px]" : ""
            }`}
          />
          <span
            className={`block w-[16px] h-[1px] bg-text-primary mx-auto transition-transform duration-150 ${
              menuOpen ? "rotate-45 -translate-y-[3px]" : ""
            }`}
          />
        </button>
      </div>
    </nav>
  );
}
