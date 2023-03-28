export class FormValidator {
  constructor(settingsValidation, formElement) {
    this._formElement = formElement;
    this._inputSelector = settingsValidation.inputSelector;
    this._submitButtonSelector = settingsValidation.submitButtonSelector;
    this._inactiveButtonClass = settingsValidation.inactiveButtonClass;
    this._inputErrorClass = settingsValidation.inputErrorClass;
    this._errorClass = settingsValidation.errorClass;
  }

  _showInputError(inputElement) {
    const errorElement = inputElement.nextElementSibling;
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = inputElement.nextElementSibling;
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  }

  _checkValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput() {
    return this._inputElements.some((element) => {
      return !element.validity.valid;
    });
  }

  disableSubmitButton() {
    this._submitButton.disabled = true;
    this._submitButton.classList.add(this._inactiveButtonClass);
  }

  enableSubmitButton() {
    this._submitButton.disabled = false;
    this._submitButton.classList.remove(this._inactiveButtonClass);
  }

  toggleSubmitButton() {
    if (this._hasInvalidInput()) {
      this.disableSubmitButton();
    } else {
      this.enableSubmitButton();
    }
  }

  resetInputError() {
    this.toggleSubmitButton();
    this._inputElements.forEach((element) => {
      this._hideInputError(element);
    });
  }

  enableValidation() {
    this._inputElements = Array.from(
      this._formElement.querySelectorAll(this._inputSelector)
    );
    this._submitButton = this._formElement.querySelector(
      this._submitButtonSelector
    );
    this._inputElements.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkValidity(inputElement);
        this.toggleSubmitButton();
      });
    });
  }
}
