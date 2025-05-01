
let cardImages = [];
let cardBack;
let currentCard = null;
let totalCards = 30;
let canvas;

function preload() {
  cardBack = loadImage('card-back.jpg');
  for (let i = 1; i <= totalCards; i++) {
    let filename = 'card-' + nf(i, 2) + '.jpg';
    cardImages.push(loadImage(filename));
  }
}

function setup() {
  canvas = createCanvas(420, 660); // 完整卡片比例尺寸
  noSmooth();
  noLoop();
}

function draw() {
  clear();
  if (currentCard) {
    image(currentCard, 0, 0, width, height);
  } else {
    image(cardBack, 0, 0, width, height);
  }
}

function mousePressed() {
  if (!currentCard) {
    currentCard = random(cardImages);
    redraw();
    const index = cardImages.indexOf(currentCard);
    parent.postMessage({ cardIndex: index }, "*");
  }
}

window.addEventListener("message", function(event) {
  if (event.data === "reset") {
    currentCard = null;
    redraw();
  }
});
