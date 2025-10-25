// Cookie banner
const banner = document.getElementById('cookie-banner');
if (!localStorage.getItem('cookiesAccepted')) banner.style.display = 'flex';
function acceptCookies() {
  localStorage.setItem('cookiesAccepted', 'true');
  banner.style.display = 'none';
}

// Header scroll fade-in
const header = document.querySelector('.site-header');
let last = 0;
window.addEventListener('scroll', () => {
  const current = window.scrollY;
  if (current > 100 && current > last) header.style.transform = 'translateY(-100%)';
  else header.style.transform = 'translateY(0)';
  last = current;
});
