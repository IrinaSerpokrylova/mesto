import { Popup } from "./Popup";

export class PopupWithConfirmation extends Popup {
  setSubmitAction(action) {
    this._handleSubmitCallback = action;
  }

  setEventListeners() {
    this._popupSelector
      .querySelector(".popup__save")
      .addEventListener("click", (evt) => {
        evt.preventDefault();
        this._handleSubmitCallback();
      });
    super.setEventListeners();
  }
}
