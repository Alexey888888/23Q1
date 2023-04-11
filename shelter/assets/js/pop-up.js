const allPetsArray = [
  {
    id: 0,
    name: "Jennifer",
    img: "assets/images/png/jennifer.png",
    type: "Dog",
    breed: "Labrador",
    description:
      "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home.",
    age: "2 months",
    inoculations: ["none"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    id: 1,
    name: "Sophia",
    img: "assets/images/png/pets-katrine.png",
    type: "Dog",
    breed: "Shih tzu",
    description:
      "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy.",
    age: "1 month",
    inoculations: ["parvovirus"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    id: 2,
    name: "Woody",
    img: "assets/images/png/woody.png",
    type: "Dog",
    breed: "Golden Retriever",
    description:
      "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup.",
    age: "3 years 6 months",
    inoculations: ["adenovirus", "distemper"],
    diseases: ["right back leg mobility reduced"],
    parasites: ["none"],
  },
  {
    id: 3,
    name: "Scarlett",
    img: "assets/images/png/scarlett.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "Scarlett is a happy, playful girl who will make you laugh and smile.",
    age: "3 months",
    inoculations: ["parainfluenza"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    id: 4,
    name: "Katrine",
    img: "assets/images/png/katrine.png",
    type: "Cat",
    breed: "British Shorthair",
    description: "Katrine is a beautiful girl.",
    age: "6 months",
    inoculations: ["panleukopenia"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    id: 5,
    name: "Timmy",
    img: "assets/images/png/timmy.png",
    type: "Cat",
    breed: "British Shorthair",
    description: "Timmy is an adorable grey british shorthair male.",
    age: "2 years 3 months",
    inoculations: ["calicivirus", "viral rhinotracheitis"],
    diseases: ["kidney stones"],
    parasites: ["none"],
  },
  {
    id: 6,
    name: "Freddie",
    img: "assets/images/png/freddie.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Freddie is a little shy at first, but very sweet when he warms up.",
    age: "2 months",
    inoculations: ["rabies"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    id: 7,
    name: "Charly",
    img: "assets/images/png/charly.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "This cute boy, Charly, is three years old and he likes adults and kids.",
    age: "8 years",
    inoculations: ["bordetella bronchiseptica", "leptospirosis"],
    diseases: ["deafness", "blindness"],
    parasites: ["lice", "fleas"],
  },
];

const cards = document.querySelectorAll(".slider__item");
const popUp = document.querySelector(".pop-up");
const black = document.querySelector(".blackout-popUp");

//console.log(cards);

cards.forEach((el) => {
  el.addEventListener("click", (e) => {
    if (e.target.closest(".slider__card")) {
      let id = e.target.closest(".slider__card").getAttribute("data-id");
      createModal(id);
    }
  });
});

function createModal(id) {
  //console.log(id);
  popUp.innerHTML = `
  <div class="modal__wrapper">
  <img src="${allPetsArray[id].img}" alt="" class="pop-up__img">
  <div class="modal__text">
    <h3 class="modal__title">
    ${allPetsArray[id].name}
    </h3>
    <br>
    <p class="modal__type">${allPetsArray[id].type}-${allPetsArray[id].breed}</p>
    <br>
    <p class="modal__description">${allPetsArray[id].description}</p>
    <br>
    <ul class="modal__list">
      <li class="modal__list-item"><b>Age:</b> ${allPetsArray[id].age}</li>
      <li class="modal__list-item"><b>Inoculations</b> ${allPetsArray[id].inoculations}</li>
      <li class="modal__list-item"><b>Diseases:</b> ${allPetsArray[id].diseases}</li>
      <li class="modal__list-item"><b>Parasites:</b> ${allPetsArray[id].parasites}</li>
    </ul>
  </div>
  <button class="popUp__btn-close"></button>
  </div>
  `;
  openModal();
}

const main = document.querySelector("main");

function openModal() {
  popUp.classList.toggle("pop-up_active");
  black.classList.toggle("blackout-popUp_active");
  // main.classList.toggle("scroll-lock");
}

black.addEventListener("click", () => {
  popUp.classList.toggle("pop-up_active");
  black.classList.toggle("blackout-popUp_active");
});
