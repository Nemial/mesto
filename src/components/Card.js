export default class Card {
  constructor({ data, isMyCard, cardSelector, handleCardClick, handleDeleteIconClick }) {
    this._isMyCard = isMyCard;
    this._imageSrc = data.link;
    this._imageAlt = data.name;
    this._countLike = data.likes.length;
    this._cardId = data._id;
    this._name = data.name;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteIconClick = handleDeleteIconClick;
  }

  _getTemplate() {
    return document.querySelector(this._cardSelector).content.querySelector('.place').cloneNode(true);
  }

  _setEventListeners() {
    this._cardElement.querySelector('.place__like-button').addEventListener('click', (evt) => {
      this._likeCardHandler(evt);
    });
    if (this._isMyCard) {
      this._cardElement.querySelector('.place__trash-button').addEventListener('click', (evt) => {
        this._handleDeleteIconClick(evt);
      });
    }
    this._cardImage.addEventListener('click', () => this._handleCardClick());
  }

  _likeCardHandler(evt) {
    evt.target.classList.toggle('place__like-button_active');
  }

  generateCard() {
    this._cardElement = this._getTemplate();
    if (!this._isMyCard) {
      this._cardElement.querySelector('.place__trash-button').remove();
    }
    this._cardImage = this._cardElement.querySelector('.place__image');
    this._cardImage.alt = this._imageAlt;
    this._cardImage.src = this._imageSrc;
    this._cardElement.querySelector('.place__name').textContent = this._name;
    this._cardElement.querySelector('.place__count-like').textContent = this._countLike;
    this._cardElement.setAttribute('data-id', this._cardId);
    this._setEventListeners();
    return this._cardElement;
  }
}
