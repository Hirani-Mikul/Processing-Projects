function pos () {
  // Position For Ball Moving Along The Canvas
  if (x > width - radius/2 || x < radius/2) {
    dx = -dx;
  }
  if (y > height - radius/2 || y < radius/2) {
    dy = -dy;
  } else if (y + dy > height - radius) {
    if (x > paddleX && x < paddleX + pWid) {
    dy = -dy; 
    } //else {
    //  lives--;
    //  if (!lives) {
    //    alert("GAME OVER!");
    //    document.location.reload();
    //    clearInterval(interval);
    //  }
    //}
  } 
  
  // Position Of Paddle Moving Along The Canvas
  if (paddleX + pWid > width) {
    paddleX = width - pWid;
  }
  if (paddleX  < 0) {
    paddleX = 0;
  }
}
