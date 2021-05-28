document.addEventListener('DOMContentLoaded', () => {
  const menuButtonElem = document.querySelector('.menu-button');
  const navBarElem = document.querySelector('.navbar');
  const closeMenuElem = document.querySelector('.close');

  const toggleMenu = () => {
    navBarElem.classList.toggle('is-open');
  }

  menuButtonElem.addEventListener('click', toggleMenu)

  closeMenuElem.addEventListener('click', toggleMenu)

})