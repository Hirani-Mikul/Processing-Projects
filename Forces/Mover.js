let Mover = function (x, y, m) {
  this.pos = createVector(x, y);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.mass = m;
  this.scale = 10;
};
Mover.prototype.show = function () {
  noStroke();
  fill(0, 255, 255);
  ellipse(this.pos.x, this.pos.y, this.mass * this.scale, this.mass * this.scale);
};
