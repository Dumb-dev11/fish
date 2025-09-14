let highScore = localStorage.getItem("highScore") || 0;
document.getElementById("highScoreBoard").textContent = "High Score: " + highScore;

function updateScore() {
  score++;
  scoreBoard.textContent = "Score: " + score;

  if (score > highScore) {
    highScore = score;
    localStorage.setItem("highScore", highScore);
    document.getElementById("highScoreBoard").textContent = "High Score: " + highScore;
  }

  speedMultiplier++;
  speed += 1.5;
  speedBoard.textContent = "Speed: x" + speedMultiplier;
}
