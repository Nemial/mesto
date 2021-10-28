export default class Api {
  constructor({ headers, baseUrl }) {
    this._headers = headers;
    this._baseUrl = baseUrl;
  }

  getInitialCards() {
    const requestUrl = this._baseUrl + '/cards';
    return fetch(requestUrl, {
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`${res.status} ${res.statusText}`);
      }
    }).catch((err) => {
      console.error(`Ошибка загрузки карточек: ${err}`);
    });
  }

  getUserInfo() {
    const requestUrl = this._baseUrl + '/users/me';
    return fetch(requestUrl, {
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`${res.status} ${res.statusText}`);
      }
    }).catch((err) => {
      console.error(`Ошибка загрузки данных пользователя: ${err}`);
    });
  }

  getPageNeedData() {
    return Promise.all([this.getInitialCards(), this.getUserInfo()]);
  }

  updateUserInfo(body) {
    const requestUrl = this._baseUrl + '/users/me';
    return fetch(requestUrl, {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify(body),
    });
  }

  addNewCard(body) {
    const requestUrl = this._baseUrl + '/cards';
    return fetch(requestUrl, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify(body),
    });
  }

  removeCard(cardId) {
    const requestUrl = this._baseUrl + `/cards/${cardId}`;
    return fetch(requestUrl, {
      headers: this._headers,
      method: 'DELETE',
    });
  }

  addLike(cardId) {
    const requestUrl = this._baseUrl + `/cards/likes/${cardId}`;
    return fetch(requestUrl, {
      headers: this._headers,
      method: 'PUT',
    });
  }

  removeLike(cardId) {
    const requestUrl = this._baseUrl + `/cards/likes/${cardId}`;
    return fetch(requestUrl, {
      headers: this._headers,
      method: 'DELETE',
    });
  }

  changeProfileAvatar(body) {
    const requestUrl = this._baseUrl + `/users/me/avatar`;
    return fetch(requestUrl, {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify(body),
    });
  }
}
