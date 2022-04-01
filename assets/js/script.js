let stars = document.querySelector('.stars')
let spaceman = document.querySelector('.spaceman')
let header = document.querySelector('header')
let txt = document.querySelector('.txt')
let planets = document.querySelector('.planets')

window.addEventListener('scroll', function(){
    let value = this.scrollY

    stars.style.left = value*0.25 + 'px'
    spaceman.style.right = value*4 + 'px'
    header.style.top = value*0.5 + 'px'
    txt.style.marginRight = value*3.8 + 'px'
    planets.style.top = value*0.1 + 'px'
    spaceman.style.transform = "rotate(" + window.pageYOffset/0.6 + "deg)"
})