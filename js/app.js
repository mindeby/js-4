/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const startButton = document.getElementById("btn__reset");
const keyboardButtons = document.querySelectorAll(".key");

function resetGame() {
  const scoreboard = document.querySelectorAll("#scoreboard ol li"); //hearts back to inital state
  for (var i = 0; i < scoreboard.length; i++) {
    scoreboard[i].firstElementChild.setAttribute("src", "images/liveheart.png");
  }
  const keyboardButtons = document.querySelectorAll(".key"); //keys back to inital state
  keyboardButtons.forEach(button => {
    button.disabled = false;
    button.classList.remove("wrong", "chosen");
  });
}

let currentGame;

startButton.addEventListener("click", () => {
  resetGame();
  let newGame = new Game();
  currentGame = newGame;
  currentGame.startGame();
});

document.addEventListener('keydown', (event) => {
  if (currentGame) {
    currentGame.handleInteraction(event.key)
  }
})

keyboardButtons.forEach(button => {
  button.addEventListener("click", event => {
    if (currentGame) {
      currentGame.handleInteraction(event.target);
    }
  });
});
