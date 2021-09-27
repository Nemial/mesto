import Card from './Card.js';
import FormValidator from './FormValidator.js';
import { classData } from './validate.js';
const popupProfile = document.querySelector('.profile-popup');
const popups = Array.from(document.querySelectorAll('.popup'));
const popupNewPlace = document.querySelector('.popup-new-place');
const popupViewer = document.querySelector('.popup-viewer');
const popupViewerImage = popupViewer.querySelector('.popup-viewer__image');
const popupViewerText = popupViewer.querySelector('.popup-viewer__text');
const popupForm = popupProfile.querySelector('.popup__form');
const popupNewPlaceForm = popupNewPlace.querySelector('.popup__form');
const profile = document.querySelector('.profile');
const profileEditButton = profile.querySelector('.profile__edit-button');
const addNewPlaceButton = profile.querySelector('.profile__add-button');
const inputPlaceName = popupNewPlaceForm.querySelector('#place-name');
const inputPlaceImg = popupNewPlaceForm.querySelector('#place-img');
const profileTitle = profile.querySelector('.profile__title');
const profileSubtitle = profile.querySelector('.profile__subtitle');
const formInputTitle = popupProfile.querySelector('#name');
const placesSection = document.querySelector('.places');
const formInputSubtitle = popupProfile.querySelector('#description');
const cardSelector = '#template-place';

export function openPopupViewer(evt) {
  popupViewerImage.src = evt.target.src;
  popupViewerImage.alt = evt.target.alt;
  popupViewerText.textContent = evt.target.alt;
  openPopup(popupViewer);
}

function initCardItem() {
  initialCards.forEach(function (card) {
    const cardItem = new Card(card, cardSelector);
    placesSection.append(cardItem.generateCard());
  });
}

function openProfilePopup() {
  formInputTitle.value = profileTitle.textContent;
  formInputSubtitle.value = profileSubtitle.textContent;
  openPopup(popupProfile);
}

function openPopup(currentPopup) {
  document.addEventListener('keydown', closePopupWithKey);
  currentPopup.classList.add('popup_opened');
}

function closePopup(currentPopup) {
  currentPopup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupWithKey);
}

function changeProfileData(evt) {
  evt.preventDefault();
  profileTitle.textContent = formInputTitle.value;
  profileSubtitle.textContent = formInputSubtitle.value;
  closePopup(popupProfile);
}

function addNewPlaceItem(evt) {
  evt.preventDefault();
  const cardItem = new Card({name: inputPlaceName.value, link: inputPlaceImg.value}, cardSelector);
  popupNewPlaceForm.reset();
  placesSection.prepend(cardItem.generateCard());
  closePopup(popupNewPlace);
  const formNewPlaceValidation = new FormValidator(classData, popupNewPlaceForm);
  formNewPlaceValidation.enableValidation();
}

function closePopupWithKey(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

initCardItem();

popups.forEach((popupElement) => {
  popupElement.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popupElement);
    }

    if (evt.target.classList.contains('popup__close-button')) {
      closePopup(popupElement);
    }
  });
});

profileEditButton.addEventListener('click', openProfilePopup);
addNewPlaceButton.addEventListener('click', () => openPopup(popupNewPlace));
popupForm.addEventListener('submit', changeProfileData);
popupNewPlaceForm.addEventListener('submit', addNewPlaceItem);
