var x = 300;
var y = 500;
var dx = 5;
var dy = 5;
var brickX = 300;
var brickY = 100;
var brickW = 65;
var brickH = 15;
var radius = 25;

function setup() {
  createCanvas(600, 600);
}


function draw() {
  background(100);
  noStroke();
  fill(255, 0, 0);
  ellipse(x, y, radius, radius);
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 3; j++) {
      let b = brickX * i;
      let h = brickY * j;
      fill(0, 0, 255);
      rect((b+25), (h+50), brickW, brickH);
    }
  }
  if (x + dx > width - radius || x + dx < radius) {
    dx = -dx;
  }
  if (y + dy > height - radius || y + dy < radius) {
    dy = -dy;
  } else if (x > brickX && x < brickX + brickW && y > brickY && y  < brickY + brickH) {
    dy = -dy;
  }



  x += dx;
  y += dy;
}
