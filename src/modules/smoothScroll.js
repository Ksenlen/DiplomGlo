const smoothScroll = () => {

    const scroll = document.querySelector('.smooth-scroll');
    const header = document.getElementById('header');
    const navigation = document.getElementById('navigation');
    const offer = document.getElementById('offer');
    let windowScrollTop = window.scrollY;

    let scrollHeight = header.clientHeight + navigation.clientHeight + offer.clientHeight;

    if (windowScrollTop > scrollHeight) {
        scroll.style.opacity = 1;
    }
    if (windowScrollTop < scrollHeight) {
        scroll.style.opacity = 0;
    }

    window.addEventListener("scroll", (e) => {
        windowScrollTop = window.scrollY;
        if (windowScrollTop <= scrollHeight || windowScrollTop === 0) {
            scroll.style.opacity = "0";
        }
        if (windowScrollTop > scrollHeight) {
            scroll.style.opacity = "1";
        }
    });


    scroll.addEventListener('click', () => {

        header.scrollIntoView({ alignToTop: true, behavior: "smooth" });
    });
};

export default smoothScroll;