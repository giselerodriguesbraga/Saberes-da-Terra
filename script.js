
/*Barra de pesquisa */

   document.addEventListener("DOMContentLoaded", function () {

  const sugestoesBox = document.getElementById("sugestoes-box");
  const searchInput = document.getElementById("search-input");
  const barra = document.getElementById("barra-pesquisa");
  const botao = document.getElementById("search-button");
  const overlay = document.getElementById("search-overlay");

  const paginas = [
    { nome: "Home", link: "index.html" },
    { nome: "Notícias", link: "noticias.html" },
    { nome: "Fale Conosco", link: "faleconosco.html" },
    { nome: "Curiosidades sobre as etnias", link: "pagina5.html" },
    { nome: "Etnia Ticuna", link: "pagina1.html" },
    { nome: "Etnia Kocama", link: "pagina2.html" },
    { nome: "Etnia Kambeba", link: "pagina3.html" },
    { nome: "Etnia Kanamari", link: "pagina4.html" }
  ];

  // Abrir barra
  botao.addEventListener("click", () => {
    barra.classList.add("open");
    overlay.classList.add("active");
    searchInput.focus();
  });

  // Fechar tudo
  function fecharBusca() {
    barra.classList.remove("open");
    overlay.classList.remove("active");
    sugestoesBox.style.display = "none";
    searchInput.value = "";
  }

  overlay.addEventListener("click", fecharBusca);

  // Busca com múltiplas palavras
  searchInput.addEventListener("input", () => {
    const termo = searchInput.value.toLowerCase().trim();
    sugestoesBox.innerHTML = "";

    if (termo === "") {
      sugestoesBox.style.display = "none";
      return;
    }

    const palavras = termo.split(" ");

    const resultados = paginas.filter(pagina =>
      palavras.every(p => pagina.nome.toLowerCase().includes(p))
    );

    if (resultados.length > 0) {
      resultados.forEach(pagina => {
        const div = document.createElement("div");
        div.textContent = pagina.nome;
        div.addEventListener("click", () => {
          window.location.href = pagina.link;
        });
        sugestoesBox.appendChild(div);
      });
      sugestoesBox.style.display = "block";
    } else {
      sugestoesBox.innerHTML = "<div>Nenhum resultado encontrado</div>";
      sugestoesBox.style.display = "block";
    }
  });

});



/*botão Ler Mais..*/

document.getElementById("lerMaisBtn").addEventListener("click", function () {
    const textoCompleto = document.getElementById("texto-completo");
    if (textoCompleto.classList.contains("hidden")) {
      textoCompleto.classList.remove("hidden");
      this.textContent = "Ler menos";
    } else {
      textoCompleto.classList.add("hidden");
      this.textContent = "Ler mais";
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });

      

