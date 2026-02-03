import './styles.css';
import resume from './assets/Resume2026.pdf';

const link = document.querySelector('.resume');
link.href = resume;

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
if (revealItems.length) {
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
}

const magnetic = document.querySelector('.magnetic');
if (magnetic) {
  const strength = 12;
  const reset = () => {
    magnetic.style.transform = 'translate3d(0, 0, 0)';
  };
  magnetic.addEventListener('mousemove', (e) => {
    const rect = magnetic.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    const moveX = (relX / rect.width) * strength;
    const moveY = (relY / rect.height) * strength;
    magnetic.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
  });
  magnetic.addEventListener('mouseleave', reset);
}

const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const mobileClose = document.querySelector('.mobile-close');

if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('is-open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
    mobileNav.setAttribute('aria-hidden', String(!isOpen));
  });

  if (mobileClose) {
    mobileClose.addEventListener('click', () => {
      mobileNav.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
      mobileNav.setAttribute('aria-hidden', 'true');
    });
  }

  mobileNav.querySelectorAll('a').forEach((linkEl) => {
    linkEl.addEventListener('click', () => {
      mobileNav.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
      mobileNav.setAttribute('aria-hidden', 'true');
    });
  });
}
