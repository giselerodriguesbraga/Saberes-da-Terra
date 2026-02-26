
document.addEventListener("DOMContentLoaded", function () {

  const rssUrl = "https://www.uea.edu.br/index.php/blog/feed/";
  const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {

      const carousel = document.getElementById("mainCarousel");
      const newsContainer = document.getElementById("newsContainer");

      carousel.innerHTML = "";
      newsContainer.innerHTML = "";

      function pegarImagem(item) {
        const match = item.content.match(/<img[^>]+src="([^">]+)"/);
        return match ? match[1] : null;
      }

      // ===== CAROUSEL =====
      data.items.slice(0, 5).forEach((item, index) => {

        const imagem = pegarImagem(item);
        if (!imagem) return;

        const slide = document.createElement("a");
        slide.href = item.link;
        slide.target = "_blank";
        slide.classList.add("slide");

        slide.innerHTML = `
          <img src="${imagem}" alt="${item.title}">
          <div class="slide-title">${item.title}</div>
        `;

        carousel.appendChild(slide);
      });

      currentIndex = 0;
      atualizarSlide();
      iniciarAutoplay();

      // ===== NEWS CARDS =====
      data.items.slice(5, 11).forEach(item => {

        const imagem = pegarImagem(item);
        if (!imagem) return;

        const card = document.createElement("a");
        card.href = item.link;
        card.target = "_blank";
        card.classList.add("news-card");

        card.innerHTML = `
          <img src="${imagem}" alt="${item.title}">
          <p>${item.title}</p>
        `;

        newsContainer.appendChild(card);
      });

      // 🔥 INICIALIZA CARROSSEL DEPOIS QUE OS SLIDES FOREM CRIADOS

    })
    .catch(error => {
      console.error("Erro ao carregar notícias:", error);
    });

});

// =====================
// CONTROLE DO CARROSSEL FLEX
// =====================

let currentIndex = 0;
let autoplayInterval;

function atualizarSlide() {
  const carousel = document.getElementById("mainCarousel");
  const slides = document.querySelectorAll(".slide");

  if (slides.length === 0) return;

  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
  const slides = document.querySelectorAll(".slide");
  if (slides.length === 0) return;

  currentIndex = (currentIndex + 1) % slides.length;
  atualizarSlide();
}

function prevSlide() {
  const slides = document.querySelectorAll(".slide");
  if (slides.length === 0) return;

  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  atualizarSlide();
}

function iniciarAutoplay() {
  clearInterval(autoplayInterval);
  autoplayInterval = setInterval(() => {
    nextSlide();
  }, 5000);
}