
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
    image(currentCard, width / 2, height / 2);
    fill(0);
    textSize(16);
    text("Turn to the matching page in your oracle book.", width / 2, height - 40);
  } else {
    image(cardBack, width / 2, height / 2);
    fill(0);
    textSize(18);
    text("Click to draw your card", width / 2, height - 40);
  }
}

function mousePressed() {
  currentCard = random(cardImages);
}
