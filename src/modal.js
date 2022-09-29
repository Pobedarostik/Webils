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
  btnOpenModal: document.querySelectorAll('.buttonJS'),
  btnCloseModal: document.querySelector('[data-modal-close]'),
  overlay: document.querySelector('.overlay_topLine'),
};

console.log(refs.btnOpenModal[3].offsetParent.offsetParent.children[3].children[0].className);
refs.btnOpenModal[2].addEventListener('click', toggleModal);

refs.btnCloseModal.addEventListener('click', toggleModal);

function toggleModal(e) {
  // if (
  //   refs.btnOpenModal[1].offsetParent.offsetParent.children[3].children[0].className === 'whoWe'
  // ) {
  //   console.log('да все зробилось');
  //   refs.modal.classList.toggle('is-hidden');
  // }
  // if (
  //   refs.btnOpenModal[2].offsetParent.offsetParent.children[3].children[0].className ===
  //   'recentCases'
  // ) {
  //   console.log('да все зробилось');
  //   refs.modal.classList.toggle('is-hidden');
  // }
  // if (refs.btnOpenModal[3].offsetParent.offsetParent.children[3].children[0].className === 'blog') {
  //   console.log('да все зробилось');
  //   refs.modal.classList.toggle('is-hidden');
  // }

  //
  console.log(e.currentTarget.className);
}

// .offsetParent
