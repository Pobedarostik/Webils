const refs = {
  modal: document.querySelector('[data-modal]'),
  btnOpenModal: document.querySelector('.buttonJS'),
  btnCloseModal: document.querySelector('[data-modal-close]'),
};

refs.btnOpenModal.addEventListener('click', openOverlay);

refs.btnCloseModal.addEventListener('click', closeOverlay);

function toggleModal(e) {
  refs.modal.classList.toggle('is-hidden');
}

function openOverlay(event) {
  event.preventDefault();
  window.addEventListener('keydown', closeOverlayOnEckape);
  toggleModal();
}

function closeOverlay() {
  toggleModal();
  window.removeEventListener('keydown', closeOverlayOnEckape);
}

function closeOverlayOnEckape(event) {
  if (event.code === 'Escape') {
    closeOverlay();
  }
}
