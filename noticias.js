let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const carousel = document.getElementById("mainCarousel");
const dotsContainer = document.getElementById("carouselDots");

/* Criar bolinhas automaticamente */
slides.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dot.onclick = () => goToSlide(i);
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");


function updateCarousel() {
    carousel.style.transform = `translateX(${-currentIndex * 100}%)`;
    dots.forEach(dot => dot.classList.remove("active"));
    dots[currentIndex].classList.add("active");
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
}

function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
}

/* Auto-troca a cada 5 segundos */
setInterval(nextSlide, 5000);
