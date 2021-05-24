const menuIcon = document.querySelector(".menu-icons");
const menu = document.querySelector(".menu");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");

menuIcon.addEventListener("click", () => {
  menu.classList.toggle("open");
  hamburger.classList.toggle("open");
  close.classList.toggle("open");
});
