const city_contact = document.querySelector('.contact_city')
const city_list = document.querySelector('.city_list')

const cities = document.querySelectorAll('.p-city')

const table = document.querySelector('.info_table')

const cityP = document.querySelector('.text_city')
const info_city = document.querySelector('.info-city')
const info_phone = document.querySelector('.info-phone')
const info_adress = document.querySelector('.info-adress')

city_contact.addEventListener('click', city_func)

function city_func() {
    city_list.classList.toggle('city_list--active')
}

const cityObject = {
    cityCanada: {
        title: 'Canandaigua, NY',
        city: 'Canandaigua, NY',
        phone: '+1 585 393 0001',
        adress: '151 Charlotte Street'
    },
    cityNy: {
        title: 'New York City',
        city: 'New York City',
        phone: '+1 212 456 0002',
        adress: '9 East 91st Street'
    },
    cityYonk: {
        title: 'Yonkers, NY',
        city: 'Yonkers, NY',
        phone: '+1 914 678 0003',
        adress: '511 Warburton Ave'
    },
    citySherrill: {
        title: 'Sherrill, NY',
        city: 'Sherrill, NY',
        phone: '+1 315 908 0004',
        adress: '14 WEST Noyes BLVD'
    }
}

for(let i = 0; i<cities.length; i++) {
    cities[i].addEventListener('click', choiceCities)
}

function choiceCities(event) {
    let city = event.target.classList[0];
    cityP.innerHTML = cityObject[city].title
    city_contact.style.background = '#c1e698'
    table.classList.add('info_table--active')
    info_city.innerHTML = cityObject[city].city
    info_phone.innerHTML = cityObject[city].phone
    info_adress.innerHTML = cityObject[city].adress

}

