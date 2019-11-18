import Swiper from 'swiper';

const slider = document.querySelector('.main-slider');
const partnersSlider = document.querySelector('.partners-slider');

slider && new Swiper(slider, {
  loop: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

partnersSlider && new Swiper(partnersSlider, {
  slidesPerView: 2,
  slidesPerColumn: 2,
  spaceBetween: 20,
  navigation: {
    nextEl: document.querySelector('.partners-slider-nav button:last-child'),
    prevEl: document.querySelector('.partners-slider-nav button:first-child'),
  },
  breakpoints: {
    1200: {
      slidesPerColumn: 1,
      slidesPerView: 6,
      spaceBetween: 40
    }
  }
});

