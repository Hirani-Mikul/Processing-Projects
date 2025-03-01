let square = [];
function setup() {
  createCanvas(600, 600);
  //for (var i = 0; i < 100; i++) {
  //  let x = random(width);
  //  let y = random(height);
  //  let r = random(25, 50);
  //  square[i] = new Square(x, y, r);

  //}
}

function mousePressed () {
  for (let i = 0; i < square.length; i++) {
    square[i].clicked(mouseX, mouseY);
  }
}

function keyPressed () {
  if (keyCode == 67) {
    let r = random(25, 50);
    var b = new Square (mouseX, mouseY, r);
    square.push(b);
  }
}

function draw() {
  background(100);
  for (let squares of square) {
   squares.show();
   //squares.move();
  }
}
