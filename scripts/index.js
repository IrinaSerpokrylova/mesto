import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

const editButton = document.querySelector(".profile__edit-button");
const elementTemplate = document.querySelector(".element__template");
export const closeButtons = document.querySelectorAll(".popup__close");
const profileForm = document.querySelector(".popup__form_type_edit-profile");
const addPlaceForm = document.querySelector(".popup__form_type_add-place");
const inputName = document.querySelector(".popup__form [name=name]");
const profileName = document.querySelector(".profile__name");
const inputVocation = document.querySelector(".popup__form [name=vocation]");
const profileVocation = document.querySelector(".profile__vocation");
const nameLocation = document.querySelector("[name=name_location]");
const referenceLocation = document.querySelector("[name=reference]");
export const popupImageOpen = document.querySelector(".popup_type_open-image");
const addButton = document.querySelector(".profile__add-button");
const popupAddPlace = document.querySelector(".popup_type_new-foto");
const popupEdit = document.querySelector(".popup_type_edit");
export const cardSection = document.querySelector(".elements__grid");
export const popupImage = popupImageOpen.querySelector(".popup__image-opened");
export const popupImageCaption = popupImageOpen.querySelector(
  ".popup__image-caption"
);
const popupElements = document.querySelectorAll(".popup");
const popupForms = document.querySelectorAll(".popup__form");

const validationProperties = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save",
  inactiveButtonClass: "popup__save_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__item-error_active",
};

const initialCards = [
  {
    name: "Сеул",
    link: "https://images.unsplash.com/photo-1538485399081-7191377e8241?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=674&q=80",
  },
  {
    name: "Пекин",
    link: "https://images.unsplash.com/photo-1603258740665-711401f368bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Шанхай",
    link: "https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Москва",
    link: "https://images.unsplash.com/photo-1528628226822-6f38ca9687c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Санкт-Петербург",
    link: "https://images.unsplash.com/photo-1548834925-e48f8a27ae6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  },
  {
    name: "Хабаровский край",
    link: "https://images.unsplash.com/photo-1662220474273-3444f0b018d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
];

const profileEditValidation = new FormValidator(
  validationProperties,
  profileForm
);
const placeAddValidation = new FormValidator(
  validationProperties,
  addPlaceForm
);

profileEditValidation.enableValidation();
placeAddValidation.enableValidation();

function openEditFormPopup() {
  inputName.value = profileName.textContent;
  inputVocation.value = profileVocation.textContent;
  profileEditValidation.resetInputError();
  openPopup(popupEdit);
}

function saveNewPlace(event) {
  event.preventDefault();
  const name = nameLocation.value;
  const url = referenceLocation.value;
  addElement(name, url, elementTemplate);
  closePopup(popupAddPlace);
}

function handleProfileFormSubmit(event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileVocation.textContent = inputVocation.value;
  closePopup(popupEdit);
}

function openAddCardPopup() {
  addPlaceForm.reset();
  placeAddValidation.resetInputError();
  openPopup(popupAddPlace);
}

function createNewCard(name, link) {
  const card = new Card(name, link, elementTemplate);
  return card.createCard();
}

initialCards.forEach((item) => {
  addElement(item.name, item.link, elementTemplate);
});

function addElement(name, link, elementTemplate) {
  cardSection.prepend(createNewCard(name, link, elementTemplate));
}

function closeByEscClick(event) {
  if (
    event.key === "Escape" ||
    event.target.classList.contains("popup_opened") ||
    event.target.classList.contains("popup__close")
  ) {
    const currentPopup = document.querySelector(".popup_opened");
    closePopup(currentPopup);
  }
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeByEscClick);
  document.removeEventListener("mousedown", closeByEscClick);
}

export function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeByEscClick);
  document.addEventListener("mousedown", closeByEscClick);
}

editButton.addEventListener("click", openEditFormPopup);
profileForm.addEventListener("submit", handleProfileFormSubmit);
addPlaceForm.addEventListener("submit", saveNewPlace);
addButton.addEventListener("click", openAddCardPopup);
