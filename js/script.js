const header__button = document.getElementById('header__button')
const modal__close = document.getElementById('modal__close')
const modal__back = document.getElementById('modal__back')
const modal__back2 = document.getElementById('modal__back2')
const modal__close2 = document.getElementById('modal__close2')
const voprosi__button = document.getElementById('voprosi__button')
const footer__button = document.getElementById('footer__button')
const modal = document.getElementById('modal')

const point1 = document.getElementById('point1')
const point2 = document.getElementById('point2')
const point3 = document.getElementById('point3')
const point4 = document.getElementById('point4')

const back1 = document.getElementById('back1')
const back2 = document.getElementById('back2')
const back3 = document.getElementById('back3')
const back4 = document.getElementById('back4')


footer__button.addEventListener("click", () => {
    modal__back.classList.add('modal__back-active')
    
})
header__button.addEventListener("click", () => {
    modal__back.classList.add('modal__back-active')
    
})
modal__close.addEventListener("click", () => { 

    modal__back.classList.remove('modal__back-active')
})

voprosi__button.addEventListener("click", () => {
    modal__back2.classList.add('modal__back-active')
    
})
modal__close2.addEventListener("click", () => { 

    modal__back2.classList.remove('modal__back-active')
})

point1.addEventListener("click", () => { 
    point1.classList.add('point-active')
    point2.classList.remove('point-active')
    point3.classList.remove('point-active')
    point4.classList.remove('point-active')

    back1.classList.add('header-bottom__back--active')
    back2.classList.remove('header-bottom__back--active')
    back3.classList.remove('header-bottom__back--active')
    back4.classList.remove('header-bottom__back--active')

})
point2.addEventListener("click", () => { 
    point2.classList.add('point-active')
    point1.classList.remove('point-active')
    point3.classList.remove('point-active')
    point4.classList.remove('point-active')

    back2.classList.add('header-bottom__back--active')
    back3.classList.remove('header-bottom__back--active')
    back1.classList.remove('header-bottom__back--active')
    back4.classList.remove('header-bottom__back--active')

})
point3.addEventListener("click", () => { 
    point3.classList.add('point-active')
    point2.classList.remove('point-active')
    point1.classList.remove('point-active')
    point4.classList.remove('point-active')

    back3.classList.add('header-bottom__back--active')
    back2.classList.remove('header-bottom__back--active')
    back1.classList.remove('header-bottom__back--active')
    back4.classList.remove('header-bottom__back--active')

})
point4.addEventListener("click", () => { 
    point4.classList.add('point-active')
    point2.classList.remove('point-active')
    point3.classList.remove('point-active')
    point1.classList.remove('point-active')

    back4.classList.add('header-bottom__back--active')
    back2.classList.remove('header-bottom__back--active')
    back3.classList.remove('header-bottom__back--active')
    back1.classList.remove('header-bottom__back--active')

})

let slideIndex = 1;
showSlides(slideIndex);
function nextSlide() {
    showSlides(slideIndex += 1);
}
function previousSlide() {
    showSlides(slideIndex -= 1);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let slides = document.getElementsByClassName("item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "grid";
}
// ===========================================
let slideIndex2 = 1;
showSlides2(slideIndex2);
function nextSlide2() {
    showSlides2(slideIndex2 += 1);
}
function previousSlide2() {
    showSlides2(slideIndex2 -= 1);
}
function currentSlide2(n2) {
    showSlides2(slideIndex2 = n2);
}
function showSlides2(n2) {
    let slides = document.getElementsByClassName("item2");
    if (n2 > slides.length) {
      slideIndex2 = 1
    }
    if (n2 < 1) {
        slideIndex2 = slides.length
    }
    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex2 - 1].style.display = "grid";
}
// ===============================================
let slideIndex3 = 1;
showSlides3(slideIndex3);
function nextSlide3() {
    showSlides3(slideIndex3 += 1);
}
function previousSlide3() {
    showSlides3(slideIndex3 -= 1);
}
function currentSlide3(n3) {
    showSlides3(slideIndex3 = n3);
}
function showSlides3(n3) {
    let slides = document.getElementsByClassName("item3");
    if (n3 > slides.length) {
      slideIndex3 = 1
    }
    if (n3 < 1) {
        slideIndex3 = slides.length
    }
    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex3 - 1].style.display = "grid";
}
// ===============================================
let slideIndex4 = 1;
showSlides4(slideIndex4);
function nextSlide4() {
    showSlides4(slideIndex4 += 1);
}
function previousSlide4() {
    showSlides4(slideIndex4 -= 1);
}
function currentSlide4(n4) {
    showSlides4(slideIndex4 = n4);
}
function showSlides4(n4) {
    let slides = document.getElementsByClassName("item4");
    if (n4 > slides.length) {
      slideIndex4 = 1
    }
    if (n4 < 1) {
        slideIndex4 = slides.length
    }
    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex4 - 1].style.display = "grid";
}
// ===============================================
let slideIndex5 = 1;
showSlides5(slideIndex5);
function nextSlide5() {
    showSlides5(slideIndex5 += 1);
}
function previousSlide5() {
    showSlides5(slideIndex5 -= 1);
}
function currentSlide5(n5) {
    showSlides5(slideIndex5 = n5);
}
function showSlides5(n5) {
    let slides = document.getElementsByClassName("item5");
    if (n5 > slides.length) {
      slideIndex5 = 1
    }
    if (n5 < 1) {
        slideIndex5 = slides.length
    }
    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex5 - 1].style.display = "grid";
}
// ===============================================
let slideIndex6 = 1;
showSlides6(slideIndex6);
function nextSlide6() {
    showSlides6(slideIndex6 += 1);
}
function previousSlide6() {
    showSlides6(slideIndex6 -= 1);
}
function currentSlide6(n6) {
    showSlides6(slideIndex6 = n6);
}
function showSlides6(n6) {
    let slides = document.getElementsByClassName("item6");
    if (n6 > slides.length) {
      slideIndex6 = 1
    }
    if (n6 < 1) {
        slideIndex6 = slides.length
    }
    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex6 - 1].style.display = "grid";
}
// ===============================================