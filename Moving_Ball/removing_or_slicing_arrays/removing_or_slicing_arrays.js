let balloon = [];
function setup() {
  createCanvas(800, 800);

}
function mouseDragged () {
  let r = 50;
  let b = new Balloon(mouseX, mouseY, r);
  balloon.push(b);
}

function draw() {
  background(51);
  for (let i = 0; i < balloon.length; i++) {
    if (balloon[i].inside(mouseX, mouseY)) {
      balloon[i].changeColor(255);
    } else {
       balloon[i].changeColor(75);
    }
    balloon[i].show();
    balloon[i].move();
  } 
  if (balloon.length > 100) {
    balloon.splice(0, 1);
  }
}
