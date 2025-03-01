 var num = [1, 2, 3, 4, 5];
 var names = ["Mikul", "Bhavik", "Nirav", "Harshad", "Divyesh"];
 var pos = 0;
 var x = 100;
 var y = 100;
 var dy = 5;
 var dx = 5;
 
function setup() {
   createCanvas(600, 600);
}


function draw() {
  if (mouseIsPressed) {
    background(random(100, 255), random(0, 200), random(20, 150));
  } else {
  background(100);
  }
  //fill(255, 0, 0);
  textSize(50);
  text(names[pos], x, y);
  if (pos == names.length) {
    pos = 0;
  }
  if (x > width - 125 || x < 0) {
    dx = -dx;
  }
  if (y > height - 50 || y < 50) {
    dy = -dy;
  }
  x += dx;
  y += dy;
}
function mousePressed() {
  pos = pos + 1;
  fill(random(100, 255), random(0, 200), random(20, 150));
}
