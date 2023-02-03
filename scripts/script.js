const editButton = document.querySelector(".profile__edit-button");
const closeButtons = document.querySelectorAll(".popup__close");
const profileForm = document.querySelector(".popup__form_type_edit-profile");
const saveNewPlaceForm = document.querySelector(".popup__form_type_add-place");
const inputName = document.querySelector(".popup__form [name=name]");
const profileName = document.querySelector(".profile__name");
const inputVocation = document.querySelector(".popup__form [name=vocation]");
const profileVocation = document.querySelector(".profile__vocation");
const nameLocation = document.querySelector("[name=name_location]");
const referenceLocation = document.querySelector("[name=reference]");
const popupImageOpen = document.querySelector(".popup_type_open-image");
const addButton = document.querySelector(".profile__add-button");
const popupAddPlace = document.querySelector(".popup_type_new-foto");
const popupEdit = document.querySelector(".popup_type_edit");
const cardSection = document.querySelector(".elements__grid");
const popupImage = popupImageOpen.querySelector(".popup__image-opened");
const popupImageCaption = popupImageOpen.querySelector(".popup__image-caption");

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

function togglePopup(currentPopup) {
  currentPopup.classList.toggle("popup_opened");
}

closeButtons.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => togglePopup(popup));
});

function openEditFormPopup() {
  togglePopup(popupEdit);
  inputName.value = profileName.textContent;
  inputVocation.value = profileVocation.textContent;
}

function handleProfileFormSubmit(event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileVocation.textContent = inputVocation.value;
  togglePopup(popupEdit);
}

function openAddCardPopup() {
  togglePopup(popupAddPlace);
}

function saveNewPlace(event) {
  event.preventDefault();
  const name = nameLocation.value;
  const url = referenceLocation.value;
  addElement(name, url);
  nameLocation.value = "";
  referenceLocation.value = "";
  togglePopup(popupAddPlace);
}

function addElements(initialCards) {
  initialCards.forEach((item) => {
    addElement(item.name, item.link);
  });
}

function createCard(name, url) {
  const newElement = document
    .querySelector(".element__template")
    .content.querySelector(".element")
    .cloneNode(true);
  const elementPic = newElement.querySelector(".element__rectangle");
  const elementLike = newElement.querySelector(".element__like");
  elementPic.setAttribute("src", url);
  elementPic.setAttribute("alt", name);
  newElement.querySelector(".element__place").textContent = name;
  elementLike.addEventListener("click", () => {
    elementLike.classList.toggle("element__like_active");
  });

  newElement.querySelector(".element__delete").addEventListener("click", () => {
    newElement.remove();
  });
  elementPic.addEventListener("click", () => openPopupImage(name, url));
  return newElement;
}

function addElement(name, link) {
  const addCardTemplate = createCard(name, link);
  cardSection.prepend(addCardTemplate);
}

function openPopupImage(name, link) {
  togglePopup(popupImageOpen);
  popupImage.setAttribute("src", link);
  popupImage.setAttribute("alt", name);
  popupImageCaption.textContent = name;
}

addElements(initialCards);

editButton.addEventListener("click", openEditFormPopup);
profileForm.addEventListener("submit", handleProfileFormSubmit);
saveNewPlaceForm.addEventListener("submit", saveNewPlace);
addButton.addEventListener("click", openAddCardPopup);
