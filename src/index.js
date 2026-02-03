import './styles.css';
import resume from './assets/Resume2026.pdf';

const link = document.querySelector('.resume');
link.href = resume;

const header = document.querySelector('.site-header');
let lastScrollY = 0;

const onScroll = () => {
  const currentY = window.scrollY || 0;
  if (header) {
    if (currentY > 24) {
      header.classList.add('header--compact');
    } else {
      header.classList.remove('header--compact');
    }
  }
  lastScrollY = currentY;
};

window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

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
