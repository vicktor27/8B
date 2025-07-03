console.log("Hola Mundo");

//const travelerProfileName = document.querySelector(".traveler-profile__name");
const travelerProfileDetails = document.querySelector(
  ".traveler-profile__details"
);

const travelerProfileName = travelerProfileDetails.querySelector(
  ".traveler-profile__name"
);

console.dir(travelerProfileDetails);

travelerProfileName.textContent = "Gordon Freeman";
/*<h1 class="traveler-profile__name">Victor Solis</h1>*/
