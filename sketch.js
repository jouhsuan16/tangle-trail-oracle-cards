
let cardImages = [];
let currentCard;
let cardIndex = 0;

function preload() {
  for (let i = 1; i <= 30; i++) {
    let filename = 'card-' + nf(i, 2) + '.jpg';
    cardImages.push(loadImage(filename));
  }
}

function setup() {
  let canvas = createCanvas(400, 600);
  canvas.parent('card-container');
  currentCard = cardImages[0];
  updateBookPage(0);
}

function draw() {
  background(255);
  if (currentCard) {
    image(currentCard, 0, 0, width, height);
  }
}

function mousePressed() {
  cardIndex = floor(random(cardImages.length));
  currentCard = cardImages[cardIndex];
  updateBookPage(cardIndex);
}

function updateBookPage(index) {
  const pageMap = [
    6, 12, 24, 18, 30, 27, 25, 26, 29, 28,
    10, 9, 8, 11, 7, 22, 19, 20, 23, 21,
    16, 13, 14, 17, 15, 34, 31, 32, 35, 33
  ];
  let page = pageMap[index];
  document.getElementById('book').src = 'guidebook/page-' + page + '.jpg';
}
