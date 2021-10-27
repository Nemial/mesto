import Popup from './Popup.js';

export default class PopupWithSubmit extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._formElement = this._popup.querySelector('.popup__form');
  }

  _setSubmitEventListener() {
    this._formElement.addEventListener('submit', (evt) => this._handlerSubmitForm(evt));
  }

  changeHandlerSubmitForm(newHandler) {
    this._handlerSubmitForm = newHandler;
    this._setSubmitEventListener();
  }
}
