const burgerMenu = document.querySelector('.burger-menu')
const burgerNav = document.querySelector('.menu-navigation')

burgerMenu.addEventListener('click', burgerButton)

function burgerButton() {
    burgerNav.classList.toggle('menu-navigation--active')
}