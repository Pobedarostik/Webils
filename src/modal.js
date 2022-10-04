const refs = {
  modal: document.querySelector('[data-modal]'),
  btnOpenModal: document.querySelector('.buttonJS'),
  btnCloseModal: document.querySelector('[data-modal-close]'),
};

refs.btnOpenModal.addEventListener('click', openOverlay);
refs.btnCloseModal.addEventListener('click', closeOverlay);
refs.modal.addEventListener('click', closeOverlayOnEckape);

// for (let i = 0; i < refs.modal.length; i += 1) {
//   refs.btnOpenModal[i].addEventListener('click', openOverlay);

//   // if(refs.btnOpenModal[i].firstElementChild.nextSibling.parentElement.offsetParent.offsetParent
//   //   .children.['services']){
//   //     num = i;
//   //   }

//     if(refs.btnOpenModal[i].firstElementChild.nextSibling.parentElement.offsetParent.offsetParent
//       .children.['services']){
//         num = i;
//         console.log(num)
//       }
//   // console.log(
//   //   refs.btnOpenModal[i].firstElementChild.nextSibling.parentElement.offsetParent.offsetParent
//   //     .children.['services']
//   // );
// }

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

// function closeOverlayOnClick(event) {
//   console.log(event.currentTarget);
//   console.log(event.target);
//   // if (event.currentTarget !== event.target) {
//   //   closeOverlay();
//   // }
// el.previousElementSibling.className
// }

// refs.modal.forEach(el => console.log(el));
