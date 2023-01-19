let popup = document.querySelector(".popup");
let editButton = document.querySelector(".profile__edit-button") 
let closePopup = document.querySelector(".popup__close");  
let saveProfile = document.querySelector(".popup__form");
let inputName = document.querySelector(".popup__form [name=name]");
let profileName = document.querySelector(".profile__name");
let inputVocation = document.querySelector(".popup__form [name=vocation]");
let profileVocation = document.querySelector(".profile__vocation");

function openPopup() {
    togglePopupVisibility();
    inputName.value = profileName.textContent;
    inputVocation.value = profileVocation.textContent;
};

function togglePopupVisibility () {
    popup.classList.toggle("popup_opened");
}

function saveForm(event) {
    event.preventDefault();
    profileName.textContent = inputName.value;
    profileVocation.textContent = inputVocation.value;
    togglePopupVisibility();
}

editButton.addEventListener("click", openPopup);
closePopup.addEventListener("click", togglePopupVisibility);
saveProfile.addEventListener("submit", saveForm);