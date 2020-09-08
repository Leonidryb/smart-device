'use strict';
var body = document.querySelector('body');
var contactsBtn = document.querySelector('.header__btn');
var modal = document.querySelector('.modal');
var nameField = document.querySelector('#name-modal');
var overlay = document.querySelector('.overlay');
var modalCloseBtn = document.querySelector('.modal__close-btn');
var accordions = document.querySelectorAll('.js-accordion');
var accordionsBtn = document.querySelectorAll('.footer__btn');
var accordionsList = document.querySelectorAll('.footer__list');
var contactsForm = document.querySelector('#contacts .form');
var contactsFormModal = document.querySelector('.modal .form');
var nameInput = document.querySelector('#name');
var nameInputModal = document.querySelector('#name-modal');
var phoneInput = document.querySelector('#phone');
var phoneInputModal = document.querySelector('#phone-modal');
var messageInput = document.querySelector('#message');
var messageInputModal = document.querySelector('#message-modal');
var bannerBtn = document.querySelector('.banner__btn');
var contacts = document.querySelector('#feedback');
var bannerScroll = document.querySelector('.banner__scroll');
var advantages = document.querySelector('#advantages');

// Аккордеон
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

// Модальное окно
if (contactsBtn) {
  contactsBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (modal.classList.contains('modal--close')) {
      modal.classList.remove('modal--close');
      overlay.classList.remove('overlay--close');
      body.classList.add('overflow');
      nameField.focus();
    }
  });
}

if (modalCloseBtn) {
  modalCloseBtn.addEventListener('click', function () {
    if (!modal.classList.contains('modal--close')) {
      modal.classList.add('modal--close');
      overlay.classList.add('overlay--close');
      body.classList.remove('overflow');
    }
  });
}

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (!modal.classList.contains('modal--close')) {
      modal.classList.add('modal--close');
      overlay.classList.add('overlay--close');
      body.classList.remove('overflow');
    }
  }
});

if (overlay) {
  overlay.addEventListener('click', function () {
    if (!modal.classList.contains('modal--close')) {
      modal.classList.add('modal--close');
      overlay.classList.add('overlay--close');
      body.classList.remove('overflow');
    }
  });
}

// Local storage
if (contactsForm) {
  contactsForm.addEventListener('submit', function (event) {
    event.preventDefault();

    localStorage.setItem('name-field', nameInput.value);
    localStorage.setItem('phone-field', phoneInput.value);
    localStorage.setItem('message-field', messageInput.value);
  });
}

if (contactsFormModal) {
  contactsFormModal.addEventListener('submit', function (event) {
    event.preventDefault();

    localStorage.setItem('name-modal', nameInputModal.value);
    localStorage.setItem('phone-modal', phoneInputModal.value);
    localStorage.setItem('message-modal', messageInputModal.value);
  });
}

// Скролл
if (bannerBtn) {
  bannerBtn.addEventListener('click', function () {
    window.scrollBy({top: (contacts.offsetTop - window.scrollY), behavior: 'smooth'});
  });
}

if (bannerScroll) {
  bannerScroll.addEventListener('click', function () {
    window.scrollBy({top: (advantages.offsetTop - window.scrollY), behavior: 'smooth'});
  });
}

// Валидация телефона
var maskOptions = {
  mask: '+{7}(000)000-00-00'
};

IMask(phoneInput, maskOptions);
IMask(phoneInputModal, maskOptions);
