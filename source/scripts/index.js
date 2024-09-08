/* в этот файл добавляет скрипты*/
const mainHeader = document.querySelector('.main-header');
const buttonToggle = document.querySelector('.main-header__menu-toggle');
const mainNav = document.querySelector('.main-header__nav');

mainHeader.classList.remove('main-header--nojs');
mainNav.classList.remove('main-header__nav--open');

if (buttonToggle) {
  buttonToggle.addEventListener('click', () => {
    mainNav.classList.toggle('main-header__nav--open');
    buttonToggle.classList.toggle('main-header__menu-toggle--close');
  });
}
