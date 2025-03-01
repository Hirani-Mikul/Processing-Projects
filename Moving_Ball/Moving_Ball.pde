void setup (){
  size(400, 400);
}

float x = 100;
float y = 100;
float speed = 5;


void draw () {
  background(255);
  noFill();
  stroke(56);
  strokeWeight(5);
  ellipse(x, y, 50, 50);
  
  if (x > width - 25 || x < 25) {
  speed = -speed;
  }
  
  if (y > height -25 || y < 25) { 
    speed = - speed;
  }
  
  if (x + y > 2 * width - 50 || x + y < 50) {
    speed = -speed;
  }
  
  x+= speed;
  y+= speed;
  
  
  
}
