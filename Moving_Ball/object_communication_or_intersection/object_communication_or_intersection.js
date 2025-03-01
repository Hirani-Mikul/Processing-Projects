let bubble1, bubble2;

function setup() {
  createCanvas(600, 600);
  bubble1 = new Bubble(200, 300);
  bubble2 = new Bubble(280, 300, 100);
}


function draw() {


  if (bubble1.intersect(bubble2)) {
    background(100);
    bubble1.changeColor(255);
    bubble2.changeColor(255);
  } else {
    background(51);
    bubble1.changeColor(100);
    bubble2.changeColor(100);
  }

  //bubble2.x = mouseX;
  //bubble2.y = mouseY;
  bubble1.show();
  bubble1.move();
  bubble2.show();
  bubble2.move();
}
