'use strict';

const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');

const btnOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  // overlay.classList.toggle('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
  //   console.log(event.key);
  if (event.key === 'Escape') {
    closeModal();
  }
});
