import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  _popupImage = this._popup.querySelector('.popup-viewer__image');
  _popupText = this._popup.querySelector('.popup-viewer__text');

  open(imageSrc, imageAlt) {
    this._popupImage.src = imageSrc;
    this._popupImage.alt = imageAlt;
    this._popupText.textContent = imageAlt;
    super.open();
  }
}
