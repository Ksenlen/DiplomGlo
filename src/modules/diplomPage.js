const diplomPage = () => {

    const docImages = document.querySelectorAll('.sertificate-document');
    const body = document.querySelector('body');

    const clientWidth = body.clientWidth;

    let width = document.documentElement.clientWidth;
    window.addEventListener("resize", () => {
        width = document.documentElement.clientWidth;
    });

    docImages.forEach(doc => {
        doc.addEventListener('click', (e) => {
            e.preventDefault();

            const modal = document.getElementById('myModal');
            const modalImg = document.getElementById('img01');
            const closeBtn = document.getElementsByClassName("doc-close")[0];


            modalImg.src = doc.getAttribute('href');
            modal.style.display = 'block';

            body.style.overflow = "hidden";
            let offsetWidth = body.offsetWidth;
            let scrollWidth = offsetWidth - clientWidth;
            body.style.paddingRight = scrollWidth + 'px';

            modal.addEventListener('click', (event) => {
                if (event.target === closeBtn || (!event.target.closest('doc-modal-content') && event.target !== modalImg)) {
                    modal.style.display = 'none';
                    body.style.overflow = "";
                    body.style.paddingRight = "";
                }
            });
        });
    });
};



export default diplomPage;