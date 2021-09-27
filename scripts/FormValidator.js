export default class FormValidator {
  constructor(classData, formElement) {
    this._classData = classData;
    this._formElement = formElement;
  }

  enableValidation() {
    this._setEventListeners();
  }

  _setEventListeners() {
    const inputList = Array.from(this._formElement.querySelectorAll(`.${this._classData.inputSelector}`));
    const buttonElement = this._formElement.querySelector(`.${this._classData.buttonSubmitClass}`);
    this._toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
        this._toggleButtonState(inputList, buttonElement, this._classData.disableButtonClass);
      });
    });
  }

  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._classData.disableButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(this._classData.disableButtonClass);
      buttonElement.disabled = false;
    }
  }

  _isValid(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _showInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._classData.activeErrorClass);
    inputElement.classList.add(this._classData.inputErrorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.classList.remove(this._classData.activeErrorClass);
    errorElement.textContent = '';
    inputElement.classList.remove(this._classData.inputErrorClass);
  }

  _hasInvalidInput(inputList) {
    return inputList.some(function (inputElement) {
      return !inputElement.validity.valid;
    });
  }
}
