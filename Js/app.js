const hamburgerBtn = document.querySelector('.nav-icon');
const crossIcon = document.querySelector('.cross-icon');
const navItems = document.querySelectorAll('.mobile-nav-menu a');

function toggleMenu() {
  document.querySelector('.mobile-nav-menu').classList.toggle('d-block');
}

hamburgerBtn.addEventListener('click', toggleMenu);
crossIcon.addEventListener('click', toggleMenu);

navItems.forEach((navItem) => {
  navItem.addEventListener('click', toggleMenu);
});