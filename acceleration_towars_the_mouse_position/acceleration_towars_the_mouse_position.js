let bubble;
function setup() {
  createCanvas(600, 600);
  //translate(300, 300);
  bubble = new Bubble();
}


function draw() {
  background(100);
  bubble.show();
  bubble.bounce();
  bubble.update();

}
