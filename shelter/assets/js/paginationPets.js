const allPetsArr = [
  {
    id: 0,
    name: "Jennifer",
    img: "../assets/images/png/jennifer.png",
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
    img: "../assets/images/png/pets-katrine.png",
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
    img: "../assets/images/png/woody.png",
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
    img: "../assets/images/png/scarlett.png",
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
    img: "../assets/images/png/katrine.png",
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
    img: "../assets/images/png/timmy.png",
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
    img: "../assets/images/png/freddie.png",
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
    img: "../assets/images/png/charly.png",
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

let arrayCount = [];
let uniqueArr = [];
let arr48 = [];
let pageNum = document.getElementById("pageNum");
const btnPageFirst = document.getElementById("pageFirst");
const btnPageDown = document.getElementById("pageDown");
const btnPageUp = document.getElementById("pageUp");
const btnPageLast = document.getElementById("pageLast");

let currentPage = 1;
pageNum.innerHTML = currentPage;

function initUniqueArr() {
  for (let i = 0; i < allPetsArr.length; i++) {
    arrayCount.push(i);
  }

  for (let i = 0; i < allPetsArr.length; i++) {
    uniqueArr.push(
      arrayCount.splice(Math.floor(Math.random() * arrayCount.length), 1)[0]
    );
  }
}

initUniqueArr();
//console.log(uniqueArr);
let arr1 = uniqueArr.splice(0, 3);
let arr2 = uniqueArr.splice(0, 3);
let arr3 = [...uniqueArr];
//console.log(arr1);
//console.log(arr2);
//console.log(arr3);

for (let i = 0; i < 6; i++) {
  mixArr(arr1);
  mixArr(arr2);
  arr3.reverse();
  arr48.push(...arr1, ...arr2, ...arr3);
}

//console.log(arr48);

function mixArr(array) {
  let x = array.length;
  let y;
  let z;
  while (x) {
    z = Math.floor(Math.random() * x--);
    y = array[x];
    array[x] = array[z];
    array[z] = y;
  }
  return array;
}

let petsContainer = document.querySelector(".pets__cards-container");
petsContainer.innerHTML = "";

//---------------------------------------
//---------------------------------------
//---------------------------------------
let petsNum = 8;
let maxNum = 6;
let start_ind = 40;
//---------------------------------------
//---------------------------------------
//---------------------------------------

function renderPage(startInd) {
  for (let i = startInd; i < startInd + petsNum; i++) {
    //petsNum
    let card = document.createElement("div");
    card.className = "pagination__card";

    card.setAttribute("data-id", allPetsArr[arr48[i]].id);

    let image = document.createElement("img");
    image.className = "slider__img";
    image.alt = "our_friends";
    image.src = allPetsArr[arr48[i]].img;

    let description = document.createElement("div");
    description.className = "card__description";

    let name = document.createElement("p");
    name.className = "card__pets-name";
    name.innerText = allPetsArr[arr48[i]].name;

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
    petsContainer.append(card);
  }
}

let startInd = 0;

renderPage(startInd);

btnPageUp.addEventListener("click", nextPage);

function nextPage() {
  btnPageDown.addEventListener("click", prevPage);
  currentPage++;
  pageNum.innerHTML = currentPage;
  petsContainer.innerHTML = "";
  startInd += petsNum; //petsNum
  renderPage(startInd);
  if (currentPage === maxNum) {
    //maxNum
    removeEventListenerUp();
    pageUp.classList.remove("btn-pets_active");
    pageLast.classList.remove("btn-pets_active");
  }
  btnPageDown.addEventListener("click", prevPage);
  btnPageFirst.classList.add("btn-pets_active");
  btnPageDown.classList.add("btn-pets_active");
}

function removeEventListenerUp() {
  btnPageUp.removeEventListener("click", nextPage);
}

function prevPage() {
  btnPageUp.addEventListener("click", nextPage);
  currentPage--;
  pageNum.innerHTML = currentPage;
  petsContainer.innerHTML = "";
  startInd -= petsNum; //petsNum
  renderPage(startInd);
  if (currentPage === 1) {
    removeEventListenerDown();
    btnPageFirst.classList.remove("btn-pets_active");
    btnPageDown.classList.remove("btn-pets_active");
  }
  pageUp.classList.add("btn-pets_active");
  pageLast.classList.add("btn-pets_active");
}

function removeEventListenerDown() {
  btnPageDown.removeEventListener("click", prevPage);
}

btnPageLast.addEventListener("click", showLastPage);

function showLastPage() {
  btnPageDown.addEventListener("click", prevPage);
  removeEventListenerUp();
  startInd = start_ind;
  petsContainer.innerHTML = "";
  renderPage(startInd);
  currentPage = maxNum; //maxNum
  pageNum.innerHTML = currentPage;
  btnPageFirst.classList.add("btn-pets_active");
  btnPageDown.classList.add("btn-pets_active");
  pageUp.classList.remove("btn-pets_active");
  pageLast.classList.remove("btn-pets_active");
}

btnPageFirst.addEventListener("click", showFirstPage);

function showFirstPage() {
  btnPageDown.addEventListener("click", prevPage);
  btnPageUp.addEventListener("click", nextPage);
  removeEventListenerDown();
  startInd = 0;
  petsContainer.innerHTML = "";
  renderPage(startInd);
  currentPage = 1;
  pageNum.innerHTML = currentPage;
  btnPageFirst.classList.remove("btn-pets_active");
  btnPageDown.classList.remove("btn-pets_active");
  pageUp.classList.add("btn-pets_active");
  pageLast.classList.add("btn-pets_active");
}

//---------------------------------------
//---------------------------------------
//---------------------------------------
//---------------------------------------
//---------------------------------------
const mediaQueryTablet = window.matchMedia(
  "(max-width: 768px) and (min-width: 620px)"
);

function doIfTablet(isTabletSize) {
  if (isTabletSize) {
    petsContainer.innerHTML = "";
    petsNum = 6;
    maxNum = 8;
    start_ind = 42;
    renderPage(startInd);
  }
}

doIfTablet(mediaQueryTablet.matches);

mediaQueryTablet.addEventListener("change", function (event) {
  doIfTablet(event.matches);
});

//---------------------------------------

const mediaQueryDesktop = window.matchMedia("(min-width: 768.1px)");

function doIfDesktop(isDesktopSize) {
  if (isDesktopSize) {
    petsContainer.innerHTML = "";
    petsNum = 8;
    maxNum = 6;
    start_ind = 40;
    renderPage(startInd);
  }
}

doIfDesktop(mediaQueryDesktop.matches);

mediaQueryDesktop.addEventListener("change", function (event) {
  doIfDesktop(event.matches);
});

doIfTablet(mediaQueryTablet.matches);

mediaQueryTablet.addEventListener("change", function (event) {
  doIfTablet(event.matches);
});

//---------------------------------------
const mediaQueryMobile = window.matchMedia("(max-width: 320px)");

function doIfMobile(isMobileSize) {
  if (isMobileSize) {
    petsContainer.innerHTML = "";
    petsNum = 3;
    maxNum = 16;
    start_ind = 45;
    renderPage(startInd);
  }
}

doIfMobile(mediaQueryMobile.matches);

mediaQueryMobile.addEventListener("change", function (event) {
  doIfMobile(event.matches);
});
