const openModal = document.querySelector('.show-modal');
const closeModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const fechaModal = function() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

openModal.addEventListener('click', function() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
})

closeModal.addEventListener('click', fechaModal);

overlay.addEventListener('click', function() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
})