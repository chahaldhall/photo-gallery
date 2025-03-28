document.addEventListener("DOMContentLoaded", function () {
    const galleryImages = document.querySelectorAll(".gallery-img");
    const overlay = document.getElementById("overlay");
    const overlayImg = document.getElementById("overlay-img");
    const closeBtn = document.getElementById("close-btn");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    let currentIndex = 0;

    function showImage(index) {
        overlay.style.display = "flex";
        overlayImg.src = galleryImages[index].src;
        currentIndex = index;
    }

    galleryImages.forEach((img, index) => {
        img.addEventListener("click", function () {
            showImage(index);
        });
    });

    closeBtn.addEventListener("click", function () {
        overlay.style.display = "none";
    });

    overlay.addEventListener("click", function (event) {
        if (event.target === overlay) {
            overlay.style.display = "none";
        }
    });

    // Previous Image
    prevBtn.addEventListener("click", function () {
        if (currentIndex > 0) {
            showImage(currentIndex - 1);
        } else {
            showImage(galleryImages.length - 1);
        }
    });

    // Next Image
    nextBtn.addEventListener("click", function () {
        if (currentIndex < galleryImages.length - 1) {
            showImage(currentIndex + 1);
        } else {
            showImage(0);
        }
    });
});
