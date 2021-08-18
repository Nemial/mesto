let popup = document.querySelector('.popup');
let closePopupButton = popup.querySelector('.popup__close-button');
let profile = document.querySelector('.profile');
let profileEditButton = profile.querySelector('.profile__edit-button');
let popupForm = popup.querySelector('.popup__container');

profileEditButton.addEventListener('click', function () {
  let formInputTitle = popup.querySelector('.popup__input-title');
  let formInputSubtitle = popup.querySelector('.popup__input-subtitle');
  let profileTitle = profile.querySelector('.profile__title');
  let profileSubtitle = profile.querySelector('.profile__subtitle');
  formInputTitle.value = profileTitle.textContent;
  formInputSubtitle.value = profileSubtitle.textContent;
  popup.classList.add('popup_opened');

});

closePopupButton.addEventListener('click', function () {
  popup.classList.remove('popup_opened');
});

popupForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  let formInputTitle = popup.querySelector('.popup__input-title');
  let formInputSubtitle = popup.querySelector('.popup__input-subtitle');
  let profileTitle = profile.querySelector('.profile__title');
  let profileSubtitle = profile.querySelector('.profile__subtitle');
  profileTitle.textContent = formInputTitle.value;
  profileSubtitle.textContent = formInputSubtitle.value;
  popup.classList.remove('popup_opened');
})
