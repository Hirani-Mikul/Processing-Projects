class Ball {
  constructor () {
    this.x = 300;
    this.y = 100;
    this.r = 25;
    this.dx = 7;
    this.dy = 7;
  }
  //pos () {
    
  //  if (this.x > width - this.r || this.x < this.r) {
  //    this.dx = -this.dx;
  //  }
  //  if (this.y > height - this.r || this.y < this.r) {
  //    this.dy = -this.dy;
  //  } else if (this.x > this.bx && this.x < this.bx + this.bw && this.y > this.by && this.y < this.by +this.bh){
  //    this.dy = -this.dy;
  //  }
  //}

  show () {
    noStroke();
    fill(255, 0, 0);
    ellipse(this.x, this.y, this.r);
  }
  //move () {
  //  this.x += this.dx;
  //  this.y += this.dy;
  //}
}  
