function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(100);
  blocks();
  Ball();
  paddle();
  Lives();
  Scores();
  move();
  pos();
  
  
}
