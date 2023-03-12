import {
  openPopup,
  popupImageOpen,
  popupImage,
  popupImageCaption,
} from "./index.js";

export class Card {
  constructor(name, url, template) {
    this._name = name;
    this._url = url;
    this._templateSelector = template;
  }

  _getTemplate() {
    const cardElement = this._templateSelector.content
      .querySelector(".element")
      .cloneNode(true);
    return cardElement;
  }

  createCard() {
    this._element = this._getTemplate();
    this._elementPic = this._element.querySelector(".element__rectangle");
    this._elementLike = this._element.querySelector(".element__like");
    this._elementPic.setAttribute("src", this._url);
    this._elementPic.setAttribute("alt", this._name);
    this._element.querySelector(".element__place").textContent = this._name;
    this._addEventListeners();
    return this._element;
  }

  _addEventListeners() {
    this._elementLike.addEventListener("click", () => {
      this._elementLike.classList.toggle("element__like_active");
    });

    this._element
      .querySelector(".element__delete")
      .addEventListener("click", () => {
        this._element.remove();
      });

    this._elementPic.addEventListener("click", () => this._openPopupImage());
  }

  _openPopupImage() {
    popupImage.setAttribute("src", this._url);
    popupImage.setAttribute("alt", this._name);
    popupImageCaption.textContent = this._name;
    openPopup(popupImageOpen);
  }
}
