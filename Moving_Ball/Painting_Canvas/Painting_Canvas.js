// Press "C" to clear the canvas
// Press "Num+" to increase the size of the brush
// Press "Num+-" to decrease the size of the brush
// Left Click to draw one ellipse
// Click and drag the mouse to paint
// Press "SpaceBar" to change the color of the paint brush

var col = {
  r: 255,
  g: 0,
  b: 0
}
var size = 24;
var inc = 0.25;
var minSize = false;
var maxSize = false;


function setup() {
  createCanvas(800, 400);
  background(100);
}

function draw() {
  noStroke();
  fill(col.r, col.g, col.b);

  if (keyIsDown(86)) {
      col.r = random(0, 255);
      col.g = random(0, 255);
      col.b = random(0, 255);  
  }
  
}
function SizeDraw () {

    if (keyIsDown(107)) {
    size+= inc;
    print(size);
  }
  if (keyIsDown(109)) {
    size-= inc;
    print(size);
  }


}

function mouseDragged () {
 
  ellipse(mouseX, mouseY, size, size);

}
function mousePressed () {
  ellipse(mouseX, mouseY, size, size);
  
  
}
function keyPressed () {
  if (keyCode === 67) {
    background(100);  
  }
                     
   if (keyCode === 32) {
      col.r = floor(random(0, 255));
      col.g = floor(random(0, 255));
      col.b = floor(random(0, 255));  
     print(col);
  }
  //SizeDraw();


}
