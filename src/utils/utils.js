export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
];

export const classData = {
  inputSelector: 'popup__form-input',
  disableButtonClass: 'popup__button-submit_disabled',
  buttonSubmitClass: 'popup__button-submit',
  activeErrorClass: 'input-error_visible',
  inputErrorClass: 'popup__form-input_error',
};

export const cardSelector = '#template-place';
export const popupViewerSelector = '.popup-viewer';
export const cardsContainerSelector = '.places';
export const popupNewPlaceSelector = '.popup-new-place';
export const popupProfileSelector = '.profile-popup';
export const profileElement = document.querySelector('.profile');
export const profileEditButton = profileElement.querySelector('.profile__edit-button');
export const addNewPlaceButton = profileElement.querySelector('.profile__add-button');
export const userNameSelector = '.profile__title';
export const userDescriptionSelector = '.profile__subtitle';
