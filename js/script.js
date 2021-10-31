/** @format */

const nav = document.querySelector("#nav");
const btnClose = document.querySelector(".nav-btn-close");
const btnOpen = document.querySelector(".nav-btn-open");
btnOpen.addEventListener("click", function () {
  nav.style.top = 0 + "px";
});
btnClose.addEventListener("click", function () {
  nav.style.top = -800 + "px";
});
window.addEventListener("resize", function () {
  if (window.innerWidth >= 800) {
    nav.style.top = 148 + "px";
  }
  if (window.innerWidth < 800) {
    nav.style.top = -800 + "px";
  }
});

const sale = document.querySelector(".sale2");
sale.addEventListener("click", function () {
  console.log("dfd");
  sale.style.opacity = 0;
});

var swiper1 = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1024: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
      centeredSlides: false,
    },
  },
});

var swiper2 = new Swiper(".mySecSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  initialSlide: 0,
  loop: true,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next-unique",
    prevEl: ".swiper-button-prev-unique",
  },
  breakpoints: {
    1024: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
      centeredSlides: false,
    },
  },
});

var swiper3 = new Swiper(".myThirdSwiper", {
  slidesPerView: 1,
  initialSlide: 0,
  loop: true,
  centeredSlides: true,
  slideActiveClass: "swiper-slide-active",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slideActiveClass: "swiper-slide-active",
});

var swiper4 = new Swiper(".myNewsSwiper", {
  slidesPerView: 1,
  centeredSlides: true,
  initialSlide: 1,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next-news",
    prevEl: ".swiper-button-prev-news",
  },
  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href").substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

var swiper5 = new Swiper(".GallerySwiper", {
  slidesPerView: 1,
  centeredSlides: true,
  initialSlide: 1,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
