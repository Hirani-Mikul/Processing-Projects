let ball;
let colCount = 5;
let rowCount = 3;
let bricks = [];
function setup() {
  createCanvas(600, 600);
  ball = new Ball();

  for (let i = 0; i < colCount; i++) {
    for (let j = 0; j < rowCount; j++) {
      let x = i * 100 + 50;
      let y = j * 50 + 50;
      let b = new Brick(x, y);
      bricks.push(b);
    }
  }
}



function draw() {
  background(100);
  for (let i = 0; i < bricks.length; i++) {
    bricks[i].showBrick();
    }
  //for (let i = 0; i < colCount; i++) {
  //  for (let j = 0; j < rowCount; j++) {
  //    let x = i * 100 + 50;
  //    let y = j * 50 + 50;
  //    rect(x, y, 65, 15);
  //  }
  //}
  ball.show();
  ball.pos();
  //ball.move();
}
