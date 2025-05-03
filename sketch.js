
let cardImages = [];
let cardBack;
let currentCard = null;
let totalCards = 30;

function preload() {
  cardBack = loadImage('card-back.jpg');
  for (let i = 1; i <= totalCards; i++) {
    let filename = 'card-' + nf(i, 2) + '.jpg';
    cardImages.push(loadImage(filename));
  }
}

function setup() {
  createCanvas(400, 600);
  imageMode(CENTER);
  textAlign(CENTER);
}

function draw() {
  background(255);
  if (currentCard) {
    displayImageFit(currentCard);
  } else {
    displayImageFit(cardBack);
  }
}

function mousePressed() {
  currentCard = random(cardImages);
}

function displayImageFit(img) {
  let aspectCanvas = width / height;
  let aspectImage = img.width / img.height;

  let displayW, displayH;

  if (aspectImage > aspectCanvas) {
    displayW = width * 0.9;
    displayH = displayW / aspectImage;
  } else {
    displayH = height * 0.75;
    displayW = displayH * aspectImage;
  }

  image(img, width / 2, height / 2, displayW, displayH);
}
