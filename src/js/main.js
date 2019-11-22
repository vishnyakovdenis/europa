import $ from 'jquery'
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/modal';
import './pages/main';
import './pages/product';

$('.mobile-nav .menu-item-has-children > a').click(function () {
  $(this).next().collapse('toggle')
  return false
})

$('#search').on('shown.bs.collapse', function () {
  $('#search input').focus()
})