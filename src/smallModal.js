const smallModal = document.querySelector('.smallModal');
const btnOpen = document.querySelector('.main_arrowDown');
const btnClosed = document.querySelector('.smallModal_btnClosed');
const btnSubmit = document.querySelector('.smallModal_form_button');
const input = document.querySelector('.smallModal_form_input');
const body = document.querySelector('body');

btnOpen.addEventListener('click', toggleModal);
btnClosed.addEventListener('click', toggleModal);
btnSubmit.addEventListener('click', submit);

function toggleModal() {
  smallModal.classList.toggle('hidden');
}
const array = [];

function submit(e) {
  e.preventDefault();

  array.push(input.value);
  input.value = '';
  toggleModal();

  console.log(array);
}
