import $ from 'jquery'
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/tab';
import './pages/main';
import './pages/product';

$('.mobile-nav .menu-item-has-children > a').click(function () {
  $(this).next().collapse('toggle')
  return false
})

$('#search').on('shown.bs.collapse', function () {
  $('#search input').focus()
})

new IntersectionObserver(
  ([e]) => {
    e.target.classList.toggle('isSticky', e.boundingClientRect.top <= -1)
  },
  {threshold: [1]}
).observe(document.querySelector('.category-tabs'))