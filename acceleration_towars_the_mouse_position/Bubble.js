class Bubble {

  constructor () {
    this.location = createVector(300, 300);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    
  }



  update() {
    this.mouse = createVector(mouseX, mouseY);
    this.mouse.sub(this.location);
    this.mouse.setMag(0.5);
    this.acceleration = this.mouse;
    //this.acceleration = p5.Vector.random2D();
    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);
    this.velocity.limit(5);
  }
  show () {
    fill(255);
    noStroke();
    ellipse(this.location.x, this.location.y, 40, 40);
  }

  bounce () {
    if (this.location.x > width) {
      this.location.x = 0;
    }
    if (this.location.x < 0) {
      this.location.x = width;
    }
    if (this.location.y > height) {
      this.location.y = 0;
    }
    if (this.location.y < 0) {
      this.location.y = height;
    }
  }
}
