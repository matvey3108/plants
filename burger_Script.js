const burgerMenu = document.querySelector('.burger-menu')
const burgerNav = document.querySelector('.menu-navigation')

burgerMenu.addEventListener('click', burgerButton)
let isHave = false

function burgerButton() {
    if(!isHave) {
        burgerNav.style.left = '0px'
        isHave = true
    }  
    else {
        burgerNav.style.left = '-190px'
        isHave = false
    }
}