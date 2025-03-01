// t represents the time for each ellipse location;
let t = 0;

function setup() {
  createCanvas(600, 600);
}


function draw() {
  background(100);
  fill(255);
  // Ellipse without Perlin Noise
  let ox = random(0, width);
  ellipse(ox, 100, 40, 40);
  
  // Ellipse using Perlin Noise
  t += 0.009;
  let x = noise(t);
  // Mapping x from 0 to 1, to 0 to width
  x = map(x, 0, 1, 0, width);
  ellipse(x, height/2, 50, 50);
}
