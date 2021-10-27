export default class UserInfo {
  constructor({ userNameSelector, userDescriptionSelector, userAvatarSelector }) {
    this._userNameElement = document.querySelector(userNameSelector);
    this._userDescriptionElement = document.querySelector(userDescriptionSelector);
    this._userAvatarElement = document.querySelector(userAvatarSelector);
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
}
