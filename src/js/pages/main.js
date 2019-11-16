import Swiper from 'swiper';

const slider = document.querySelector('.main-slider');

slider && new Swiper(slider, {
  // autoHeight: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

