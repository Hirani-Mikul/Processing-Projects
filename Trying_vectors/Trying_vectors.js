function setup() {
  createCanvas(600, 600);
}


function draw() {
  background(100);
  translate(width/2, height/2);
  fill(0);
  ellipse(0, 0, 8, 8);
  let location = createVector(width/2, height/2);
  let direction = createVector(mouseX, mouseY);
  direction.sub(location);
  
  //direction.mult(2);
  //direction.setMag(100);
  fill(255, 0, 0);
  let m = direction.mag();
  strokeWeight(1);
  rect(0, 0, m, 15);
  //fill(255, 0, 0);
  strokeWeight(5);
  line(0, 0, direction.x, direction.y);
  

}
