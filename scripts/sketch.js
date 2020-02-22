let randOffset = 5;
var canvas;
var mess;
let c = color('#FE4366');

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  background(230, 210, 230);
}

function draw() {
  background(230, 210, 230);
  strokeWeight(2);
  stroke('#96404F');
  for (let x = 100; x <= width - 100; x += 10) {
    for (let y = 100; y <= height - 100; y += 10) {
      if (pow((x - (width / 1.5)), 2) + pow((y - (height / 2)), 2) < 50000) {
        line(x - random(mouseY/8), y - random(mouseY/8), x + 5 + random(mouseY/8), y + random(mouseY/8));
      }
    }
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}