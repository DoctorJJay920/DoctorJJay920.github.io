const menuButton=document.querySelector('.menu');
const nav=document.querySelector('.header nav');
menuButton?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton?.setAttribute('aria-expanded','false');}));
document.getElementById('year').textContent=new Date().getFullYear();
// Replace with the House Dimensions business email before publishing.
const BUSINESS_EMAIL='YOUR-EMAIL@example.com';
document.getElementById('contact-form')?.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(e.currentTarget);const subject=encodeURIComponent('House Dimensions website enquiry');const body=encodeURIComponent(`Name: ${d.get('name')}\nEmail: ${d.get('email')}\n\nProject details:\n${d.get('project')||''}`);window.location.href=`mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;});
