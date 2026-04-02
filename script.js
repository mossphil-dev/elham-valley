// Animated burger menu
function toggleMenu() {
  const btn = document.querySelector('.menu-btn');
  const nav = document.getElementById('navLinks');
  btn.classList.toggle('open');
  nav.classList.toggle('show');
}

// Scroll reveal
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .timeline-item').forEach(el => {
    observer.observe(el);
  });
}

// Nav scroll effect
function initNavScroll() {
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// Back to top
function initBackToTop() {
  const btn = document.createElement('button');
  btn.className = 'back-to-top';
  btn.innerHTML = '&#8593;';
  btn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  document.body.appendChild(btn);

  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 400);
  });
}

// Staggered card animation
function initStagger() {
  document.querySelectorAll('.grid-3, .grid-4, .feature-grid').forEach(grid => {
    const cards = grid.children;
    Array.from(cards).forEach((card, i) => {
      card.style.transitionDelay = `${i * 0.1}s`;
    });
  });
}

// Hero slideshow
let heroInterval;
let heroCurrent = 0;

function initHeroSlideshow() {
  const slides = document.querySelectorAll('.hero-slide');
  if (slides.length < 2) return;
  heroInterval = setInterval(nextSlide, 6000);
}

function nextSlide() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  if (slides.length < 2) return;
  slides[heroCurrent].classList.remove('active');
  if (dots[heroCurrent]) dots[heroCurrent].classList.remove('active');
  heroCurrent = (heroCurrent + 1) % slides.length;
  slides[heroCurrent].classList.add('active');
  if (dots[heroCurrent]) dots[heroCurrent].classList.add('active');
}

function goSlide(i) {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  if (slides.length < 2) return;
  clearInterval(heroInterval);
  slides[heroCurrent].classList.remove('active');
  if (dots[heroCurrent]) dots[heroCurrent].classList.remove('active');
  heroCurrent = i;
  slides[heroCurrent].classList.add('active');
  if (dots[heroCurrent]) dots[heroCurrent].classList.add('active');
  heroInterval = setInterval(nextSlide, 6000);
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  initHeroSlideshow();
  initReveal();
  initNavScroll();
  initBackToTop();
  initStagger();
});
