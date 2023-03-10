const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

//global variables
let held_directions = []; //state of which arrow keys we are holding down
let speed = 10;
let moving = true;
let score = 0;
let generalFrame = 0;
let gameStatus = "pause";
let particlesArray = [];

const directions = {
  up: "up",
  down: "down",
  left: "left",
  right: "right",
};

const keys = {
  w: directions.up,
  a: directions.left,
  d: directions.right,
  s: directions.down,
};

/* Html setups */

// size bar
let sizeBar = document.getElementById("size-bar");
let sizeLable = document.querySelector(".lable");
sizeLable.innerHTML = `${(109 * 0.026).toFixed(2)}cm`;
sizeBar.style.width = `${(109 * 100) / 654}%`;

// timer
let remainingSeconds = 60,
  interval = null,
  minute,
  second;
let timerElement = document.getElementById("timer");
function timerStart() {
  interval = setInterval(() => {
    minute = parseInt(remainingSeconds / 60);
    second = parseInt(remainingSeconds % 60);
    timerElement.innerHTML = `${minute}:${second.toString().padStart(2, "0")}`;
    remainingSeconds--;

    if (remainingSeconds <= 10) {
      timeoutSound.play();
      timeoutWarning();
    }

    if (remainingSeconds === -1) {
      timeoutSound.pause();
      timerStop();
      endGame();
    }
  }, 1000);
}

function timerStop() {
  clearInterval(interval);
  interval = null;
}

/* Html setups end */

//images
const bgImg = new Image();
bgImg.src = "../img/background.png";

const piggyImg = new Image();
piggyImg.src = "../img/piggy.png";

const piggyEatImg = new Image();
piggyEatImg.src = "../img/piggyEat.png";

const polariod1Img = new Image();
polariod1Img.src = "../img/polaroid1.png";

const polariod2Img = new Image();
polariod2Img.src = "../img/polaroid2.png";

const polariod3Img = new Image();
polariod3Img.src = "../img/polaroid3.png";

const polariod4Img = new Image();
polariod4Img.src = "../img/polaroid4.png";

const polariod5Img = new Image();
polariod5Img.src = "../img/polaroid5.png";

const polariod6Img = new Image();
polariod6Img.src = "../img/polaroid6.png";

const pinsImg = new Image();
pinsImg.src = "../img/pins.png";

const patchsImg = new Image();
patchsImg.src = "../img/patchs.png";

const badgesImg = new Image();
badgesImg.src = "../img/badges.png";

const felt1Img = new Image();
felt1Img.src = "../img/felt1.png";

const felt2Img = new Image();
felt2Img.src = "../img/felt2.png";

const felt3Img = new Image();
felt3Img.src = "../img/felt3.png";

const embroidsImg = new Image();
embroidsImg.src = "../img/embroids.png";

const money1Img = new Image();
money1Img.src = "../img/money1.png";

const money2Img = new Image();
money2Img.src = "../img/money2.png";

const money3Img = new Image();
money3Img.src = "../img/money3.png";

const macaronis1Img = new Image();
macaronis1Img.src = "../img/macaronis1.png";

const macaronis2Img = new Image();
macaronis2Img.src = "../img/macaronis2.png";

const gumImg = new Image();
gumImg.src = "../img/gum.png";

const heart1Img = new Image();
heart1Img.src = "../img/heart1.png";

const heart2Img = new Image();
heart2Img.src = "../img/heart2.png";

const star1Img = new Image();
star1Img.src = "../img/star1.png";

const star2Img = new Image();
star2Img.src = "../img/star2.png";

const eye1Img = new Image();
eye1Img.src = "../img/eye1.png";

const eye2Img = new Image();
eye2Img.src = "../img/eye2.png";

const star3Img = new Image();
star3Img.src = "../img/star3.png";

const star4Img = new Image();
star4Img.src = "../img/star4.png";

const planet1Img = new Image();
planet1Img.src = "../img/planet1.png";

const planet2Img = new Image();
planet2Img.src = "../img/planet2.png";

const patchs2Img = new Image();
patchs2Img.src = "../img/patchs2.png";

//Sounds
const click = new Audio();
click.src = "../sound/click.mp3";
click.muted = false;

const levelUp = new Audio();
levelUp.src = "../sound/levelUp.mp3";

const failedSound = new Audio();
failedSound.src = "../sound/fail.mp3";

const timeoutSound = new Audio();
timeoutSound.src = "../sound/timeout.mp3";

const introSound = new Audio();
introSound.src = "../sound/intro.mp3";
introSound.muted = true;

const pigSound = new Audio();
pigSound.src = "../sound/pigsound.mp3";
pigSound.muted = true;

const levelSound = new Audio();
levelSound.src = "../sound/level1.mp3";
levelSound.volume = 0.4;

const eatSound = new Audio();
eatSound.src = "../sound/eating.mp3";
eatSound.muted = false;
eatSound.volume = 0.8;
