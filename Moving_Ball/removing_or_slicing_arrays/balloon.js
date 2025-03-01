class Balloon {
  constructor (x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
  
  changeColor (bright) {
    this.bright = bright;
  }
  
  
  inside (mx, my) {
    let d = dist(mx, my, this.x, this.y);
    return d < this.r/2;
  }
  
  
  show () {
    stroke(255);
    strokeWeight(5);
    fill(this.bright,this.bright, 100);
    ellipse(this.x, this.y, this.r);
  }
  move () {
    this.x += random(-5, 5);
    this.y += random(-5, 5);
  }

}
