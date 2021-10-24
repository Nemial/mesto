export default class Api {
  constructor({ headers, baseUrl }) {
    this._headers = headers;
    this._baseUrl = baseUrl;
  }

  getInitialCards() {
    const requestUrl = this._baseUrl + '/cards';
    return fetch(requestUrl, {
      headers: this._headers,
    });
  }

  getUserInfo() {
    const requestUrl = this._baseUrl + '/users/me';
    return fetch(requestUrl, {
      headers: this._headers,
    });
  }

  updateUserInfo(body) {
    const requestUrl = this._baseUrl + '/users/me';
    return fetch(requestUrl, {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify(body),
    });
  }
}
