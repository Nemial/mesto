import Card from '../src/components/Card.js';
import Section from '../src/components/Section.js';
import PopupWithImage from '../src/components/PopupWithImage.js';
import {
  addNewPlaceButton,
  cardContainerElement,
  cardsContainerSelector,
  cardSelector,
  classData,
  initialCards,
  popupNewPlaceSelector,
  popupProfileSelector,
  popupViewerSelector,
  profileEditButton,
  userDescriptionSelector,
  userNameSelector,
} from '../src/utils.js';
import PopupWithForm from '../src/components/PopupWithForm.js';
import UserInfo from '../src/components/UserInfo.js';
import FormValidator from '../src/components/FormValidator.js';

const userInfo = new UserInfo({ userNameSelector, userDescriptionSelector });

const cards = new Section({
  items: initialCards, renderer: (item) => {
    const card = new Card(item, cardSelector, () => {
      const popupViewer = new PopupWithImage(popupViewerSelector);
      popupViewer.setEventListener();
      popupViewer.open(item.link, item.name);
    });
    const cardElement = card.generateCard();
    cards.addItem(cardElement);
  },
}, cardsContainerSelector);
cards.renderItems();

const popupNewPlace = new PopupWithForm(popupNewPlaceSelector, (evt) => {
  evt.preventDefault();
  const formValues = popupNewPlace.getFormValues();
  const item = { name: formValues.name, link: formValues.url };
  const card = new Card(item, cardSelector, () => {
    const popupViewer = new PopupWithImage(popupViewerSelector);
    popupViewer.setEventListener();
    popupViewer.open(item.link, item.name);
  });
  const cardElement = card.generateCard();
  cardContainerElement.prepend(cardElement);
  popupNewPlace.close();
});
popupNewPlace.setEventListener();
const popupNewPlaceValidator = new FormValidator(classData, popupNewPlace.getFormElement());
popupNewPlaceValidator.enableValidation();

const popupProfile = new PopupWithForm(popupProfileSelector, (evt) => {
  evt.preventDefault();
  const formValues = popupProfile.getFormValues();
  userInfo.setUserInfo({ userName: formValues.title, userDescription: formValues.subtitle });
  popupProfile.close();
});
popupProfile.setEventListener();
const popupProfileValidator = new FormValidator(classData, popupProfile.getFormElement());
popupProfileValidator.enableValidation();

profileEditButton.addEventListener('click', () => {
  const userInfoData = userInfo.getUserInfo();
  const profileForm = popupProfile.getFormElement();
  profileForm.elements.name.value = userInfoData.userName;
  profileForm.elements.description.value = userInfoData.userDescription;
  popupProfile.open();
});

addNewPlaceButton.addEventListener('click', () => popupNewPlace.open());
