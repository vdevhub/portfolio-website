document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector('.hamburger');
  const navList = document.querySelector('.navigation-list');

  hamburger.addEventListener('click', function () {
    navList.classList.toggle('active');
  });
});