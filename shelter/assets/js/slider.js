const allPetsArr = [
  {
    id: 0,
    name: "Jennifer",
    img: "assets/images/png/jennifer.png",
    type: "Dog",
    breed: "Labrador",
    description:
      "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
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
      "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
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
      "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
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
      "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
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
    description:
      "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
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
    description:
      "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
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
      "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
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
      "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "8 years",
    inoculations: ["bordetella bronchiseptica", "leptospirosis"],
    diseases: ["deafness", "blindness"],
    parasites: ["lice", "fleas"],
  },
];

const btnLeft = document.querySelector(".btn-arrow-left");
const btnRight = document.querySelector(".btn-arrow-right");
let itemCurrent = document.querySelector(".item_current");
const itemPrevious = document.querySelector(".item_previous");
const itemNext = document.querySelector(".item_next");
const slider = document.querySelector(".slider");

const card1 = document.createElement("div");

const moveNext = () => {
  slider.classList.add("transition-next");
  cardNext();
};

const movePrevious = () => {
  slider.classList.add("transition-previous");
};

btnRight.addEventListener("click", moveNext);

btnLeft.addEventListener("click", movePrevious);

slider.addEventListener("animationend", (animationEvent) => {
  if (animationEvent.animationName === "move-previous") {
    slider.classList.remove("transition-previous");
    itemCurrent.innerHTML = itemPrevious.innerHTML;
  } else {
    slider.classList.remove("transition-next");
    itemCurrent.innerHTML = itemNext.innerHTML;
  }
});

function getRandomNumber() {
  return (random = Math.floor(Math.random() * 8));
}

function cardNext() {
  let random = getRandomNumber();
  const cardsLine = document.querySelectorAll(".slider__card");
  console.log(cardsLine);

  cardsLine[6].innerHTML = "";
  const src6 = allPetsArr[random - 1].img;
  const name6 = allPetsArr[random - 1].name;
  const html6 = `
<img
class="slider__img"
src="${src6}"
alt="our_friends"
/>
<div class="card__description">
<p class="card__pets-name">${name6}</p>
<div class="card__btn">
  <button class="btn btn_bordered">Learn more</button>
</div>
</div>
`;
  cardsLine[6].insertAdjacentHTML("afterbegin", html6);

  cardsLine[7].innerHTML = "";
  const src = allPetsArr[random].img;
  const name = allPetsArr[random].name;
  const html = `
<img
class="slider__img"
src="${src}"
alt="our_friends"
/>
<div class="card__description">
<p class="card__pets-name">${name}</p>
<div class="card__btn">
  <button class="btn btn_bordered">Learn more</button>
</div>
</div>
`;
  cardsLine[7].insertAdjacentHTML("afterbegin", html);
}

const arrayCount = [];
const uniqueArr = [];

function initUniqueArr() {
  for (let i = 0; i < allPetsArr.length; i++) {
    arrayCount.push(i);
  }
  console.log(arrayCount);
  for (let i = 0; i < allPetsArr.length; i++) {
    uniqueArr.push(
      arrayCount.splice(Math.floor(Math.random() * arrayCount.length), 1)[0]
    );
  }
  uniqueArr.push(uniqueArr[0]);
  console.log(uniqueArr);
}

initUniqueArr();

const previousArr = uniqueArr.splice(0, 3);
const currentArr = uniqueArr.splice(0, 3);
const nextArr = [...uniqueArr];

console.log(previousArr);
console.log(currentArr);
console.log(nextArr);
