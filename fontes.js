    const imagens = document.querySelectorAll(".fonte-item img");
    const overlay = document.getElementById("overlay");
    const overlayImg = document.getElementById("overlay-img");

    imagens.forEach(img => {
        img.addEventListener("click", () => {
            overlay.style.display = "flex";
            overlayImg.src = img.src;
        });
    });

    overlay.addEventListener("click", () => {
        overlay.style.display = "none";
    });