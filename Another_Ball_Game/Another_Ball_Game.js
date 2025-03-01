function setup() {
  createCanvas(600, 600);
}

function keyPressed () {
}

function draw() {
  background(100);
  
  drawBall();
  ballMove();
  paddleMove();
  drawPaddle();
  drawBricks();
}
