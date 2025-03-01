var dx = 5;
var dy = 5;
class Star {
  constructor (x2, y2, r2) {
    this.x2 = x2;
    this.y2 = y2;
    this.r2 = r2;
  }
  starShow () {
    fill(0, 0, 255, 100);
    noStroke();
    ellipse(this.x2, this.y2, this.r2, this.r2);
  }
  starPos () {
    if (this.x2 > Canvas2.width - this.r2/2 || this.x2 < this.r2/2) {
      dx = -dx;
    }
  if (this.y2 > Canvas2.height - this.r2/2 || this.y2 < this.r2/2) {
      dy = -dy;
    }
  }
  starMove () {
    this.x2 += dx;
    this.y2 += dy;
  }
  
}
