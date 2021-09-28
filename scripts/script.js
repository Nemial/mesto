import Card from './Card.js';
import FormValidator from './FormValidator.js';
import { classData } from './validate.js';
import initialCards from './initial-cards.js';

const popupProfile = document.querySelector('.profile-popup');
const popups = Array.from(document.querySelectorAll('.popup'));
const popupNewPlace = document.querySelector('.popup-new-place');
const popupViewer = document.querySelector('.popup-viewer');
const popupViewerImage = popupViewer.querySelector('.popup-viewer__image');
const popupViewerText = popupViewer.querySelector('.popup-viewer__text');
const popupProfileForm = popupProfile.querySelector('.popup__form');
const popupNewPlaceForm = popupNewPlace.querySelector('.popup__form');
const popupProfileFormValidator = new FormValidator(classData, popupProfileForm);
popupProfileFormValidator.enableValidation();
const popupNewPlaceFormValidator = new FormValidator(classData, popupNewPlaceForm);
popupNewPlaceFormValidator.enableValidation();
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

export function openPopupViewer(imageSrc, imageAlt) {
  popupViewerImage.src = imageSrc;
  popupViewerImage.alt = imageAlt;
  popupViewerText.textContent = imageAlt;
  openPopup(popupViewer);
}

function initCardItem() {
  initialCards.forEach(function (card) {
    placesSection.append(createCard(card));
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

function createCard(item) {
  const card = new Card(item, cardSelector);
  return card.generateCard();
}

function addNewPlaceItem(evt) {
  evt.preventDefault();
  const cardItem = {name: inputPlaceName.value, link: inputPlaceImg.value};
  popupNewPlaceForm.reset();
  placesSection.prepend(createCard(cardItem));
  closePopup(popupNewPlace);
  popupNewPlaceFormValidator.toggleButtonState();
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
popupProfileForm.addEventListener('submit', changeProfileData);
popupNewPlaceForm.addEventListener('submit', addNewPlaceItem);
