let x, y, posX;
let r, g, b;
let score = 0;

preload = () => {
  this.spritesheet = loadImage("images/sprite.png");
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  newBg();
  newImage();
}

function draw() {
  clear();

  background(r, g, b);
  image(this.spritesheet.get(posX, 0, 70, 100), x, y, 70, 100);

  text("Score: " + score, 10, 30);
  textSize(20);

  if (score == 10) {
    noLoop();
    addElement();
  }
}

function mousePressed() {
  if (mouseX > x && mouseX < x + 70 && mouseY > y && mouseY < y + 100) {
    newBg();
    newImage();
    score++;
  }
}

function setRandomPosition() {
  return Math.floor(Math.random() * Math.floor(770 / 70)) * 70;
}

function newImage() {
  x = random(windowWidth);
  y = random(windowHeight);
  posX = setRandomPosition();
}

function newBg() {
  r = random(255);
  g = random(255);
  b = random(255);
}

function addElement() {
  let newDiv = document.createElement("div");
  newDiv.classList.add("modal");
  newDiv.innerHTML = "<h1>Hola, soy Alfonso!</h1>";
  document.body.prepend(newDiv);
}

setInterval(newImage, 750);
