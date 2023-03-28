import { Popup } from "../components/Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, { handleSubmitForm }) {
    super(popupSelector);
    this._handleSubmitForm = handleSubmitForm;
    this._popupForms = this._popupSelector.querySelector(".popup__form");
    this._inputSelector = Array.from(
      this._popupForms.querySelectorAll(".popup__input")
    );
  }

  _getInputValues() {
    this._formValue = {};
    this._inputSelector.forEach((input) => {
      this._formValue[input.name] = input.value;
    });
    return this._formValue;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForms.addEventListener("submit", (e) => {
      e.preventDefault();
      this._handleSubmitForm(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._popupForms.reset();
  }
}
