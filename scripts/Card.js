import { openPopupViewer } from './script.js';

export default class Card {
  constructor(data, cardSelector) {
    this._imageSrc = data.link;
    this._imageAlt = data.name;
    this._name = data.name;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    return document.querySelector(this._cardSelector).content.querySelector('.place').cloneNode(true);
  }

  _setEventListeners() {
    this._cardElement.querySelector('.place__like-button').addEventListener('click', (evt) => {
      this._likeCardHandler(evt);
    });
    this._cardElement.querySelector('.place__trash-button').addEventListener('click', (evt) => {
      this._removeCardHandler(evt);
    });
    this._cardImage.addEventListener('click', () => {
      openPopupViewer(this._cardImage.src, this._cardImage.alt);
    });
  }

  _likeCardHandler(evt) {
    evt.target.classList.toggle('place__like-button_active');
  }

  _removeCardHandler(evt) {
    evt.target.closest('.place').remove();
  }

  generateCard() {
    this._cardElement = this._getTemplate();
    this._cardImage = this._cardElement.querySelector('.place__image');
    this._setEventListeners();
    this._cardImage.alt = this._imageAlt;
    this._cardImage.src = this._imageSrc;
    this._cardElement.querySelector('.place__name').textContent = this._name;

    return this._cardElement;
  }
}
