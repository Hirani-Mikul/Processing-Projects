//let bubbles1, bubble2; // Example 1
let bubbles = [];  // Example 2 And 3

function setup() {
  createCanvas(600, 600);
  // Example 2
  //for (let i = 0; i < 10; i++) {
  //  let x = random(width);
  //  let y = random(height);
  //  let r = random(20, 75);
  //  bubbles[i] = new Bubbles(x, y, r);


  //}
  //bubbles1 = new Bubbles(300, 300, 50);  Example 1
  //bubbles2 = new Bubbles(400, 500, 25);  Example 1
}

//function keyPressed () {
//  if (keyCode == 88) {
//    for (let i = bubbles.length - 1; i >= 0; i--) {
//      if (bubbles[i].inside(mouseX, mouseY)) {
//        bubbles.splice(i, 1);
//      }
//    }
//  }
//}
function mouseDragged () {
  let r = 50;
  let b = new Bubbles(mouseX, mouseY, r);
  bubbles.push(b);
}

function keyPressed () {
  // Example 3
  if (keyCode == 67) {
    let r = 50;
    //let r = random(30, 75);
    let b = new Bubbles (mouseX, mouseY, r);
    bubbles.push(b);
  }
   if (keyCode == 88) {
    for (let i = bubbles.length - 1; i >= 0; i--) {
      if (bubbles[i].inside(mouseX, mouseY)) {
        bubbles.splice(i, 1);
      }
    }
  }
}  

function draw() {
  background(100);
  // Example 2 And 3 And 4

  for (let balloon of bubbles) {
    if (balloon.inside(mouseX, mouseY)) {
      balloon.changeColor(255, 100, 0);
    } else {
      balloon.changeColor(0, 100, 255);
    }
    //balloon.inside(mouseX, mouseY);
    balloon.show();
    balloon.move();
    
  }
  if (bubbles.length > 150) {
    bubbles.splice(0, 1);
  }
  //for (let Squares of squares) {
  //  Squares.show2();
  //  Squares.move2();
  //}
  // Example 2 And 3
  //for (let i = 0; i < bubbles.length; i++) {
  //  bubbles[i].show();
  //  bubbles[i].move();

  //}
  // Example 1
  //bubbles1.show();
  //bubbles1.move();
  //bubbles2.show();
  //bubbles2.move();
}
