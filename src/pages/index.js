import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import {
  addNewPlaceButton,
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
} from '../utils/utils.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js';
import './index.css';

const userInfo = new UserInfo({ userNameSelector, userDescriptionSelector });

const cards = new Section({
  items: initialCards, renderer: (item) => {
    const cardElement = createNewCard(item, cardSelector);
    cards.addItem(cardElement);
  },
}, cardsContainerSelector);
cards.renderItems();

const popupNewPlace = new PopupWithForm(popupNewPlaceSelector, (evt) => {
  evt.preventDefault();
  const formValues = popupNewPlace.getFormValues();
  const item = { name: formValues.name, link: formValues.url };
  const cardElement = createNewCard(item, cardSelector);
  cards.addNewItem(cardElement);
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

addNewPlaceButton.addEventListener('click', () => {
  popupNewPlaceValidator.toggleButtonState();
  popupNewPlace.open();
});

function createNewCard(item, cardSelector) {
  const card = new Card(item, cardSelector, () => {
    const popupViewer = new PopupWithImage(popupViewerSelector);
    popupViewer.setEventListener();
    popupViewer.open(item.link, item.name);
  });
  return card.generateCard();
}
