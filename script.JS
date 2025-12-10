// Toggle menu mobile
function toggleMenu(){
  const nav = document.getElementById('nav-list');
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
}

// Scroll reveal simples
document.addEventListener('DOMContentLoaded', () => {
  const faders = document.querySelectorAll('.fade-in');
  const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };

  const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.style.animationDelay = '0.2s';
      entry.target.style.animationFillMode = 'forwards';
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
      appearOnScroll.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => appearOnScroll.observe(fader));
});

// Dark Mode toggle
const root = document.documentElement;
const darkModeClass = 'dark-mode';
function toggleDarkMode(){
  root.classList.toggle(darkModeClass);
}

// Adicione botão dark mode se desejar
