class Bubble {
  
  constructor (x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    
  }
  move () {
    this.x += random(-5, 5);
    this.y += random(-5, 5);
  }
  show () {
    noStroke();
    fill(255, 0, 0);
    ellipse(this.x, this.y, this.radius, this.radius);
  }  
  
  
  position () {
    if (this.x < 0|| this.x > 400) {
      this.x = random(0, 400);
    }
    
    if (this.y < 0|| this.y > 400) {
      this.y = random(0, 400);
    }
  }
}
