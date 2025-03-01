let m = [];
let wind;

function setup() {
  let cnv = createCanvas(600, 600);
  cnv.position(400, 10);
  wind = createVector(0.01, 0);

  for (var i = 0; i < 2; i++) {
    let x = random(width);
    let y = 20;
    let mm = random(2, 4);
    m[i] = new Mover2 (x, y, mm);
  }
}

let gravity;
function draw() {
  background(100);
  
  for (var i = 0; i < m.length; i++) {
    gravity = createVector(0, 0.1 * m[i].mass);
    m[i].applyForce(gravity);
    m[i].applyForce(wind);
    m[i].update();
    m[i].checkEdges();
    m[i].show();
  }
}
