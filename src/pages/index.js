import "./index.css";

import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { validationProperties } from "../utils/constants.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { Section } from "../components/Section.js";

import {
  editButton,
  elementTemplate,
  profileForm,
  addPlaceForm,
  popupImageOpen,
  profileName,
  profileVocation,
  inputName,
  inputVocation,
  cardSection,
  popupEdit,
  addButton,
  popupAddPlace,
  initialCards,
} from "../utils/constants.js";

const popupEditNameInput = profileForm.querySelector("[name='name']");
const popupEditOccupationInput = profileForm.querySelector("[name='vocation']");
const popupAddNameInput = popupAddPlace.querySelector("[name='name']");
const popupAddUrlInput = popupAddPlace.querySelector("[name='link']");
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

const popupOpenPicture = new PopupWithImage(popupImageOpen);
popupOpenPicture.setEventListeners();

const cards = new Section(
  {
    items: [],
    renderer: (item) => {
      const card = createNewCard(item);
      cards.addItem(card);
    },
  },
  cardSection
);

const handleCardClick = (name, url) => {
  popupOpenPicture.open(name, url);
};

const createNewCard = (data) => {
  const card = new Card({ data, handleCardClick }, elementTemplate);
  return card.createCard();
};

cards.renderItems(initialCards);

const profile = new UserInfo({
  profileName: ".profile__name",
  profileVocation: ".profile__vocation",
});

const popupEditProfile = new PopupWithForm(popupEdit, {
  handleSubmitForm: (data) => {
    profile.setUserInfo(data);
    popupEditProfile.close();
  },
});

function editProfile() {
  const userData = profile.getUserInfo();
  inputName.value = userData.userName;
  inputVocation.value = userData.userInfo;
}

popupEditProfile.setEventListeners();

editButton.addEventListener("click", function () {
  editProfile();
  popupEditProfile.open();
  profileEditValidation.toggleSubmitButton();
  profileEditValidation.resetInputError();
});

const popupAddCard = new PopupWithForm(popupAddPlace, {
  handleSubmitForm: (data) => {
    const card = createNewCard(data);
    cards.addItem(card);
    popupAddCard.close();
  },
});

popupAddCard.setEventListeners();

addButton.addEventListener("click", () => {
  popupAddCard.open();
  placeAddValidation.toggleSubmitButton();
  placeAddValidation.resetInputError();
});
