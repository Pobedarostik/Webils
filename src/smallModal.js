const smallModal = document.querySelector('.smallModal');
const btnOpen = document.querySelector('.main_arrowDown');
const formContent = document.querySelector('.smallModal_wrapperContent');
const btnClosed = document.querySelector('.smallModal_btnClosed');
const btnSubmit = document.querySelector('.smallModal_form_button');
const input = document.querySelector('.smallModal_form_input');
const succesContent = document.querySelector('.smallModal_succes');
const body = document.querySelector('body');

btnOpen.addEventListener('click', openModal);
btnClosed.addEventListener('click', closeModal);
btnSubmit.addEventListener('click', submit);

function toggleModal() {
  smallModal.classList.toggle('hidden');
}
const array = [];

function submit(e) {
  // e.preventDefault();

  // array.push(input.value);
  // input.value = '';
  // // toggleModal();
  // formContent.style.display = 'none';
  // succesContent.style.display = 'flex';
  console.log(array);
}

function openModal(event) {
  event.preventDefault();
  window.addEventListener('keydown', closeModalOnEckape);
  toggleModal();
  formContent.style.display = '';
  succesContent.style.display = '';
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
