// Theme toggle + interactive ripple demo
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const rippleDemo = document.getElementById('rippleDemo');
const year = document.getElementById('year');

if (year) year.textContent = new Date().getFullYear();

// Persist light/dark preference
const saved = localStorage.getItem('theme') || 'dark';
if (saved === 'light') root.classList.add('light');

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    root.classList.toggle('light');
    localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
  });
}

// Simple ripple interaction
function addRipple(e, container) {
  const r = document.createElement('span');
  r.className = 'ripple';
  const rect = container.getBoundingClientRect();
  r.style.left = `${e.clientX - rect.left}px`;
  r.style.top = `${e.clientY - rect.top}px`;
  container.appendChild(r);
  setTimeout(() => r.remove(), 650);
}

if (rippleDemo) {
  const card = document.querySelector('.hero.card.interactive');
  rippleDemo.addEventListener('click', (e) => addRipple(e, card));
}
