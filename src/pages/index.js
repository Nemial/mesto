import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import {
  addNewPlaceButton,
  cardsContainerSelector,
  cardSelector,
  classData,
  popupNewPlaceSelector,
  popupProfileSelector,
  popupViewerSelector,
  profileEditButton,
  userAvatarSelector,
  userDescriptionSelector,
  userNameSelector,
} from '../utils/utils.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js';
import './index.css';
import Api from '../components/Api';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-29',
  headers: {
    authorization: 'ae466f98-7ffc-4435-a80d-300e1427093a',
    'Content-Type': 'application/json',
  },
});
api.getInitialCards().then((res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`${res.status} ${res.statusText}`);
  }
}).then((data) => {
  const initialCards = data.slice(0, 6);
  const cards = new Section({
    items: initialCards, renderer: (item) => {
      const cardElement = createNewCard(item, cardSelector);
      cards.addItem(cardElement);
    },
  }, cardsContainerSelector);
  cards.renderItems();
}).catch((err) => {
  console.error(err);
});

const userInfo = new UserInfo({ userNameSelector, userDescriptionSelector, userAvatarSelector });

api.getUserInfo().then((res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`${res.status} ${res.statusText}`);
  }
}).then((data) => {
  userInfo.setUserInfo({ userName: data.name, userDescription: data.about });
  userInfo.setUserAvatar({ userAvatarLink: data.avatar });
}).catch((err) => {
  console.error(err);
});

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
  api.updateUserInfo({ name: formValues.title, about: formValues.subtitle }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`${res.status} ${res.statusText}`);
    }
  }).then((data) => {
    userInfo.setUserInfo({ userName: data.name, userDescription: data.about });
  }).catch((err) => {
    console.error(err);
  }).finally(() => {
    popupProfile.close();
  });
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
