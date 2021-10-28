import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handlerSubmitForm) {
    super(popupSelector);
    this._formElement = this._popup.querySelector('.popup__form');
    this._formElementSubmitButton = this._formElement.querySelector('.popup__button-submit');
    this._submitButtonDefaultValue = this._formElementSubmitButton.textContent;
    this._handlerSubmitForm = handlerSubmitForm;
  }

  _getInputValues() {
    this._inputList = this._formElement.querySelectorAll('.popup__form-input');

    this._formValues = {};

    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  getFormValues() {
    return this._getInputValues();
  }

  getFormElement() {
    return this._formElement;
  }

  close() {
    this._formElement.reset();
    super.close();
  }

  setEventListener() {
    this._formElement.addEventListener('submit', (evt) => this._handlerSubmitForm(evt));
    super.setEventListener();
  }

  changeLoader(isEnable = false) {
    if (isEnable) {
      this._formElement.querySelector('.popup__button-submit').textContent = 'Сохранение...';
    } else {
      this._formElement.querySelector('.popup__button-submit').textContent = this._submitButtonDefaultValue;
    }
  }
}
