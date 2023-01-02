const hamburger = document.querySelector(".hamburger");
const mobileMenuBar = document.querySelector(".hamburger-menu-container");
const body = document.querySelector(".body-container");

const mobileMenu = () => {
  hamburger.classList.toggle("active");
  mobileMenuBar.classList.toggle("show-menu");
  body.classList.toggle("remove-body");
};

hamburger.addEventListener("click", mobileMenu);
