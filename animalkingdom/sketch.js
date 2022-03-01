//how to visually represent a habitat/nature scene in a website?
function preload() {
  img = loadImage('background.jpg');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  image(img, 0-(mouseX/10), 0-(mouseY/10), windowWidth+100, windowHeight+100);
}