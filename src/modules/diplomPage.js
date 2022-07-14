const diplomPage = () => {
    const sertificateDocuments = document.querySelectorAll(".sertificate-document");
    const body = document.querySelector('body');

    const clientWidth = body.clientWidth;

    let width = document.documentElement.clientWidth;

    window.addEventListener("resize", () => {
        width = document.documentElement.clientWidth;
    });

    sertificateDocuments.forEach((sertificate) => {
        const sertificateImg = sertificate.href;

        sertificate.addEventListener("click", (e) => {
            e.preventDefault();
            body.style.overflow = "hidden";
            let offsetWidth = body.offsetWidth;
            let scrollWidth = offsetWidth - clientWidth;
            body.style.paddingRight = scrollWidth + 'px';
            let sertificateModal = document.createElement("div");
            sertificateModal.className = "sertificate-modal";
            sertificateModal.style.display = "block";
            sertificateModal.innerHTML = `
          <img src=${sertificateImg} alt="">
          <span title="Close" class="sertificate-modal__close">x</span></div>`;

            const documentsBlock = document.getElementById("documents");

            documentsBlock.append(sertificateModal);

            const closeBtn = document.querySelector(".sertificate-modal__close");
            closeBtn.addEventListener("click", () => {
                sertificateModal.remove();
                body.style.overflow = "";
                body.style.paddingRight = '';
            });
        });
    });
};

export default diplomPage;