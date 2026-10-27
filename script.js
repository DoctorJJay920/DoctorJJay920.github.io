const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
  }));
}

document.getElementById('year').textContent = new Date().getFullYear();

// Replace this placeholder with the business email address before publishing.
const BUSINESS_EMAIL = 'admin@aitcsecurity.com';

const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', event => {
  event.preventDefault();
  if (BUSINESS_EMAIL === 'admin@aitcsecurity.com') {
    status.textContent = 'Before publishing, update BUSINESS_EMAIL in script.js with your business email address.';
    return;
  }

  const data = new FormData(form);
  const subject = encodeURIComponent(`House Dimensions website enquiry — ${data.get('interest')}`);
  const body = encodeURIComponent(
    `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nInterested in: ${data.get('interest')}\n\nProject details:\n${data.get('message')}`
  );
  window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
});
