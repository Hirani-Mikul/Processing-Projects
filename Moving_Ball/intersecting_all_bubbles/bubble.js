class Bubble {
  constructor (x, y, r = 50) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
  
  changeColor (bright) {
  this.bright = bright;
  }
  
  intersect (other) {
    let d = dist(this.x, this.y, other.x, other.y);
    return (d < this.r/2 + other.r/2);
  }
  
  show () {
    //noStroke();
    fill(this.bright, 200, 50, this.bright);
    ellipse(this.x, this.y, this.r);
  }
  move () {
    this.x += random(-5, 5);
    this.y += random(-5, 5);
  
  }



}
