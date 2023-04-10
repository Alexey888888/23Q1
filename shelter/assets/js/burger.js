const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const body = document.querySelector("body");
const blackout = document.querySelector(".blackout");
const burgerLink = document.querySelectorAll(".menu__link");

burger.addEventListener("click", () => {
  burger.classList.toggle("burger_active");
  menu.classList.toggle("menu_active");
  menu.classList.toggle("menu-pets_active");
  body.classList.toggle("scroll-lock");
  blackout.classList.toggle("blackout_active");
});

burgerLink.forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("burger_active");
    menu.classList.remove("menu_active");
    body.classList.remove("scroll-lock");
    blackout.classList.remove("blackout_active");
  });
});

blackout.addEventListener("click", () => {
  burger.classList.remove("burger_active");
  menu.classList.remove("menu_active");
  body.classList.remove("scroll-lock");
  blackout.classList.remove("blackout_active");
});
