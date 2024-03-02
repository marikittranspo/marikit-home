const navbar = document.querySelector('.navbar');
const stickyClass = 'sticky';

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  if (scrollPosition > navbar.offsetHeight) {
    navbar.classList.add(stickyClass);
  } else {
    navbar.classList.remove(stickyClass);
  }
});