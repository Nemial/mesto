import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import {
  addNewPlaceButton,
  cardsContainerSelector,
  cardSelector,
  classData,
  popupChangeAvatarSelector,
  popupConfirmSelector,
  popupNewPlaceSelector,
  popupProfileSelector,
  popupViewerSelector,
  profileEditButton,
  userAvatarSelector,
  userDescriptionSelector,
  userNameSelector,
} from '../utils/constants.js';
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

const popupChangeAvatar = new PopupWithForm(popupChangeAvatarSelector, (evt) => {
  evt.preventDefault();
  popupChangeAvatar.changeLoader(true);
  const formValues = popupChangeAvatar.getFormValues();
  api.changeProfileAvatar({ avatar: formValues.url }).then(() => {
    popupChangeAvatar.close();
  }).catch((err) => {
    console.error(err);
  }).finally(() => {
    popupChangeAvatar.changeLoader();
  });
}, true);
popupChangeAvatar.setEventListener();
const popupChangeAvatarValidator = new FormValidator(classData, popupChangeAvatar.getFormElement());
popupChangeAvatarValidator.enableValidation();

const userInfo = new UserInfo({ userNameSelector, userDescriptionSelector, userAvatarSelector });

api.getPageNeedData().then((responses) => {
  const [cardData, userData] = responses;
  userInfo.setUserInfo({ userName: userData.name, userDescription: userData.about });
  userInfo.setUserAvatar({ userAvatarLink: userData.avatar });
  userInfo.saveUserId(userData._id);
  cards.renderItems(cardData);
}).catch((err) => {
  console.error(err);
});

const popupNewPlace = new PopupWithForm(popupNewPlaceSelector, (evt) => {
  evt.preventDefault();
  popupNewPlace.changeLoader(true);
  const formValues = popupNewPlace.getFormValues();
  const item = { name: formValues.name, link: formValues.url };
  api.addNewCard(item).then((newCardItem) => {
    const cardElement = createNewCard(newCardItem, cardSelector);
    cards.addNewItem(cardElement);
    popupNewPlace.close();
  }).catch((err) => {
    console.error(err);
  }).finally(() => {
    popupNewPlace.changeLoader();
  });
});
popupNewPlace.setEventListener();
const popupNewPlaceValidator = new FormValidator(classData, popupNewPlace.getFormElement());
popupNewPlaceValidator.enableValidation();

const popupProfile = new PopupWithForm(popupProfileSelector, (evt) => {
  evt.preventDefault();
  popupProfile.changeLoader(true);
  const formValues = popupProfile.getFormValues();
  api.updateUserInfo({ name: formValues.title, about: formValues.subtitle }).then((data) => {
    userInfo.setUserInfo({ userName: data.name, userDescription: data.about });
    popupProfile.close();
  }).catch((err) => {
    console.error(err);
  }).finally(() => {
    popupProfile.changeLoader();
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
  popupProfileValidator.resetValidation();
  popupProfile.open();
});

addNewPlaceButton.addEventListener('click', () => {
  popupNewPlaceValidator.resetValidation();
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
    likeCardHandler: () => {
      if (!card.isLiked()) {
        api.addLike(card.getCardId()).then((data) => {
          card.setLikeCount(data.likes.length);
        }).catch((err) => {
          console.error(err);
        });
      } else {
        api.removeLike(card.getCardId()).then((data) => {
          card.setLikeCount(data.likes.length);
        }).catch((err) => {
          console.error(err);
        });
      }
    },
    handleDeleteIconClick: (evt) => {
      const cardElement = evt.target.closest('.place');
      const cardId = card.getCardId();
      popupConfirm.changeHandlerSubmitForm((evt) => {
        evt.preventDefault();
        api.removeCard(cardId).then(() => {
          cardElement.remove();
          popupConfirm.close();

        }).catch((err) => {
          console.error(err);
        });
      });
      popupConfirm.open();
    },
  });
  return card.generateCard();
}
