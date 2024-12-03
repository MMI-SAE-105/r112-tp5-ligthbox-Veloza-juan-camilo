// *** LIGHTBOX ***
const lightbox = document.querySelector("#lightbox");
const listThumbnail = document.querySelectorAll ("[data-full-img]");
const lightboxImg = document.querySelector("#lightbox >img");

listThumbnail.forEach ((thumbnail) => {
    thumbnail.addEventListener('click',(evt) => {
        lightboxImg.src = thumbnail.dataset.fullImg
        lightbox.showModal()
    }); 
});
document.body.addEventListener('click', (evt) => {
    // console.log("cibles de l'evenement", evt.target), evt.target.machine("(data-full-img)");
    if (evt.target.matches("[data-full-img]")) {
        lightboxImg.src = evt.target.dataset.fullImg;
        lightbox.showModal();
    }
});

lightbox.addEventListener('click', (evt) => {
    lightbox.classList.add("sortie");
        lightbox.addEventListener("animationend", (evt) => {
            lightbox.classList.remove("sortie");
            lightbox.close();
    }, {once: true});
});