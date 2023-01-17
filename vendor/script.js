let popup = document.querySelector(".popup");
let editButton = document.querySelector(".profile__edit-button") 
let closePopup = document.querySelector(".popup__close");  
let saveProfile = document.querySelector(".popup__form");
let inputName = document.querySelector(".popup__form [name=name]");
let profileName = document.querySelector(".profile__name");
let inputVocation = document.querySelector(".popup__form [name=vocation]");
let profileVocation = document.querySelector(".profile__vocation");


editButton.addEventListener("click", openPopup);

function openPopup() {
    popup.classList.toggle("popup_opened");
    inputName.value = profileName.textContent;
    inputVocation.value = profileVocation.textContent;
};

closePopup.addEventListener("click", closeEditForm);

function closeEditForm () {
    popup.classList.toggle("popup_opened");
}

saveProfile.addEventListener("submit", saveForm);

function saveForm(event) {
    event.preventDefault();
    profileName.textContent = inputName.value;
    profileVocation.textContent = inputVocation.value;
    popup.classList.toggle("popup_opened");
}
