'use strict';

function resizeSwiper() {
    if(window.matchMedia("(max-width: 1320px) and (min-width: 767px)").matches) {
        let mySwiper = new Swiper ('#swiper', {
            slidesPerView: 4,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    } else if (window.matchMedia("(min-width: 1321px)").matches) {
        let mySwiperBanner = new Swiper('#swiper-banner', {
            slidesPerView: 6,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

    if(window.matchMedia("(max-width: 767px)").matches) {
        let mySwiper = new Swiper ('#swiper', {
            slidesPerView: 2,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
        let mySwiper1 = new Swiper ('#swiper1', {
            pagination: {
                el: '.swiper-pagination1',
                dynamicBullets: true,
            },
            navigation: {
                nextEl: '.swiper-button-next1',
                prevEl: '.swiper-button-prev1',
            },
        });
        let mySwiper2 = new Swiper ('#swiper2', {
            pagination: {
                el: '.swiper-pagination2',
                dynamicBullets: true,
            },
            navigation: {
                nextEl: '.swiper-button-next2',
                prevEl: '.swiper-button-prev2',
            },
        });
        let mySwiper3 = new Swiper ('#swiper3', {
            pagination: {
                el: '.swiper-pagination3',
                dynamicBullets: true,
            },
            navigation: {
                nextEl: '.swiper-button-next3',
                prevEl: '.swiper-button-prev3',
            },
        });
    } else if (window.matchMedia("(max-width: 1180px) and (min-width: 768px)").matches) {
        let mySwipe1 = new Swiper ('#swiper1', {
            slidesPerView: 2,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination1',
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: '.swiper-button-next1',
                prevEl: '.swiper-button-prev1',
            },
        });
        let mySwipe2 = new Swiper ('#swiper2', {
            slidesPerView: 2,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination2',
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: '.swiper-button-next2',
                prevEl: '.swiper-button-prev2',
            },
        });
        let mySwipe3 = new Swiper ('#swiper3', {
            slidesPerView: 2,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination3',
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: '.swiper-button-next3',
                prevEl: '.swiper-button-prev3',
            },
        })
    } else if (window.matchMedia("(min-width: 1181px)").matches) {
        let mySwiper1 = new Swiper ('#swiper1', {
            slidesPerView: 3,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination1',
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: '.swiper-button-next1',
                prevEl: '.swiper-button-prev1',
            },
        });
        let mySwiper2 = new Swiper ('#swiper2', {
            slidesPerView: 3,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination2',
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: '.swiper-button-next2',
                prevEl: '.swiper-button-prev2',
            },
        });
        let mySwiper3 = new Swiper ('#swiper3', {
            slidesPerView: 3,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination3',
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: '.swiper-button-next3',
                prevEl: '.swiper-button-prev3',
            },
        });
    }
}

window.addEventListener('resize', resizeSwiper);
