const prices = document.querySelectorAll('.prices')

for(let i = 0; i<prices.length; i++) {
    prices[i].addEventListener('click', handleprice)
}

function handleprice(e) {
    let price = e.currentTarget
    price.childNodes[1].classList.toggle('accordion-btn--active')
    price.childNodes[3].classList.toggle('price-for--active')
}