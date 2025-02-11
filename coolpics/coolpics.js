const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");
const viewer = document.querySelector(".viewer");
const images = document.querySelectorAll(".gallery img");
const viewerImage = document.querySelector(".viewer img");

function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("hide");
}

function handleResize() {
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide");
    }
}

function showImage(event) {
    const imgSrc = event.target.src;
    viewerImage.src = imgSrc;
    viewer.classList.remove("hide");
}

function hideViewer() {
    viewer.classList.add("hide");
}

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${pic}" alt="${alt}">
    </div>`;
}

function viewHandler(event) {
    const clickedElement = event.target;
    if (!clickedElement.matches("img")) return;

    const srcParts = clickedElement.src.split("-");
    const fullImageSrc = srcParts[0] + "-full.jpeg";

    if (!document.querySelector(".viewer")) {
        document.body.insertAdjacentHTML("afterbegin", viewerTemplate(fullImageSrc, clickedElement.alt));
    }

    const viewerImage = document.querySelector(".viewer img");
    viewerImage.src = fullImageSrc;

    const dynamicCloseViewer = document.querySelector(".close-viewer");
    dynamicCloseViewer.addEventListener("click", closeViewer);
}

function closeViewer() {
    const viewer = document.querySelector(".viewer");
    if (viewer) {
        viewer.remove();
    }
}

if (menuButton) {
    menuButton.addEventListener("click", toggleMenu);
}

window.addEventListener("resize", handleResize);

document.querySelector(".gallery").addEventListener("click", viewHandler);

document.body.addEventListener("click", function (event) {
    if (event.target.classList.contains("viewer")) {
        closeViewer();
    }
});


handleResize();