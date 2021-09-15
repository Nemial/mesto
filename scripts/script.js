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
const templateCardItem = document.querySelector('#places').content;
const placesSection = document.querySelector('.places');
const formInputSubtitle = popupProfile.querySelector('#description');

function likeCard(evt) {
  evt.target.classList.toggle('place__like-button_active');
}

function removeCard(evt) {
  evt.target.closest('.place').remove();
}

function makeCardItem(card) {
  const cardItem = templateCardItem.querySelector('.place').cloneNode(true);
  const cardImage = cardItem.querySelector('.place__image');
  cardImage.alt = card.name
  cardImage.src = card.link;
  cardItem.querySelector('.place__name').textContent = card.name;
  cardImage.addEventListener('click', openPopupViewer);
  cardItem.querySelector('.place__like-button').addEventListener('click', likeCard);
  cardItem.querySelector('.place__trash-button').addEventListener('click', removeCard);
  return cardItem;
}

function openPopupViewer(evt) {
  popupViewerImage.src = evt.target.src;
  popupViewerImage.alt = evt.target.alt;
  popupViewerText.textContent = evt.target.alt;
  openPopup(popupViewer);
}

function initCardItem() {
  initialCards.forEach(function (card) {
    const cardItem = makeCardItem(card);
    placesSection.append(cardItem);
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
  currentPopup.removeEventListener('keydown', closePopupWithKey);
}

function changeProfileData(evt) {
  evt.preventDefault();
  profileTitle.textContent = formInputTitle.value;
  profileSubtitle.textContent = formInputSubtitle.value;
  closePopup(popupProfile);
}

function addNewPlaceItem(evt) {
  evt.preventDefault();
  const cardItem = makeCardItem({name: inputPlaceName.value, link: inputPlaceImg.value});
  popupNewPlaceForm.reset();
  placesSection.prepend(cardItem);
  closePopup(popupNewPlace);
  const inputList = Array.from(popupNewPlaceForm.querySelectorAll(`.${classData.inputSelector}`));
  const buttonElement = popupNewPlaceForm.querySelector(`.${classData.buttonSubmitClass}`);
  toggleButtonState(inputList, buttonElement, classData.disableButtonClass);
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
