import Swiper from "swiper";
import { animate } from "./helpers";
import slider from "./slider";

const measurerCall = () => {
    const measurerCallBtn = document.querySelectorAll(".btn-sm");
    const servicesModal = document.querySelector(".services-modal");
    const modalFone = document.querySelector(".overlay");
    const servicesModalCloseBtn = document.querySelector(".services-modal__close");
    const body = document.querySelector('body');

    const clientWidth = body.clientWidth;

    let width = document.documentElement.clientWidth;

    window.addEventListener("resize", () => {
        width = document.documentElement.clientWidth;
    });


    measurerCallBtn.forEach((element) => {
        element.addEventListener("click", (e) => {
            e.preventDefault();
            showServicesModal();
        });
    });

    const showServicesModal = () => {
        body.style.overflow = "hidden";
        let offsetWidth = body.offsetWidth;
        let scrollWidth = offsetWidth - clientWidth;
        body.style.paddingRight = scrollWidth + 'px';
        servicesModal.style.display = "block";
        modalFone.style.display = "block";


        animate({
            duration: 500,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                servicesModal.style.opacity = 1 * progress;
                modalFone.style.opacity = 1 * progress;
            },
        });
    };

    const hideServicesModal = () => {
        body.style.overflow = "";
        body.style.paddingRight = "";
        servicesModal.style.display = "";
        modalFone.style.display = "";

    };

    servicesModalCloseBtn.addEventListener("click", hideServicesModal);
    modalFone.addEventListener("click", hideServicesModal);
};
export default measurerCall;