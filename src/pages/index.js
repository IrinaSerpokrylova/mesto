import "./index.css";

import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { validationProperties } from "../utils/constants.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithConfirmation } from "../components/PopupWithConfirmation";
import { UserInfo } from "../components/UserInfo.js";
import { Section } from "../components/Section.js";
import { Api } from "../components/Api";
import { config } from "../utils/constants";

import {
  editAvatarButton,
  editButton,
  elementTemplate,
  profileForm,
  addPlaceForm,
  popupImageOpen,
  inputName,
  inputVocation,
  cardSection,
  popupEdit,
  addButton,
  popupAddPlace,
  popupEditAvatar,
  popupDeleteConfirmation,
} from "../utils/constants.js";

const profileEditValidation = new FormValidator(
  validationProperties,
  profileForm
);
const placeAddValidation = new FormValidator(
  validationProperties,
  addPlaceForm
);
const avatarValidator = new FormValidator(
  validationProperties,
  popupEditAvatar
);

profileEditValidation.enableValidation();
placeAddValidation.enableValidation();
avatarValidator.enableValidation();

const popupOpenPicture = new PopupWithImage(popupImageOpen);
popupOpenPicture.setEventListeners();

const api = new Api(config);

let userId = null;

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, initialCards]) => {
    userId = userData._id;

    profile.setUserInfo(userData);
    profile.setUserAvatar(userData);

    initialCards.reverse();
    cards.renderItems(initialCards);
  })
  .catch((err) => {
    console.log(err);
  });

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

const popupDeleteCard = new PopupWithConfirmation(popupDeleteConfirmation);

popupDeleteCard.setEventListeners();

const createNewCard = (data) => {
  const card = new Card(
    {
      data,
      userId,
      handleCardClick,

      handleDeleteClick: () => {
        popupDeleteCard.open();
        popupDeleteCard.setSubmitAction(() => {
          api
            .deleteCard(card._id)
            .then(() => {
              card.deleteCard();
              popupDeleteCard.close();
            })
            .catch((err) => {
              console.log(err);
            });
        });
      },

      handleLikeCard: () => {
        if (card.isLiked()) {
          api
            .deleteLike(card._id)
            .then((data) => {
              card.deleteLike();
              card.setLike(data.likes);
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          api
            .setLike(card._id)
            .then((data) => {
              card.addLike();
              card.setLike(data.likes);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      },
    },
    elementTemplate
  );
  return card.createCard();
};

const popupAddCard = new PopupWithForm(popupAddPlace, {
  handleSubmitForm: (data) => {
    popupAddCard.renderLoading(true);
    api
      .addNewCard(data)
      .then((data) => {
        const card = createNewCard(data);
        cards.addItem(card);
        popupAddCard.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupAddCard.renderLoading(false);
      });
  },
});

popupAddCard.setEventListeners();

addButton.addEventListener("click", () => {
  popupAddCard.open();
  placeAddValidation.toggleSubmitButton();
  placeAddValidation.resetInputError();
});

const profile = new UserInfo({
  profileName: ".profile__name",
  profileVocation: ".profile__vocation",
  profileAvatar: ".profile__avatar",
});

const popupEditProfile = new PopupWithForm(popupEdit, {
  handleSubmitForm: (data) => {
    popupEditProfile.renderLoading(true);
    api
      .updateUserInfo(data)
      .then((res) => {
        profile.setUserInfo(res);
        popupEditProfile.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupEditProfile.renderLoading(false);
      });
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

const popupEditNewAvatar = new PopupWithForm(popupEditAvatar, {
  handleSubmitForm: (data) => {
    popupEditNewAvatar.renderLoading(true);
    api
      .updateAvatar(data)
      .then((res) => {
        profile.setUserAvatar(res);
        popupEditNewAvatar.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupEditNewAvatar.renderLoading(false);
      });
  },
});

popupEditNewAvatar.setEventListeners();

editAvatarButton.addEventListener("click", () => {
  popupEditNewAvatar.open();
  avatarValidator.toggleSubmitButton();
  avatarValidator.resetInputError();
});
