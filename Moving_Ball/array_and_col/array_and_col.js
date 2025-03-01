var size = [25, 50, 75, 100, 125];
let r;
let g;
let b;


function setup() {
createCanvas(800, 800);
}


function draw() {
  background(100);
  for (var i = 0; i < size.length; i++) {
    for (var j = 0; j < size.length; j++) {
      fill(mouseX, mouseY, mouseY);
    ellipse(i * 125 + 100, j* 150 + 100, size[i], size[i]);
    }
  }
}
