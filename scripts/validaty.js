const validationProperties = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save",
  inactiveButtonClass: "popup__save_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__item-error_active",
};

function showInputError(inputElement, settings) {
  const errorElement = inputElement.nextElementSibling;
  inputElement.classList.add(settings.inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(settings.errorClass);
}

function hideInputError(inputElement, settings) {
  const errorElement = inputElement.nextElementSibling;
  inputElement.classList.remove(settings.inputErrorClass);
  errorElement.classList.remove(settings.errorClass);
  errorElement.textContent = "";
}

function checkValidity(inputElement, settings) {
  if (!inputElement.validity.valid) {
    showInputError(inputElement, settings);
  } else {
    hideInputError(inputElement, settings);
  }
}

function hasInvalidInput(inputElements) {
  return Array.from(inputElements).some((element) => {
    return !element.validity.valid;
  });
}
function disableSubmitButton(buttonElement, settings) {
  buttonElement.disabled = true;
  buttonElement.classList.add(settings.inactiveButtonClass);
}

function enableSubmitButton(buttonElement, settings) {
  buttonElement.disabled = false;
  buttonElement.classList.remove(settings.inactiveButtonClass);
}

function toggleSubmitButton(inputElements, confirmButton, settings) {
  if (hasInvalidInput(inputElements)) {
    disableSubmitButton(confirmButton, settings);
  } else {
    enableSubmitButton(confirmButton, settings);
  }
}

function resetInputError(formElement, settings) {
  const inputElements = formElement.querySelectorAll(settings.inputSelector);
  const confirmButton = formElement.querySelector(
    settings.submitButtonSelector
  );
  toggleSubmitButton(inputElements, confirmButton, settings);
  inputElements.forEach((element) => {
    hideInputError(element, settings);
  });
}

function enableValidation(settings, formElement) {
  const inputElements = Array.from(
    formElement.querySelectorAll(settings.inputSelector)
  );
  const submitButton = formElement.querySelector(settings.submitButtonSelector);
  inputElements.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkValidity(inputElement, settings);
      toggleSubmitButton(inputElements, submitButton, settings);
    });
  });
}
