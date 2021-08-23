const popup = document.querySelector('.popup');
const closePopupButton = popup.querySelector('.popup__close-button');
const profile = document.querySelector('.profile');
const profileEditButton = profile.querySelector('.profile__edit-button');
const popupForm = popup.querySelector('.popup__form');
const formInputTitle = popup.querySelector('#name');
const formInputSubtitle = popup.querySelector('#description');
let profileTitle = profile.querySelector('.profile__title');
let profileSubtitle = profile.querySelector('.profile__subtitle');

const openPopup = () => {
  formInputTitle.value = profileTitle.textContent;
  formInputSubtitle.value = profileSubtitle.textContent;
  popup.classList.add('popup_opened');
};

const closePopup = () => {
  popup.classList.remove('popup_opened');
};

const changeProfileData = (evt) => {
  evt.preventDefault();
  profileTitle.textContent = formInputTitle.value;
  profileSubtitle.textContent = formInputSubtitle.value;
  closePopup();
}

profileEditButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);
popupForm.addEventListener('submit', changeProfileData);
