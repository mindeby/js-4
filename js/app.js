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

let game = new Game();

startButton.addEventListener("click", () => {
  resetGame();
  game.startGame();
});

document.addEventListener('keydown', (event) => {
  game.handleInteraction(event.key)
})

keyboardButtons.forEach(button => {
  button.addEventListener("click", event => {
    console.log("Gonna handle this…")
    game.handleInteraction(event.target);
  });
});
