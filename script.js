document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  if (!hamburger || !mobileMenu) return;

  const toggleMenu = () => {
    const isHidden = mobileMenu.hasAttribute('hidden');
    if (isHidden) {
      mobileMenu.removeAttribute('hidden');
      hamburger.setAttribute('aria-expanded', 'true');
    } else {
      mobileMenu.setAttribute('hidden', '');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  };

  hamburger.addEventListener('click', toggleMenu);

  // Close menu when a link is clicked
  mobileMenu.addEventListener('click', (e) => {
    const target = e.target;
    if (target.tagName === 'A') {
      mobileMenu.setAttribute('hidden', '');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
});

