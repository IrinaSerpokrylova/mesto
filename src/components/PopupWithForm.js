import { Popup } from "../components/Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, { handleSubmitForm }) {
    super(popupSelector);
    this._handleSubmitForm = handleSubmitForm;
    this._popupForm = this._popupSelector.querySelector(".popup__form");
    this._inputSelector = Array.from(
      this._popupForm.querySelectorAll(".popup__input")
    );
    this._buttonSave = this._popupForm.querySelector(".popup__save");
    this._buttonSaveText = this._buttonSave.getAttribute("value");
  }

  _getInputValues() {
    this._formValue = {};
    this._inputSelector.forEach((input) => {
      this._formValue[input.name] = input.value;
    });
    return this._formValue;
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this._buttonSave.setAttribute("value", "Сохранение...");
    } else {
      this._buttonSave.setAttribute("value", this._buttonSaveText);
    }
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this._handleSubmitForm(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._popupForm.reset();
  }
}
