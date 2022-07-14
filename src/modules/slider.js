import Swiper, { Autoplay, Navigation } from 'swiper';

const slider = () => {
    const swiper = new Swiper('.swiper-row', {
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
            576: {
                slidesPerView: 2,
                spaceBetween: 40,
            }
        },
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        modules: [Autoplay, Navigation],
        navigation: {
            nextEl: ".services__arrow--right",
            prevEl: ".services__arrow--left",
        },
        on: {
            init() {
                this.el.addEventListener('mouseenter', () => {
                    this.autoplay.stop();
                });

                this.el.addEventListener('mouseleave', () => {
                    this.autoplay.start();
                });
            }
        },
    });
};

export default slider;

