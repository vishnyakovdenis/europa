import Swiper from 'swiper';
import $ from 'jquery'

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
const catTrigger = document.querySelector('.cat-tabs-trigger');

catTabs && new IntersectionObserver(
  ([e]) => {
    setTimeout(_ => {catTabs.classList.toggle('isSticky', !e.isIntersecting)}, 100)
  },
  {threshold: [1]}
).observe(catTrigger)


$('.nav-tabs [data-toggle="tab"]').on('shown.bs.tab', _ => {
  console.log(catTrigger.getClientRects());
  console.log(catTrigger.scrollTop);
  window.scrollTo({
    top: document.documentElement.scrollTop + catTrigger.getClientRects()[0].top + 20,
    behavior: "smooth"
  })
})