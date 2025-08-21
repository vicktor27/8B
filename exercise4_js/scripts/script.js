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
const modalProfile = document.querySelector("#modal-profile");
const ModalNewPlace = document.querySelector("#modal-new-place");
const modalImageView = document.querySelector("#modal-image-view");
const travelerProfileDetails = document.querySelector(
  ".traveler-profile__details"
);
const travelerProfileName = document.querySelector(".traveler-profile__name");
const travelerProfileBio = document.querySelector(".traveler-profile__bio");
const profileName = document.querySelector("#profile-name");
const profileDescription = document.querySelector("#profile-description");
const placesGalleryList = document.querySelector(".places-gallery__list");
//modalForms here is where we save all the forms in the index.html
const modalForms = Array.from(document.querySelectorAll(".modal__form"));
const modalsClose = Array.from(document.querySelectorAll(".modal__close"));
const travelerProfileEditBtn = document.querySelector(
  ".traveler-profile__edit-btn"
);

//this function take all the inputs in a form an then validates the data using the required fields
const validarBoton = (modalInputs) => {
  return modalInputs.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

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

  modalProfile.addEventListener("submit", (evt) => {
    evt.preventDefault();
    travelerProfileName.textContent = profileName.value;
    travelerProfileBio.textContent = profileDescription.value;
    modalProfile.classList.toggle("modal_is-opened");
  });

  modalForms.forEach((modalForm) => {
    const modalInputs = Array.from(modalForm.querySelectorAll(".modal__input"));
    const modalButton = modalForm.querySelector(".modal__button");
    modalButton.disabled = false;
    modalButton.disabled = validarBoton(modalInputs);

    modalInputs.forEach((modalInput) => {
      modalInput.addEventListener("input", () => {
        modalButton.disabled = validarBoton(modalInputs);

        let modalError = modalForm.querySelector(
          "#" + modalInput.id + "-error"
        );
        console.log();
        if (!modalInput.validity.valid) {
          modalError.textContent = "Hay Un Error|";
          modalError.classList.add("modal__error_visible");
        } else {
          modalError.textContent = "";
          modalError.classList.remove("modal__error_visible");
        }
      });
    });
  });

  travelerProfileEditBtn.addEventListener("click", () => {
    console.log("Click en el lapizito");
    profileName.value = travelerProfileName.textContent;
    profileDescription.value = travelerProfileBio.textContent;
    modalProfile.classList.toggle("modal_is-opened");
  });

  modalsClose.forEach((modalClose) => {
    modalClose.addEventListener("click", (evt) => {
      const modal = evt.target.closest(".modal");
      modal.classList.toggle("modal_is-opened");
    });
  });

  travelerProfileAddPlaceBtn.addEventListener("click", () => {
    ModalNewPlace.classList.toggle("modal_is-opened");
  });

  ModalNewPlace.addEventListener("submit", (evt) => {
    console.log("Click");
    const tempCard = {};
    evt.preventDefault();
    modalForm = ModalNewPlace.querySelector(".modal__form");
    const modalInputs = Array.from(modalForm.querySelectorAll(".modal__input"));
    modalInputs.forEach((modalInput) => {
      tempCard[modalInput.name] = modalInput.value;
    });

    createCard(tempCard);
  });

  placeCardDeleteButton.addEventListener("click", (evt) => {
    evt.target.closest(".place-card").remove();
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
