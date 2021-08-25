const popup = document.querySelector('.popup');
const popupNewPlace = document.querySelector('.popup-new-place');
const popupViewer = document.querySelector('.popup-viewer');
const closePopupButton = popup.querySelector('.popup__close-button');
const closePopupNewPlaceButton = popupNewPlace.querySelector('.popup__close-button');
const closePopupViewerButton = popupViewer.querySelector('.popup-viewer__close-button');
const popupForm = popup.querySelector('.popup__form');
const popupNewPlaceForm = popupNewPlace.querySelector('.popup__form');
const profile = document.querySelector('.profile');
const profileEditButton = profile.querySelector('.profile__edit-button');
const addNewPlaceButton = profile.querySelector('.profile__add-button');
let profileTitle = profile.querySelector('.profile__title');
let profileSubtitle = profile.querySelector('.profile__subtitle');
const formInputTitle = popup.querySelector('#name');
const templateCardItem = document.querySelector('#places').content;
const placesSection = document.querySelector('.places');
const formInputSubtitle = popup.querySelector('#description');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function likeCard(evt) {
  evt.target.classList.toggle('place__like-button_active');
}

function removeCard(evt) {
  evt.target.closest('.place').remove();
}

function makeCardItem(card) {
  const cardItem = templateCardItem.querySelector('.place').cloneNode(true);
  cardItem.querySelector('.place__image').alt = card.name;
  cardItem.querySelector('.place__image').src = card.link;
  cardItem.querySelector('.place__name').textContent = card.name;
  cardItem.querySelector('.place__image').addEventListener('click', openViewer);
  cardItem.querySelector('.place__like-button').addEventListener('click', likeCard);
  cardItem.querySelector('.place__trash-button').addEventListener('click', removeCard);
  return cardItem;
}

function openViewer(evt) {
  popupViewer.querySelector('.popup-viewer__image').src = evt.target.src;
  popupViewer.querySelector('.popup-viewer__image').alt = evt.target.alt;
  popupViewer.querySelector('.popup-viewer__text').textContent = evt.target.alt;
  popupViewer.classList.remove('popup-viewer_closed');
  popupViewer.classList.add('popup-viewer_opened');
}

function initCardItem() {
  initialCards.forEach(function (card) {
    const cardItem = makeCardItem(card);
    placesSection.append(cardItem);
  });
}

function openPopup() {
  formInputTitle.value = profileTitle.textContent;
  formInputSubtitle.value = profileSubtitle.textContent;
  popup.classList.remove('popup_closed');
  popup.classList.add('popup_opened');
}

function openNewPlacePopup() {
  popupNewPlace.classList.remove('popup_closed');
  popupNewPlace.classList.add('popup_opened');
}

function closePopup() {
  popup.classList.add('popup_closed');
}

function closeNewPlacePopup() {
  popupNewPlace.classList.add('popup_closed');
}

function closePopupViewer() {
  popupViewer.classList.add('popup-viewer_closed');
}

function changeProfileData(evt) {
  evt.preventDefault();
  profileTitle.textContent = formInputTitle.value;
  profileSubtitle.textContent = formInputSubtitle.value;
  closePopup();
}

function addNewPlaceItem(evt) {
  evt.preventDefault();
  const inputPlaceName = popupNewPlaceForm.querySelector('#place-name').value;
  const inputPlaceImg = popupNewPlaceForm.querySelector('#place-img').value;
  const cardItem = makeCardItem({name: inputPlaceName, link: inputPlaceImg});
  popupNewPlaceForm.querySelector('#place-name').value = '';
  popupNewPlaceForm.querySelector('#place-img').value = '';
  placesSection.prepend(cardItem);
  closeNewPlacePopup();
}

initCardItem();
profileEditButton.addEventListener('click', openPopup);
addNewPlaceButton.addEventListener('click', openNewPlacePopup);
closePopupButton.addEventListener('click', closePopup);
closePopupNewPlaceButton.addEventListener('click', closeNewPlacePopup);
closePopupViewerButton.addEventListener('click', closePopupViewer);
popupForm.addEventListener('submit', changeProfileData);
popupNewPlaceForm.addEventListener('submit', addNewPlaceItem);
