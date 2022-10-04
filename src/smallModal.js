const refs = {
  smallModal: document.querySelector('.smallModal'),
  btnOpen: document.querySelector('.main_arrowDown'),
  formContent: document.querySelector('.smallModal_wrapperContent'),
  btnClosed: document.querySelector('.smallModal_btnClosed'),
  btnSubmit: document.querySelector('.smallModal_form_button'),
  input: document.querySelector('.smallModal_form_input'),
  succesContent: document.querySelector('.smallModal_succes'),
  body: document.querySelector('body'),
};

refs.btnOpen.addEventListener('click', openModal);
refs.btnClosed.addEventListener('click', closeModal);
refs.btnSubmit.addEventListener('click', submit);

function toggleModal() {
  refs.smallModal.classList.toggle('hidden');
}
const array = [];

function submit(e) {
  e.preventDefault();

  array.push(refs.input.value);
  refs.input.value = '';
  // toggleModal();
  refs.formContent.style.display = 'none';
  refs.succesContent.style.display = 'flex';
  console.log(array);
}

function openModal(event) {
  event.preventDefault();
  window.addEventListener('keydown', closeModalOnEckape);
  toggleModal();
  refs.formContent.style.display = '';
  refs.succesContent.style.display = '';
}

function closeModal(event) {
  toggleModal();

  window.removeEventListener('keydown', closeModalOnEckape);
}

function closeModalOnEckape(event) {
  if (event.code === 'Escape') {
    closeModal();
  }
}

// function closeOverlayOnClick(event) {
//   if (event.currentTarget !== event.target) {
//     closeOverlay();
//   }
// }
