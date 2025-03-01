void setup () {
  size(600, 600);
}
float x = 50;
float y = 100;
float size = 50;
float dx = 5;
float dy = -10;
boolean on = false;
boolean col = false;

void draw () {
  background(100);
  rectMode(CENTER);
  if (col) {
    fill(random(100, 255), random(0, 150), random(255, 100));
  } else {
    fill(0, 255, 100);
  }
  if (on) {
    //fill(0, 255, 100);
    rect(x, y, size, size);
  } else {
  //fill(255, 0, 0);
  noStroke();
  ellipse(x, y, size, size);
  }
  if (x > width - 25 || x < 25) {
    dx = -dx;
  }
  if (y > height - 25 || y < 25) {
    dy = -dy;
  }
  
  x += dx;
  y += dy;
}
void keyPressed () {
  if (keyCode == 67) {
    on = !on;
  }
  if (keyCode == 88) {
    col = !col;
  }
  
}
