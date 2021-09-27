import FormValidator from './FormValidator.js';

export const classData = {
  inputSelector: 'popup__form-input',
  disableButtonClass: 'popup__button-submit_disabled',
  buttonSubmitClass: 'popup__button-submit',
  activeErrorClass: 'input-error_visible',
  inputErrorClass: 'popup__form-input_error',
};

const formList = Array.from(document.forms);

formList.forEach(function (formElement) {
  const form = new FormValidator(classData, formElement);
  form.enableValidation();
});
