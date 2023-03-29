export const popupEdit = document.querySelector(".popup_type_edit");
export const popupElements = document.querySelectorAll(".popup");
export const popupAddPlace = document.querySelector(".popup_type_new-foto");
export const popupImageOpen = document.querySelector(".popup_type_open-image");
export const popupImage = popupImageOpen.querySelector(".popup__image-opened");
export const popupImageCaption = popupImageOpen.querySelector(
  ".popup__image-caption"
);

export const profileForm = document.querySelector(
  ".popup__form_type_edit-profile"
);
export const addPlaceForm = document.querySelector(
  ".popup__form_type_add-place"
);
export const inputName = popupEdit.querySelector(".popup__form [name=name]");
export const profileName = document.querySelector(".profile__name");
export const profileVocation = document.querySelector(".profile__vocation");
export const nameLocation = document.querySelector("[name=name_location]");
export const referenceLocation = document.querySelector("[name=reference]");
export const inputVocation = popupEdit.querySelector(
  ".popup__form [name=vocation]"
);

export const editButton = document.querySelector(".profile__edit-button");
export const addButton = document.querySelector(".profile__add-button");
export const closeButtons = document.querySelectorAll(".popup__close");

export const elementTemplate = ".element__template";
export const cardSection = ".elements__grid";

export const validationProperties = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save",
  inactiveButtonClass: "popup__save_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__item-error_active",
};

export const initialCards = [
  {
    name: "Сеул",
    url: "https://images.unsplash.com/photo-1538485399081-7191377e8241?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=674&q=80",
  },
  {
    name: "Пекин",
    url: "https://images.unsplash.com/photo-1603258740665-711401f368bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Шанхай",
    url: "https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Москва",
    url: "https://images.unsplash.com/photo-1528628226822-6f38ca9687c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Санкт-Петербург",
    url: "https://images.unsplash.com/photo-1548834925-e48f8a27ae6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  },
  {
    name: "Хабаровский край",
    url: "https://images.unsplash.com/photo-1662220474273-3444f0b018d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
];
