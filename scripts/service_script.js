console.log(document)
const buttonService = document.querySelectorAll('.serv-buttons')
const imgCont = document.querySelectorAll('.imgContainer')
let n = 0 

let obj = {
    'Gardens': false,
    'Lawn': false,
    'Planting': false
}

for(let i = 0; i<buttonService.length; i++) {
    buttonService[i].addEventListener('click', serviceFunc)
}

function serviceFunc(a) {
    let service = a.currentTarget
    if(service.classList.contains('serv-buttons--active')) {
        service.classList.remove('serv-buttons--active')
        obj[service.innerHTML] = false
        n--
    }
    else {
        if(n < 2) {
        service.classList.add('serv-buttons--active')
        obj[service.innerHTML] = true
        n++
        }
    }
    
    for(key in obj) {
        for(let i = 0; i<imgCont.length; i++) {
            if(key === imgCont[i].classList[1]) {
                if(!obj[key]) {
                    imgCont[i].classList.add('imgContainer--active')
                    
                }
                else {
                    imgCont[i].classList.remove('imgContainer--active')
                }
                }
                
            if(n==0) {
                imgCont[i].classList.remove('imgContainer--active')
            }
            }
      }
}
