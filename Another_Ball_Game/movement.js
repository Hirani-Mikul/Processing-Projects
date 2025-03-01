function ballMove () {
  if (x + dx > width - radius/2 || x + dx < radius/2) {
    dx = -dx;
  }
  if (y + dy < radius/2) {
    dy = -dy;
  } else if (y  > height - radius*2 ) {
    if (x + dx > paddleX && x + dx < paddleX + paddleWidth) {
      dy = -dy;
    }else {
      document.location.reload();
    }
  }
  x += dx;
  y += dy;
}
function paddleMove() {
  if (keyIsDown(37)) {
    paddleX -= 7;
    if (paddleX < 0) {
      paddleX = 0;
    }
  } else if (keyIsDown(39)) {
    paddleX += 7;
    if (paddleX > width - paddleWidth) {
      paddleX = width - paddleWidth;
    }
  }
}
//function collision () {
//  for (var i = 0; i < colCount; i++) {
//    for (var j = 0; j < rowCount; j++) {
      
//    }
  
//  }
//}
