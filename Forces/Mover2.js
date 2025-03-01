class Mover2 {
  constructor (x, y, m) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.mass = m;
    this.scale = 10;
  }
  applyForce (force) {
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
  
  }
  update () {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }
  show () {
    noStroke();
    fill(0, 255, 0);
    ellipse(this.pos.x, this.pos.y, this.mass * this.scale, this.mass * this.scale);
  }
  
  checkEdges () {
    if (this.pos.x > width - this.mass * this.scale/2) {
      this.vel.x *= -1;
      this.pos.x = width - this.mass * this.scale/2;
    } else if (this.pos.x < this.mass * this.scale/2 ) {
      this.vel.x *= -1;
      this.pos.x = this.mass * this.scale/2;
    }
    if (this.pos.y > height - this.mass * this.scale/2) {
      this.pos.y = height - this.mass * this.scale/2;
      this.vel.y *= -1;
    } else if (this.pos.y < this.mass * this.scale/2) {
      this.vel.y *= -1;
      this.pos.y = this.mass * this.scale/2;
    }
  }
  
  friction () {

  }
}
