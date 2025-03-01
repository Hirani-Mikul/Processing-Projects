var brickHeight = 15;
var brickWidth = 65;
var rowCount = 3;
var colCount = 6;

var bricks = [];

for (var c = 0; c < colCount; c++) {
  bricks[c] = [];
  for (var r = 0; r < rowCount; r++) {
  bricks[c][r] = {x: 
  0, y: 
  0, status: 
    1
  };
}
}

function blocks () {
  for (var c = 0; c < colCount; c++) {
    for (var r = 0; r < rowCount; r++) {
      fill(100, 200, 100);
      var brickX = c * (brickWidth + 25) + 50;
      var brickY = r * (brickHeight + 25) + 50;
      bricks[c][r].x = brickX;
      bricks[c][r].y = brickY;
      rect(brickX, brickY, brickWidth, brickHeight);
    }
  }
}
