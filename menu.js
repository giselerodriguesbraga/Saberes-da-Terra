/*
  document.addEventListener("DOMContentLoaded", () => {

  const btnMenu = document.getElementById("btn-menu");
  const menu = document.getElementById("menu");

  if (btnMenu && menu) {
    btnMenu.addEventListener("click", () => {
      menu.classList.toggle("open");
    });
  }

});*/

const btnMenu = document.getElementById("btn-menu");
const menu = document.getElementById("menu");
const overlayMenu = document.getElementById("menu-overlay");

btnMenu.addEventListener("click", () => {
  menu.classList.add("open");
  overlayMenu.classList.add("active");
});

overlayMenu.addEventListener("click", () => {
  menu.classList.remove("open");
  overlayMenu.classList.remove("active");
});
