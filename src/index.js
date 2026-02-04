import './styles.css';
import resume from './assets/Resume2026.pdf';

const links = document.querySelectorAll('.resume');
links.forEach((link) => {
  if (link) link.href = resume;
});

document.body.classList.add('js-ready');

const header = document.querySelector('.site-header');
let lastScrollY = window.scrollY || 0;

const onScroll = () => {
  const currentY = window.scrollY || 0;
  if (header) {
    if (currentY > lastScrollY + 6) {
      header.classList.add('is-hidden');
    } else if (currentY < lastScrollY - 6) {
      header.classList.remove('is-hidden');
    }
  }
  lastScrollY = currentY;
};

window.addEventListener('scroll', onScroll, { passive: true });

const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window && revealItems.length) {
  document.body.classList.add('js-ready');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );

  revealItems.forEach((el) => observer.observe(el));
} else {
  // Fallback: just show everything
  revealItems.forEach((el) => el.classList.add('is-visible'));
}

const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const mobileClose = document.querySelector('.mobile-close');

if (hamburger && mobileNav) {
  const closeMobileNav = () => {
    mobileNav.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileNav.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');
  };

  hamburger.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('is-open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
    mobileNav.setAttribute('aria-hidden', String(!isOpen));
    document.body.classList.toggle('no-scroll', isOpen);
  });

  if (mobileClose) {
    mobileClose.addEventListener('click', () => {
      closeMobileNav();
    });
  }

  mobileNav.querySelectorAll('a').forEach((linkEl) => {
    linkEl.addEventListener('click', () => {
      closeMobileNav();
    });
  });

  document.addEventListener('click', (e) => {
    if (!mobileNav.classList.contains('is-open')) return;
    const target = e.target;
    if (!target || !(target instanceof Node)) return;
    const clickedInsideMenu = mobileNav.contains(target);
    const clickedHamburger = hamburger.contains(target);
    if (!clickedInsideMenu && !clickedHamburger) {
      closeMobileNav();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('is-open')) {
      closeMobileNav();
    }
  });
}
