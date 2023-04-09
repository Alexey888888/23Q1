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
let itemPrevious = document.querySelector(".item_previous");
let itemNext = document.querySelector(".item_next");
let slider = document.querySelector(".slider");

const card1 = document.createElement("div");

const moveNext = () => {
  slider.classList.add("transition-next");
  cardNext();
  getNextArr();
};

const movePrevious = () => {
  slider.classList.add("transition-previous");
  cardPrevious();
  getPreviousArr();
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

function cardNext() {
  itemNext.innerHTML = "";
  for (let i = 0; i < 3; i++) {
    let card = document.createElement("div");
    card.className = "slider__card";

    let image = document.createElement("img");
    image.className = "slider__img";
    image.alt = "our_friends";
    image.src = allPetsArr[nextArr[i]].img;

    let description = document.createElement("div");
    description.className = "card__description";

    let name = document.createElement("p");
    name.className = "card__pets-name";
    name.innerText = allPetsArr[nextArr[i]].name;

    let btnWrap = document.createElement("div");
    btnWrap.className = "card__btn";

    let btn = document.createElement("button");
    btn.classList.add("btn", "btn_bordered");
    btn.innerText = "Learn more";

    btnWrap.prepend(btn);
    description.prepend(name);
    description.append(btnWrap);
    card.prepend(image);
    card.append(description);

    itemNext.append(card);
  }
}

function cardPrevious() {
  itemPrevious.innerHTML = "";
  for (let i = 0; i < 3; i++) {
    let card = document.createElement("div");
    card.className = "slider__card";

    let image = document.createElement("img");
    image.className = "slider__img";
    image.alt = "our_friends";
    image.src = allPetsArr[previousArr[i]].img;

    let description = document.createElement("div");
    description.className = "card__description";

    let name = document.createElement("p");
    name.className = "card__pets-name";
    name.innerText = allPetsArr[previousArr[i]].name;

    let btnWrap = document.createElement("div");
    btnWrap.className = "card__btn";

    let btn = document.createElement("button");
    btn.classList.add("btn", "btn_bordered");
    btn.innerText = "Learn more";

    btnWrap.prepend(btn);
    description.prepend(name);
    description.append(btnWrap);
    card.prepend(image);
    card.append(description);

    itemPrevious.append(card);
  }
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

let previousArr = uniqueArr.splice(0, 3);
let currentArr = uniqueArr.splice(0, 3);
let nextArr = [...uniqueArr];

console.log(previousArr);
console.log(currentArr);
console.log(nextArr);

function getNextArr() {
  currentArr.length = 0;
  currentArr = [...nextArr];
  nextArr.length = 0;
  arrayCount.length = 0;
  for (let i = 0; i < allPetsArr.length; i++) {
    arrayCount.push(i);
  }
  console.log(arrayCount);
  console.log(currentArr);

  let arrWithoutCurrent = arrayCount.reduce((acc, item) => {
    if (!currentArr.includes(item)) acc.push(item);
    return acc;
  }, []);
  console.log(arrWithoutCurrent);

  for (let i = 0; i < 3; i++) {
    nextArr.push(
      arrWithoutCurrent.splice(
        Math.floor(Math.random() * arrWithoutCurrent.length),
        1
      )[0]
    );
  }
  console.log(nextArr);
}

function getPreviousArr() {
  currentArr.length = 0;
  currentArr = [...previousArr];
  previousArr.length = 0;
  arrayCount.length = 0;
  for (let i = 0; i < allPetsArr.length; i++) {
    arrayCount.push(i);
  }

  let arrWithoutCurrent = arrayCount.reduce((acc, item) => {
    if (!currentArr.includes(item)) acc.push(item);
    return acc;
  }, []);
  console.log(arrWithoutCurrent);

  for (let i = 0; i < 3; i++) {
    previousArr.push(
      arrWithoutCurrent.splice(
        Math.floor(Math.random() * arrWithoutCurrent.length),
        1
      )[0]
    );
  }
}

document.addEventListener("DOMContentLoaded", initSlider);

function initSlider() {
  itemCurrent.innerHTML = "";
  for (let i = 0; i < 3; i++) {
    let card = document.createElement("div");
    card.className = "slider__card";

    let image = document.createElement("img");
    image.className = "slider__img";
    image.alt = "our_friends";
    image.src = allPetsArr[currentArr[i]].img;

    let description = document.createElement("div");
    description.className = "card__description";

    let name = document.createElement("p");
    name.className = "card__pets-name";
    name.innerText = allPetsArr[currentArr[i]].name;

    let btnWrap = document.createElement("div");
    btnWrap.className = "card__btn";

    let btn = document.createElement("button");
    btn.classList.add("btn", "btn_bordered");
    btn.innerText = "Learn more";

    btnWrap.prepend(btn);
    description.prepend(name);
    description.append(btnWrap);
    card.prepend(image);
    card.append(description);

    itemCurrent.append(card);
  }
}
