'use strict';
// Аккордеон
var accordions = document.querySelectorAll('.js-accordion');
var accordionsBtn = document.querySelectorAll('.footer__btn');
var accordionsList = document.querySelectorAll('.footer__list');

accordions.forEach(function (accordion) {
  var btn = accordion.querySelector('.footer__btn');
  var list = accordion.querySelector('.footer__list');

  btn.addEventListener('click', function () {
    if (btn.classList.contains('footer__btn--opened')) {
      btn.classList.remove('footer__btn--opened');
    } else {
      accordionsBtn.forEach(function (accordionBtn) {
        accordionBtn.classList.remove('footer__btn--opened');
      });
      btn.classList.add('footer__btn--opened');
    }
    if (list.classList.contains('footer__list--opened')) {
      list.classList.remove('footer__list--opened');
    } else {
      accordionsList.forEach(function (accordionList) {
        accordionList.classList.remove('footer__list--opened');
      });
      list.classList.add('footer__list--opened');
    }
  });
});
