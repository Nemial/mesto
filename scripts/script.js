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
const inputPlaceName = popupNewPlaceForm.querySelector('#place-name');
const inputPlaceImg = popupNewPlaceForm.querySelector('#place-img');
const profileTitle = profile.querySelector('.profile__title');
const profileSubtitle = profile.querySelector('.profile__subtitle');
const formInputTitle = popup.querySelector('#name');
const templateCardItem = document.querySelector('#places').content;
const placesSection = document.querySelector('.places');
const formInputSubtitle = popup.querySelector('#description');


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
  cardItem.querySelector('.place__image').addEventListener('click', openPopupViewer);
  cardItem.querySelector('.place__like-button').addEventListener('click', likeCard);
  cardItem.querySelector('.place__trash-button').addEventListener('click', removeCard);
  return cardItem;
}

function openPopupViewer(evt) {
  popupViewer.querySelector('.popup-viewer__image').src = evt.target.src;
  popupViewer.querySelector('.popup-viewer__image').alt = evt.target.alt;
  popupViewer.querySelector('.popup-viewer__text').textContent = evt.target.alt;
  openPopup(popupViewer);
}

function openNewPlacePopup() {
  openPopup(popupNewPlace);
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
  openPopup(popup);
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(evt) {
  evt.target.closest('.popup').classList.remove('popup_opened');
}

function changeProfileData(evt) {
  evt.preventDefault();
  profileTitle.textContent = formInputTitle.value;
  profileSubtitle.textContent = formInputSubtitle.value;
  closePopup();
}

function addNewPlaceItem(evt) {
  evt.preventDefault();
  const cardItem = makeCardItem({name: inputPlaceName.value, link: inputPlaceImg.value});
  popupNewPlaceForm.reset();
  placesSection.prepend(cardItem);
  closePopup(evt);

}

initCardItem();
profileEditButton.addEventListener('click', openProfilePopup);
addNewPlaceButton.addEventListener('click', openNewPlacePopup);
closePopupButton.addEventListener('click', closePopup);
closePopupNewPlaceButton.addEventListener('click', closePopup);
closePopupViewerButton.addEventListener('click', closePopup);
popupForm.addEventListener('submit', changeProfileData);
popupNewPlaceForm.addEventListener('submit', addNewPlaceItem);
