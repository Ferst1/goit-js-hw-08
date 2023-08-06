import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onFormData, 500));

form.addEventListener('submit', onSubmitForm);

const formData = JSON.parse(localStorage.getItem('feedback-form-state')) || {};

function onFormData(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onSubmitForm(e) {
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

(function dataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  const { email, message } = form.elements;
  if (data) {
    email.value = data.email || '';
    message.value = data.message || '';
  }
})();
