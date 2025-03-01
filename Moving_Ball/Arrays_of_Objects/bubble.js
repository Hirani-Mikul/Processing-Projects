class Bubbles {
  constructor (x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
  
  changeColor (colr, colg, colb) {
      this.colr = colr;
      this.colg = colg;
      this.colb = colb;
  }
  
   inside (px, py) {
    let d = dist(px, py, this.x, this.y);
      return d < this.r/2;
     
    //if (d < this.r/2) {
    //  this.colg = 100;
    //  this.colb = 0;
    //  this.colr = 255;
    //} else {
    //  this.colr = 0;
    //  this.colb = 255;
    //  this.colg = 100;
    //}
  }
  show2 () {
    rect(this.x, this.y, this.r);
  }
  
  show () {
    noStroke();
    //strokeWeight(5);
    //stroke(255, 50);
    //fill(100, 200, 255);
    fill(this.colr, this.colg, this.colb, 100);
    ellipse(this.x, this.y, this.r);
  }
  move () {
    this.x += random (-5, 5);
    this.y += random (-5, 5);
  }


}
