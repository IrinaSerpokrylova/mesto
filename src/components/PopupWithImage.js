import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupImageRewrite) {
    super(popupImageRewrite);
    this._popupImage = this._popupSelector.querySelector(
      ".popup__image-opened"
    );
    this._popupImageCaption = this._popupSelector.querySelector(
      ".popup__image-caption"
    );
  }

  open(name, link) {
    this._popupImage.src = link;
    this._popupImage.alt = name;
    this._popupImageCaption.textContent = name;
    super.open();
  }
}
