class Square {
  constructor (x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.col = [255, 0, 0];
  }
  show () {
    fill(this.col);
    noStroke();
    rect(this.x, this.y, this.r, this.r);
  }
  
  show2 () {
    ellipse(this.x, this.y, this.r*2);
  }
  
  clicked (mx, my) {
    let d = dist(mx, my, this.x, this.y);
    if (d < this.r/2) {
      this.col = [255, 100];
    }
  }
  
  move () {
    this.x += random(-10, 10);
    this.y += random(-10, 10);
  }
  
}
