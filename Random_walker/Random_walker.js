let walker;
//let t = 0;

function setup() {
  createCanvas(500, 500);
  background(100);
  walker = new Walk(250, 250);
}
function draw() {
  
  walker.show();
  walker.move();
  
}
