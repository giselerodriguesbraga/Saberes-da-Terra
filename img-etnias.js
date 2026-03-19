
const imagens = document.querySelectorAll("img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

imagens.forEach(function(img){
    img.addEventListener("click", function(){
        lightbox.style.display = "flex";
        lightboxImg.src = this.src;
        lightboxImg.alt = this.alt;
    });
});

lightbox.addEventListener("click", function(){
    lightbox.style.display = "none";
});