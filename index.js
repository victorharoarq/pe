function scrollToSection(event, id) {
    event.preventDefault();
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        // Remover el hash para cerrar el menú automáticamente
        history.pushState("", document.title, window.location.pathname + window.location.search);
        // Cerrar el menú
        //document.querySelector('.nav__menu--second').click();
    }
}
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 80,
    grabCursor: true,
    loop: true,
    navigation: {
        nextEl: '.scroll-indicator.right',
        prevEl: '.scroll-indicator.left',
    },
    breakpoints: {
        991: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
        }
    }
});

function scrollLeft() {
    swiper.slidePrev();
}

function scrollRight() {
    swiper.slideNext();
}
document.addEventListener("DOMContentLoaded", function () {
    function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
    }

    function applyScrollAnimations() {
    document.querySelectorAll('[data-animation]').forEach((element) => {
        if (isInViewport(element) && !element.classList.contains('animated')) {
            let animationName = element.dataset.animation;
            element.classList.add('animate__animated', `animate__${animationName}`, 'animated');
        }
    });
    }

    window.addEventListener('scroll', applyScrollAnimations);
    applyScrollAnimations(); // Verifica los elementos al cargar la página
});
