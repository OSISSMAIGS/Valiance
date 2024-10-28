document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".images img");
    let currentIndex = 0;

    function updateImageDisplay() {
        images.forEach((img, index) => {
            img.style.zIndex = index === currentIndex ? images.length : images.length - index;
        });
    }

    document.querySelector(".button.left").addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImageDisplay();
    });

    document.querySelector(".button.right").addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % images.length;
        updateImageDisplay();
    });

    updateImageDisplay();
});