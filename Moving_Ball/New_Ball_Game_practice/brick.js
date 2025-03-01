class Brick {
  constructor (bx, by) {
    this.bx = bx;
    this.by = by;
    this.bw = 65;
    this.bh = 15;
  }
  intersect (other) {
    let d = dist(this.x, this.y, this.other, this.other);
    return d <= this.r/2 + other.bh;
  }
  
  showBrick () {
    noStroke();
    fill(0, 0, 255);
    rect(this.bx, this.by, this.bw, this.bh);
  }
}
