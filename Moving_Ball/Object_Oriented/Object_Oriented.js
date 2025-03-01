let bubble1, bubble2, bubble3;
let star1, star2, star3;
function setup() {
  createCanvas(400, 400);
  Canvas2 = createGraphics(400, 400);
  Canvas2.clear();
  Canvas2.star1 = new Star(200, 300, 50);
  Canvas2.star2 = new Star(100, 100, 50);
  Canvas2.star3 = new Star(50, 350, 50);
  bubble1 = new Bubble(200, 200, 50);
  bubble2 = new Bubble(100, 100, 25);
  bubble3 = new Bubble(300, 150, 75);
}
function draw() {
  background(100);
  Canvas2.star1.starShow();
  Canvas2.star1.starPos();
  Canvas2.star1.starMove();
  
  Canvas2.star2.starShow();
  Canvas2.star2.starPos();
  Canvas2.star2.starMove();
  
  Canvas2.star3.starShow();
  Canvas2.star3.starPos();
  Canvas2.star3.starMove();
  
  bubble1.move();
  bubble1.show();
  bubble1.position();
  
  bubble2.move();
  bubble2.show();
  bubble2.position();
  
  bubble3.move();
  bubble3.show();
  bubble3.position();
}
