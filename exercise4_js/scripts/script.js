//console.log("Hola Mundo");

const cards = [
  {
    image:
      "https://images.pexels.com/photos/15184022/pexels-photo-15184022.jpeg",
    name: "San Miguel de Allende",
  },
  {
    image:
      "https://images.pexels.com/photos/29470698/pexels-photo-29470698.jpeg",
    name: "Parras",
  },
  {
    image:
      "https://images.pexels.com/photos/27054014/pexels-photo-27054014.jpeg",
    name: "Veracru",
  },
];

const travelerProfileAddPlaceBtn = document.querySelector(
  ".traveler-profile__add-place-btn"
);

const ModalNewPlace = document.querySelector("#modal-new-place");
const modalImageView = document.querySelector("#modal-image-view");

const travelerProfileDetails = document.querySelector(
  ".traveler-profile__details"
);
const travelerProfileName = travelerProfileDetails.querySelector(
  ".traveler-profile__name"
);
const placesGalleryList = document.querySelector(".places-gallery__list");

/*
function addCard(){
    MEMOIZADA
}*/

const modalsClose = Array.from(document.querySelectorAll(".modal__close"));

modalsClose.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    ModalNewPlace.classList.toggle("modal_is-opened");
  });
});

travelerProfileAddPlaceBtn.addEventListener("click", () => {
  //  ModalNewPlace.classList.add("modal_is-opened");
  ModalNewPlace.classList.toggle("modal_is-opened");
});

ModalNewPlace.addEventListener("submit", (evt) => {
  const tempCard = {};
  evt.preventDefault();
  modalForm = ModalNewPlace.querySelector(".modal__form");
  const modalInputs = Array.from(modalForm.querySelectorAll(".modal__input"));
  modalInputs.forEach((modalInput) => {
    tempCard[modalInput.name] = modalInput.value;
  });

  createCard(tempCard);
});

const createCard = (card) => {
  const templatePlaceCard = document
    .querySelector("#template-place-card")
    .content.cloneNode(true);

  const placeCardImage = templatePlaceCard.querySelector(".place-card__image");
  const placeCardTitle = templatePlaceCard.querySelector(".place-card__title");
  const placeCardLikeButton = templatePlaceCard.querySelector(
    ".place-card__like-button"
  );
  const placeCardDeleteButton = templatePlaceCard.querySelector(
    ".place-card__delete-button"
  );

  placeCardDeleteButton.addEventListener("click", (evt) => {
    evt.target.closest(".place-card").remove();

    //pop //push //slice
  });

  placeCardLikeButton.addEventListener("click", () => {
    placeCardLikeButton.classList.toggle("place-card__like-button_is-active");
  });

  placeCardImage.src = card.image;
  placeCardImage.alt = card.name;
  placeCardTitle.textContent = card.name;

  placeCardImage.addEventListener("click", () => {
    modalImageView.classList.toggle("modal_is-opened");
    const modalImage = modalImageView.querySelector(".modal__image");
    const modalCaption = modalImageView.querySelector(".modal__caption");
    modalImage.src = placeCardImage.src;
    modalImage.alt = placeCardImage.alt;
    modalCaption.textContent = placeCardImage.alt;
  });

  placesGalleryList.appendChild(templatePlaceCard);
};

cards.forEach((card) => {
  createCard(card);
});

travelerProfileName.textContent = "Gordon Freeman";
/*<h1 class="traveler-profile__name">Victor Solis</h1>*/
