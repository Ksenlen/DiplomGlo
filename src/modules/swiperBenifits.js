import Swiper, { Autoplay, Navigation } from 'swiper';

const swiperBenifits = () => {
    const swiper = new Swiper('.swiperBenifits', {
        slidesPerView: 1,
        breakpoints: {
            576: {
                slidesPerView: 3,
            }
        },
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        modules: [Autoplay, Navigation],
        navigation: {
            nextEl: ".benefits__arrow--right",
            prevEl: ".benefits__arrow--left",
        },
    });
};

export default swiperBenifits;

