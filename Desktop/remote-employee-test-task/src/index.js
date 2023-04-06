
'use strict';

const swiperOne = new Swiper('.swiper-header', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },

  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
});


const swiperTwo = new Swiper('.swiper-featured', {
  direction: 'horizontal',
  slidesPerView: 3,
  slidesPerColumn: 2,
  spaceBetween: 50,
  loop: true,

  autoplay: {
    delay: 5000,
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
});

const swiperThree = new Swiper('.swiper-editors', {
  slidesPerView: 1,
  slidesPerColumnFill: 'column',

  grid: {
    rows: 2,
    fill: 'row',
  },

  spaceBetween: 50,

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },

  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
});


(() => {
    const refs = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    menu: document.querySelector("[data-menu]"),
    body: document.querySelector("body"),
    menuList: document.querySelector(".mob-menu-list"),
    };
    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);
    refs.menuList.addEventListener("click", removeMenu);
    function toggleMenu() {
    refs.menu.classList.toggle("is-open");
    refs.body.classList.toggle("no-scroll");
    }
    function removeMenu() {
    refs.menu.classList.add("is-open");
    refs.body.classList.remove("no-scroll");
    }
})();