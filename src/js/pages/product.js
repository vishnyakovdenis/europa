import Swiper from 'swiper';

const prodSlider = document.querySelector('.product-slider');

prodSlider && new Swiper(prodSlider, {
  loop: 1,
  navigation: {
    nextEl: document.querySelector('.product-slider-nav--right'),
    prevEl: document.querySelector('.product-slider-nav--left'),
  },
  pagination: {
    el: document.querySelector('.product-slider-pagination'),
    type: 'fraction',
    formatFractionCurrent(number) {
      return number < 10 ? `0${number}` : number
    },
    formatFractionTotal(number) {
      return number < 10 ? `0${number}` : number
    }
  },
});

