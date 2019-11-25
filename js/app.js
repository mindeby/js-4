/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

  const startButton= document.getElementById("btn__reset");
  const keyboardButtons= document.querySelectorAll(".key.button");

  startButton.addEventListener('click',  () => {
    const newGame = new Game();
    newGame.startGame();
  });


keyboardButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      console.log(event.target)
    })
});
