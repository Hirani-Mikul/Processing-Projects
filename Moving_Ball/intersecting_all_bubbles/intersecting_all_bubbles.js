let bubbles = [];

function setup() {
  createCanvas(600, 600);
  for (let i = 0; i < 20; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(20, 50);
    bubbles[i] = new Bubble(x, y, r);
  }
}


function draw() {
  background(51);

  for (let b of bubbles) {
    b.show();
    b.move();
    let overlapping = false;
    for (let other of bubbles) {
      if (b !== other && b.intersect(other)) {
        overlapping = true;
      }
    }
    if (overlapping) {
      //background(255);
      b.changeColor(255);
    } else {
      //background(51);
      b.changeColor(100);
    }
  }

  //if (bubble1.intersect(bubble2)) {
  //  background(100);
  //  bubble1.changeColor(255);
  //  bubble2.changeColor(255);
  //} else {
  //  background(51);
  //  bubble1.changeColor(100);
  //  bubble2.changeColor(100);
  //}


}
