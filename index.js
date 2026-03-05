/* ============================================================
   PORTFOLIO — Interactions & Animations
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // -------------------- Typed Text --------------------
  const typedEl = document.getElementById('heroTyped');
  const titles = [
    'Senior AI & Automation Engineer',
    'MLOps & Cloud Architect',
    'Agentic AI Specialist',
    'Enterprise Automation Expert',
  ];
  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const TYPING_SPEED = 65;
  const DELETING_SPEED = 35;
  const PAUSE_AFTER_TYPE = 2000;
  const PAUSE_AFTER_DELETE = 500;

  function typeEffect() {
    const current = titles[titleIndex];
    if (!isDeleting) {
      typedEl.innerHTML =
        current.slice(0, charIndex) + '<span class="cursor"></span>';
      charIndex++;
      if (charIndex > current.length) {
        isDeleting = true;
        setTimeout(typeEffect, PAUSE_AFTER_TYPE);
        return;
      }
      setTimeout(typeEffect, TYPING_SPEED);
    } else {
      typedEl.innerHTML =
        current.slice(0, charIndex) + '<span class="cursor"></span>';
      charIndex--;
      if (charIndex < 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        charIndex = 0;
        setTimeout(typeEffect, PAUSE_AFTER_DELETE);
        return;
      }
      setTimeout(typeEffect, DELETING_SPEED);
    }
  }
  typeEffect();

  // -------------------- Navbar Scroll --------------------
  const navbar = document.getElementById('navbar');
  function handleNavScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }
  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  // -------------------- Mobile Menu --------------------
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  // -------------------- Scroll Reveal --------------------
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  revealElements.forEach((el) => revealObserver.observe(el));

  // -------------------- Active Nav Link --------------------
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a');

  function highlightNav() {
    const scrollY = window.scrollY + 120;
    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollY >= top && scrollY < top + height) {
        navAnchors.forEach((a) => {
          a.style.color = '';
          if (a.getAttribute('href') === '#' + id) {
            a.style.color = 'var(--accent)';
          }
        });
      }
    });
  }
  window.addEventListener('scroll', highlightNav, { passive: true });

  // -------------------- Stagger Reveal for Grids --------------------
  const staggerContainers = document.querySelectorAll(
    '.skills-grid, .certs-grid, .stats-grid, .edu-grid'
  );
  staggerContainers.forEach((container) => {
    const children = container.querySelectorAll('.reveal');
    children.forEach((child, i) => {
      child.style.transitionDelay = `${i * 100}ms`;
    });
  });
});
