//popups
export const popupElements = document.querySelectorAll(".popup");
export const popupEdit = document.querySelector(".popup_type_edit");
export const popupAddPlace = document.querySelector(".popup_type_new-foto");
export const popupEditAvatar = document.querySelector(
  ".popup_type_edit-avatar"
);
export const popupImageOpen = document.querySelector(".popup_type_open-image");
export const popupDeleteConfirmation = document.querySelector(
  ".popup__delete-card"
);

//forms
export const profileForm = document.querySelector(
  ".popup__form_type_edit-profile"
);
export const addPlaceForm = document.querySelector(
  ".popup__form_type_add-place"
);
export const avatarEditForm = document.querySelector(
  ".popup__form_type_edit-avatar"
);

//inputs
export const inputName = popupEdit.querySelector(".popup__form [name=name]");
export const inputVocation = popupEdit.querySelector(
  ".popup__form [name=about]"
);
export const placeNameInput = addPlaceForm.querySelector(
  ".popup__form [name=name]"
);
export const placeLinkInput = addPlaceForm.querySelector(
  ".popup__form [name=link]"
);
export const avatarLinkInput = avatarEditForm.querySelector(
  ".popup__form [name=avatar]"
);

//buttons
export const editAvatarButton = document.querySelector(
  ".profile__edit-avatar-button"
);
export const editButton = document.querySelector(".profile__edit-button");
export const addButton = document.querySelector(".profile__add-button");
export const closeButtons = document.querySelectorAll(".popup__close");

//cards
export const elementTemplate = ".element__template";
export const cardSection = ".elements__grid";

//validation
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

export const config = {
  url: "https://mesto.nomoreparties.co/v1/cohort-63",
  headers: {
    authorization: "12dd9e74-5d63-45ab-b340-1203c962dc2b",
    "Content-Type": "application/json",
  },
};
