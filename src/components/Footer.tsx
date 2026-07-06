export default function Footer() {
  return (
    <footer className="py-8 border-t border-border-subtle bg-bg-secondary">
      <div className="max-w-[1056px] mx-auto px-4 flex justify-between items-center max-sm:flex-col max-sm:gap-2">
        <p className="text-[0.875rem] text-text-secondary m-0">
          &copy; 2026 Ommar Shaikh
        </p>
        <div className="flex gap-4">
          <a href="https://github.com/OmmarShaikh01" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-text-primary transition-colors text-[1rem]">
            <i className="fa-brands fa-github" />
          </a>
          <a href="https://www.linkedin.com/in/ommar-shaikh-02b3a1207/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-text-primary transition-colors text-[1rem]">
            <i className="fa-brands fa-linkedin-in" />
          </a>
        </div>
      </div>
    </footer>
  );
}
