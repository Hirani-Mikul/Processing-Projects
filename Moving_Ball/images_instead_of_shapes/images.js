class Bubble {
  constructor (x, y, r, img) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.flower = img;
  }
  
  changeColor (bright) {
  this.bright = bright;
  }
  
  intersect (other) {
    let d = dist(this.x, this.y, other.x, other.y);
    return (d < this.r/2 + other.r/2);
  }
  
  show () {
    image(this.flower, this.x, this.y, this.r, this.r);
    //noStroke();
    //fill(this.bright, 200, 50, this.bright);
    //ellipse(this.x, this.y, this.r);
  }
  move () {
    this.x += random(-5, 5);
    this.y += random(-5, 5);
  
  }



}
