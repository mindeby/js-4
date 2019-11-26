/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

  const startButton= document.getElementById("btn__reset");
  const keyboardButtons= document.querySelectorAll(".key");

  startButton.addEventListener('click',  () => {
    const newGame = new Game();
    newGame.startGame();
    keyboardButtons.forEach(button => {
        button.addEventListener('click', (event) => {
          newGame.handleInteraction(event.target);
        })
    });
    document.addEventListener('keydown', (event) => {
      newGame.handleInteraction(event.key)
    })
  });
