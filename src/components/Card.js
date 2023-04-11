export class Card {
  constructor(
    { data, handleCardClick, userId, handleDeleteClick, handleLikeCard },
    cardTemplateSelector
  ) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._id = data._id;
    this._ownerId = data.owner._id;
    this._userId = userId;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeCard = handleLikeCard;
    this._cardTemplateSelector = cardTemplateSelector;
  }

  _getTemplate() {
    return document
      .querySelector(this._cardTemplateSelector)
      .content.querySelector(".element")
      .cloneNode(true);
  }

  createCard() {
    this._element = this._getTemplate();
    this._elementPic = this._element.querySelector(".element__rectangle");
    this._elementLike = this._element.querySelector(".element__like-button");
    this._elementDelete = this._element.querySelector(".element__delete");
    this._elementLikesCalc = this._element.querySelector(".element__like-calc");

    this._setEventListeners();

    this._elementPic.title = this._element.querySelector(
      ".element__place"
    ).textContent = this._name;
    this._elementPic.src = this._link;
    this._elementPic.alt = this._name;

    this._hideDeleteCard();

    this.setLike(this._likes);
    this._checkOwnLike();

    return this._element;
  }

  _setEventListeners() {
    this._elementDelete.addEventListener("click", () => {
      this._handleDeleteClick();
    });

    this._elementLike.addEventListener("click", () => {
      this._handleLikeCard();
    });

    this._elementPic.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  _hideDeleteCard() {
    if (this._ownerId !== this._userId) {
      this._elementDelete.remove();
    }
  }

  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  addLike = () => {
    this._elementLike.classList.add("element__like-button_active");
  };

  deleteLike = () => {
    this._elementLike.classList.remove("element__like-button_active");
  };

  setLike(data) {
    this._likes = data;
    this._elementLikesCalc.textContent = this._likes.length;
  }
  isLiked() {
    return this._likes.find((user) => user._id === this._userId);
  }

  _checkOwnLike() {
    this.isLiked() ? this.addLike() : this.deleteLike();
  }
}
