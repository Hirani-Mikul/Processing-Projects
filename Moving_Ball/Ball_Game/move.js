var dx = 5;
var dy = 5;
function move () {
  // Ball Moving
  x += dx;
  y += dy;
  
  // Moving Paddle On X-Axis
  if (keyIsDown(37)) {
    paddleX -= 7;
  } else if (keyIsDown(39)) {
    paddleX += 7;
  }
}
