//burger
const burgerIcon = document.querySelector("#burger");
const navbarMenu = document.querySelector("#nav-links");

burgerIcon.addEventListener("click", () => {
  navbarMenu.classList.toggle("is-active");
});

// //dropdown nav
// var menuDropdown = document.querySelector("#dropdown-menu");
// menuDropdown.addEventListener("click", function (event) {
//   event.stopPropagation();
//   menuDropdown.classList.toggle("is-active");
// });

//video slider
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

var sliderNav = function (manual) {
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  contents.forEach((content) => {
    content.classList.remove("active");
  });

  btns[manual].classList.add("active");
  slides[manual].classList.add("active");
  contents[manual].classList.add("active");
};

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    sliderNav(i);
  });
});

slides.forEach((slide, i) => {
  slide.addEventListener("click", () => {
    sliderNav(i);
  });
});

contents.forEach((content, i) => {
  content.addEventListener("click", () => {
    sliderNav(i);
  });
});
