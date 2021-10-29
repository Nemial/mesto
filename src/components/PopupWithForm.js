import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handlerSubmitForm, isAvatarPopup = false) {
    super(popupSelector);
    this._formElement = this._popup.querySelector('.popup__form');
    this._formElementSubmitButton = this._formElement.querySelector('.popup__button-submit');
    this._inputList = this._formElement.querySelectorAll('.popup__form-input');
    this._submitButtonDefaultValue = this._formElementSubmitButton.textContent;
    this._handlerSubmitForm = handlerSubmitForm;
    this._isAvatarPopup = isAvatarPopup;
  }

  _getInputValues() {

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
    if (this._isAvatarPopup) {
      document.querySelector('.profile__image-container').addEventListener('click', () => {
        this.open();
      });
    }
    super.setEventListener();
  }

  changeLoader(isEnable = false) {
    if (isEnable) {
      this._formElementSubmitButton.textContent = 'Сохранение...';
    } else {
      this._formElementSubmitButton.textContent = this._submitButtonDefaultValue;
    }
  }
}
