// =======================================================================

var menu = document.querySelector(".menu-bar");
document.querySelector("#menu-btn").onclick = () => {
    menu.classList.toggle("active");
    search.classList.remove("active");
    basket.classList.remove("active");
    form.classList.remove("active");
}

var search = document.querySelector(".search-box");
document.querySelector("#search-btn").onclick = () => {
    search.classList.toggle("active");
    menu.classList.remove("active");
    basket.classList.remove("active");
    form.classList.remove("active");
}

var basket = document.querySelector(".basket");
document.querySelector("#basket-btn").onclick = () => {
    basket.classList.toggle("active");
    menu.classList.remove("active");
    search.classList.remove("active");
    form.classList.remove("active");
}

var form = document.querySelector(".form");
document.querySelector("#login-btn").onclick = () => {
    form.classList.toggle("active");
    menu.classList.remove("active");
    search.classList.remove("active");
    basket.classList.remove("active");
}

window.onscroll = () => {
    menu.classList.remove("active");
    search.classList.remove("active");
    basket.classList.remove("active");
    form.classList.remove("active");
}





$(document).ready(function () {

    $('.owl-carousel').owlCarousel({
        rtl: false,
        loop: true,
        margin: 20,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            768: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    })


});

// scroll effect on progress bar

const progressBar = document.querySelector('.progress-bar');
const section = document.querySelector('html');

const animateProgressBar = () => {
    let scrollDistance = -section.getBoundingClientRect().top;
    let progressWidth = (scrollDistance / (section.getBoundingClientRect().height - document.documentElement.clientHeight)) * 100;

    value = Math.round(progressWidth);
    progressBar.style.width = value + '%';

}

window.addEventListener('scroll', animateProgressBar);