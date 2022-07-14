import { animate } from "./helpers";

const requestCall = () => {
    const requestBtn = document.querySelector("div.button > a");
    const requestModal = document.querySelector(".header-modal");
    const modalFone = document.querySelector(".overlay");
    const modalCloseBtn = document.querySelector(".header-modal__close");
    const body = document.querySelector('body');


    const clientWidth = body.clientWidth;

    let width = document.documentElement.clientWidth;

    window.addEventListener("resize", () => {
        width = document.documentElement.clientWidth;
    });



    const showModal = () => {
        body.style.overflow = "hidden";
        let offsetWidth = body.offsetWidth;
        let scrollWidth = offsetWidth - clientWidth;
        body.style.paddingRight = scrollWidth + 'px';
        requestModal.style.display = "block";
        modalFone.style.display = "block";


        animate({
            duration: 500,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                requestModal.style.opacity = 1 * progress;
                modalFone.style.opacity = 1 * progress;
            },
        });
    };
    const hideModal = () => {
        requestModal.style.display = "";
        modalFone.style.display = "";
        body.style.overflow = "";
        body.style.paddingRight = "";
    };

    requestBtn.addEventListener("click", (e) => {
        e.preventDefault();
        showModal();
    });

    modalCloseBtn.addEventListener("click", hideModal);
    modalFone.addEventListener("click", hideModal);
};
export default requestCall;