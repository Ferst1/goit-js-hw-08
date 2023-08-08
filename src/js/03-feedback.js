import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onFormData, 500));

form.addEventListener('submit', onSubmitForm);

let formData = JSON.parse(localStorage.getItem('feedback-form-state')) || {};

function onFormData(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onSubmitForm(e) {
  const { email, message } = form.elements;

  // Перевірка на заповненість полів
  if (!email.value || !message.value) {
    alert('Будь ласка, заповніть усі поля форми.');
    return;
  }

  console.log(formData);

  // Очищення даних з форми та localStorage
  e.preventDefault();
  form.reset();
  localStorage.removeItem('feedback-form-state');
  formData = {}; // Очищення об'єкта formData
}

(function dataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  const { email, message } = form.elements;
  if (data) {
    email.value = data.email || '';
    message.value = data.message || '';
  }
})();
