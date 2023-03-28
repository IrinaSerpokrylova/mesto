export class UserInfo {
  constructor({ profileName, profileVocation }) {
    this._name = document.querySelector(profileName);
    this._about = document.querySelector(profileVocation);
  }

  getUserInfo() {
    this._userData = {
      userName: this._name.textContent,
      userInfo: this._about.textContent,
    };
    return this._userData;
  }

  setUserInfo(data) {
    this._name.textContent = data.name;
    this._about.textContent = data.vocation;
  }
}
