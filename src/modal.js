// (() => {
//   const refs = {
//     modal: document.querySelector('[data-modal]'),
//     openModalBtn: document.querySelector('[data-modal-open]'),

//     // btnSubmit: document.querySelector('.buttonJS'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   //   refs.btnSubmit.addEventListener('click', submit);

//   //   function submit(e) {
//   //     e.preventDefault();
//   //     console.log('submit');
//   //     toggleModal();
//   //   }

//   function toggleModal() {
//     refs.modal.classList.toggle('is-hidden');
//   }
// })();
const refs = {
  modal: document.querySelector('[data-modal]'),
  btnOpenModal: document.querySelector('.buttonJS'),
  btnCloseModal: document.querySelector('[data-modal-close]'),
};

refs.btnOpenModal.addEventListener('click', toggleModal);

refs.btnCloseModal.addEventListener('click', toggleModal);

function toggleModal(e) {
  refs.modal.classList.toggle('is-hidden');
  // refs.body.classList.toggle('owerflow');
}
