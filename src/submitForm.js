const name = document.querySelector('#form_inputName');
const phone = document.querySelector('#form_inputPhone');
const textArea = document.querySelector('#form_textArea');
const btnSubmit = document.querySelector('#form_btnSubmit');
const checkboxs = document.querySelectorAll('.form_checkboxs_items input');

btnSubmit.addEventListener('click', submit);

const obj = {
  checkbox: [],
};
function submit(e) {
  e.preventDefault();

  checkboxs.forEach(el => {
    if (el.checked) {
      obj.checkbox.push(el.id);
    }
  });
  obj.Name = name.value;
  obj.Phone = phone.value;
  obj.Wish = textArea.value;
  name.value = '';
  phone.value = '';
  textArea.value = '';
  console.log(obj);
}
