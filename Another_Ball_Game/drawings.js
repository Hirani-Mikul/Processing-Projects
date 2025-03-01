function drawBall () {
  noStroke();
  fill(255, 0, 0);
  ellipse(x, y, radius, radius);
}

function drawPaddle () {
  noStroke();
  fill(0, 0, 255);
  rect(paddleX, width - paddleHeight * 2, paddleWidth, paddleHeight);
}

function drawBricks() {
  for (var i = 0; i < colCount; i++) {
    for (var j = 0; j < rowCount; j++) {
      var bx = i * (brickWidth + padding) + marginleft;
      var by = j * (brickHeight + padding) + margintop;
      fill(0, 255, 0);
      noStroke();
      rect(bx, by, brickWidth, brickHeight);
      if (x > bx && x < bx + brickWidth && y > by && y < by + brickHeight) {
          dy = -dy;
      }
    }
  } 
}
