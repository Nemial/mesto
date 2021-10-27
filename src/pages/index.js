import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import {
  addNewPlaceButton,
  cardsContainerSelector,
  cardSelector,
  classData,
  popupConfirmSelector,
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
import Api from '../components/Api.js';
import PopupWithSubmit from '../components/PopupWithSubmit.js';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-29',
  headers: {
    authorization: 'ae466f98-7ffc-4435-a80d-300e1427093a',
    'Content-Type': 'application/json',
  },
});

const cards = new Section({
  renderer: (item) => {
    const cardElement = createNewCard(item, cardSelector);
    cards.addItem(cardElement);
  },
}, cardsContainerSelector);

const userInfo = new UserInfo({ userNameSelector, userDescriptionSelector, userAvatarSelector });

api.getPageNeedData().then((responses) => {
  const [cardData, userData] = responses;
  userInfo.setUserInfo({ userName: userData.name, userDescription: userData.about });
  userInfo.setUserAvatar({ userAvatarLink: userData.avatar });
  userInfo.saveUserId(userData._id);
  const initialCards = cardData.slice(0, 6);
  cards.renderItems(initialCards);
}).catch((err) => {
  console.error(err);
});

const popupNewPlace = new PopupWithForm(popupNewPlaceSelector, (evt) => {
  evt.preventDefault();
  const formValues = popupNewPlace.getFormValues();
  const item = { name: formValues.name, link: formValues.url };
  api.addNewCard(item).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`${res.status} ${res.statusText}`);
    }
  }).then((newCardItem) => {
    const cardElement = createNewCard(newCardItem, cardSelector);
    cards.addNewItem(cardElement);
  }).catch((err) => {
    console.error(err);
  }).finally(() => {
    popupNewPlace.close();
  });
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

const popupConfirm = new PopupWithSubmit(popupConfirmSelector);
popupConfirm.setEventListener();

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
  const isMyCard = userInfo.getUserId() === item.owner._id;
  const card = new Card({
    data: item, isMyCard, cardSelector,
    handleCardClick: () => {
      const popupViewer = new PopupWithImage(popupViewerSelector);
      popupViewer.setEventListener();
      popupViewer.open(item.link, item.name);
    },
    handleDeleteIconClick: (evt) => {
      const card = evt.target.closest('.place');
      const cardId = card.getAttribute('data-id');
      popupConfirm.changeHandlerSubmitForm((evt) => {
        evt.preventDefault();
        api.removeCard(cardId).then((res) => {
          if (res.ok) {
            card.remove();
          } else {
            return Promise.reject(`${res.status} ${res.statusText}`);
          }
        }).catch((err) => {
          console.error(err);
        }).finally(() => {
          popupConfirm.close();
        });
      });
      popupConfirm.open();
    },
  });
  return card.generateCard();
}
