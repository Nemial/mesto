import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  _popupImage = this._popup.querySelector('.popup-viewer__image');

  open(imageSrc, imageAlt) {
    this._popupImage.src = imageSrc;
    this._popupImage.alt = imageAlt;
    this._popup.querySelector('.popup-viewer__text').textContent = imageAlt;
    super.open();
  }
}
