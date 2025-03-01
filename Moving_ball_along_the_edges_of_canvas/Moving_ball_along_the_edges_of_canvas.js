function setup() {
  createCanvas(400, 400);
}
var x = 26;
var y = 25;
var dx = 5;
var dy = 5;


function draw() {
    background(217, 200, 217);
    fill(100, 45, 53);
    ellipseMode(CENTER);
    x = constrain(x, 25, width - 25);
    y = constrain(y, 25, height - 25);
    ellipse(x, y, 50, 50);
    
   if (x >= width - 25 && y >= 25) {
       y += dy;
   }
   if (x <= width - 25 && y >= height - 25) {
       x -= dx;
   }
   if (x <= 25 && y <= height - 25) {
       y -= dy;
   }
   if (x >= 25 && y >= 25 && y <= height - 375) {
        x += dx;
  } 
    //x += dx;
}
