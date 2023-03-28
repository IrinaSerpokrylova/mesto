export class Card {
  constructor({ data, handleCardClick }, cardTemplateSelector) {
    this._name = data.name;
    this._url = data.url;
    this._handleCardClick = handleCardClick;
    this._cardTemplateSelector = cardTemplateSelector;
  }

  _getTemplate() {
    return document
      .querySelector(".element__template")
      .content.querySelector(".element")
      .cloneNode(true);
  }

  createCard() {
    this._element = this._getTemplate();
    this._elementPic = this._element.querySelector(".element__rectangle");
    this._elementLike = this._element.querySelector(".element__like");
    this._elementDelete = this._element.querySelector(".element__delete");

    this._setEventListeners();

    this._elementPic.title = this._element.querySelector(
      ".element__place"
    ).textContent = this._name;
    this._elementPic.src = this._url;
    this._elementPic.alt = this._name;
    return this._element;
  }

  _setEventListeners() {
    this._elementDelete.addEventListener("click", () => {
      this._element.remove();
    });

    this._elementLike.addEventListener("click", () => {
      this._elementLike.classList.toggle("element__like_active");
    });

    this._elementPic.addEventListener("click", () => {
      this._handleCardClick(this._name, this._url);
    });
  }
}
