let bubbles = [];
let flowers = [];
function preload () {
  for (let i = 0; i < 5; i++) {
    flowers[i] = loadImage(`Desktop\JavaSript\JS\flowers${i}.jpg`);
  }
}
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
      b.changeColor(255);
    } else {
      b.changeColor(100);
    }
  }


}
