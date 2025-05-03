
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
  function mousePressed() {
  let index = floor(random(cardImages.length));
  currentCard = cardImages[index];

  // 卡片與書頁對應表（card-01 → page-06，以此類推）
  const pageMap = [
    6, 12, 24, 18, 30, 27, 25, 26, 29, 28,
    10, 9, 8, 11, 7, 22, 19, 20, 23, 21,
    16, 13, 14, 17, 15, 34, 31, 32, 35, 33
  ];

  let pageNumber = pageMap[index];
  let pageURL = `guidebook/page-${pageNumber}.jpg`; // 或改成 HTML 頁也可以

  // 延遲兩秒後打開對應頁
  setTimeout(() => {
    window.open(pageURL, '_blank');
  }, 2000);
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
