class Walk {
  constructor (x, y) {
    this.x = x; //noise(this.t);
    this.y = y; //noise(this.t);
    //this.t = 0;
  }
  
  show() {
    fill(255, 0, 0);
    //strokeWeight(5);
    //this.x = noise(t);
    //this.y = noise(t);
    
    //this.x = map(this.x, 0, 1, 0, width);
    //this.y = map(this.y, 0, 1, 0, height);
    point(this.x, this.y);
    //ellipse(this.x, this.y, 50, 50);
  }
  
  move () {
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
    //this.t += 0.01;
    var choice = floor(random(4));
    
    if (choice === 0) {
        this.x--;
    } else if (choice === 1) {
      this.x++;
    } else if (choice === 2) {
      this.y--;
    } else {
      this.y++;
    }
    
    
  }
  
}
