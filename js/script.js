// ─── Navbar scroll behaviour
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

// ─── Mobile drawer toggle
const menuToggle = document.getElementById('menuToggle');
const mobileDrawer = document.getElementById('mobileDrawer');
const drawerBackdrop = document.getElementById('drawerBackdrop');

function openDrawer() {
  if (menuToggle && mobileDrawer && drawerBackdrop) {
    menuToggle.classList.add('active');
    mobileDrawer.classList.add('open');
    drawerBackdrop.classList.add('visible');
    document.body.style.overflow = 'hidden';
  }
}

function closeDrawer() {
  if (menuToggle && mobileDrawer && drawerBackdrop) {
    menuToggle.classList.remove('active');
    mobileDrawer.classList.remove('open');
    drawerBackdrop.classList.remove('visible');
    document.body.style.overflow = '';
  }
}

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    mobileDrawer.classList.contains('open') ? closeDrawer() : openDrawer();
  });
}

if (drawerBackdrop) {
  drawerBackdrop.addEventListener('click', closeDrawer);
}

// Close drawer when a link is tapped
document.querySelectorAll('.drawer-link').forEach(link => {
  link.addEventListener('click', closeDrawer);
});

// ─── Intersection Observer for fade-up elements
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const siblings = entry.target.parentElement
        ? [...entry.target.parentElement.querySelectorAll('.fade-up')]
        : [];
      const idx = siblings.indexOf(entry.target);
      entry.target.style.transitionDelay = `${idx * 80}ms`;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
