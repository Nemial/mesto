export default class UserInfo {
  constructor({ userElement, avatarClickHandler }) {
    this._userNameElement = userElement.querySelector('.profile__title');
    this._userDescriptionElement = userElement.querySelector('.profile__subtitle');
    this._userAvatarElement = userElement.querySelector('.profile__avatar');
    this._userImageContainer = userElement.querySelector('.profile__image-container');
    this._avatarClickHandler = avatarClickHandler;
  }

  getUserInfo() {
    return { userName: this._userNameElement.textContent, userDescription: this._userDescriptionElement.textContent };
  }

  setUserInfo({ userName, userDescription }) {
    this._userNameElement.textContent = userName;
    this._userDescriptionElement.textContent = userDescription;
  }

  setUserAvatar({ userAvatarLink }) {
    this._userAvatarElement.src = userAvatarLink;
  }

  saveUserId(userId) {
    this._userId = userId;
  }

  getUserId() {
    return this._userId;
  }

  setEventListener() {
    this._userImageContainer.addEventListener('click', this._avatarClickHandler);
  }
}
