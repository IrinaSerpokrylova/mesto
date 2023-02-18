const validationProperties = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save",
  inactiveButtonClass: "popup__save_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__item-error_active",
};

const inputElements = document.querySelectorAll(
  validationProperties.inputSelector
);

function showInputError(inputElement, errorMessage = "") {
  const errorElement = inputElement.nextElementSibling;
  inputElement.classList.add(validationProperties.inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(validationProperties.errorClass);
}

function hideInputError(inputElement) {
  const errorElement = inputElement.nextElementSibling;
  inputElement.classList.remove(validationProperties.inputErrorClass);
  errorElement.classList.remove(validationProperties.errorClass);
  errorElement.textContent = "";
}

function checkValidity(inputElement) {
  if (!inputElement.validity.valid) {
    showInputError(inputElement, inputElement.validationMessage);
  } else {
    hideInputError(inputElement);
  }
}

function hasInvalidInput(inputElements) {
  return Array.from(inputElements).some((element) => {
    return !element.validity.valid;
  });
}
function disableSubmitButton(buttonElement) {
  buttonElement.disabled = true;
  buttonElement.classList.add(validationProperties.inactiveButtonClass);
}

function enableSubmitButton(buttonElement) {
  buttonElement.disabled = false;
  buttonElement.classList.remove(validationProperties.inactiveButtonClass);
}

function toggleSubmitButton(inputElements, confirmButton) {
  if (hasInvalidInput(inputElements)) {
    disableSubmitButton(confirmButton);
  } else {
    enableSubmitButton(confirmButton);
  }
}

function resetInputError(formElement) {
  const inputElements = formElement.querySelectorAll(
    validationProperties.inputSelector
  );
  const confirmButton = formElement.querySelector(
    validationProperties.submitButtonSelector
  );
  toggleSubmitButton(inputElements, confirmButton);
  inputElements.forEach((element) => {
    hideInputError(element);
  });
}

function enableValidation(validationProperties, formElement) {
  const inputElements = Array.from(
    formElement.querySelectorAll(validationProperties.inputSelector)
  );
  const submitButton = formElement.querySelector(
    validationProperties.submitButtonSelector
  );
  toggleSubmitButton(inputElements, submitButton);
  inputElements.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkValidity(inputElement);
      toggleSubmitButton(inputElements, submitButton);
    });
  });
}
