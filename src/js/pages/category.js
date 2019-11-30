import Swiper from 'swiper';

const catSlider = document.querySelector('.category-test-slider');

catSlider && new Swiper(catSlider, {
  autoHeight: 1,
  observer: 1,
  observeParents: 1,
  simulateTouch: 0,
});

for (let el of catSlider.querySelectorAll('.next-slide')) {
  el.addEventListener('click', _ => {
    catSlider.swiper.slideNext()
  })
}

for (let el of catSlider.querySelectorAll('.prev-slide')) {
  el.addEventListener('click', _ => {
    catSlider.swiper.slidePrev()
  })
}

for (let el of catSlider.querySelectorAll('input')) {
  el.addEventListener('change', e => {
    e.target.closest('.swiper-slide').querySelector('.next-slide').disabled = false
  })
}

const catTabs = document.querySelector('.category-tabs');

catTabs && new IntersectionObserver(
  ([e]) => {
    setTimeout(_ => {catTabs.classList.toggle('isSticky', !e.isIntersecting)}, 0)
  },
  {threshold: [1]}
).observe(document.querySelector('.cat-tabs-trigger'))