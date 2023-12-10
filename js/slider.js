const swiperMain = new Swiper('.swiper_main', {
    speed: 400,
    spaceBetween: 100,
    pagination: {
        el: '.main-slider__pagination',
        type: 'bullets',
    },
    navigation: {
        nextEl: '.main-slider__btn-next',
        prevEl: '.main-slider__btn-prev',
    },
});

const swiperAbout = new Swiper('.about__slider', {
    speed: 400,
    spaceBetween: 29,
    slidesPerView: 1,

    navigation: {
        nextEl: '.about__btn-next',
        prevEl: '.about__btn-prev',
    },
    pagination: {
        el: '.about__pagination',
        type: 'bullets',
        clickable: true,
    },
    breakpoints: {
        1200: {
            slidesPerView: 4,
        },
        860: {
            slidesPerView: 3,
        },
        500: {
            slidesPerView: 2,
        },
    }
});
const swiperPartner = new Swiper('.partner__slider', {
    grid: {
        rows: 2,
        fill: 'row',
    },
    loopAddBlankSlides: true,
    speed: 400,
    spaceBetween: 10,
    slidesPerView: 2,

    navigation: {
        nextEl: '.partner__btn-next',
        prevEl: '.partner__btn-prev',
    },
    pagination: {
        el: '.partner__pagination',
        type: 'bullets',
        clickable: true,
    },
    breakpoints: {
        860: {
            spaceBetween: 31,

            slidesPerView: 4,
            grid: {
                rows: 1,
                fill: 'row',
            },
        },

    }

});