/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

  const startButton= document.getElementById("btn__reset");
  const keyboardButtons= document.querySelectorAll(".key");

  function resetGame(){
    const scoreboard = document.querySelectorAll( "#scoreboard ol li" ) //hearts back to inital state
    for (var i = 0; i < scoreboard.length; i++) {
        scoreboard[i].firstElementChild.setAttribute('src',"images/liveheart.png" )
    }
    const keyboardButtons= document.querySelectorAll(".key"); //keys back to inital state
    keyboardButtons.forEach(button => {
        button.disabled = false
        button.classList.remove('wrong', 'chosen')
    });
  }

  startButton.addEventListener('click',  () => {
    resetGame();
    const newGame = new Game();
    newGame.startGame();
    keyboardButtons.forEach(button => {
        button.addEventListener('click', (event) => {
          newGame.handleInteraction(event.target);
        })
    });
    /*document.addEventListener('keydown', (event) => {
      newGame.handleInteraction(event.key)
    })*/
  });




  /*function resetGame(){
    overlay.classList.add('start')
    overlay.classList.remove('win', 'lose')
    document.querySelector( "#phrase ul" ).innerHTML = ""; //remove all children li's
    const keyboardButtons= document.querySelectorAll(".key"); //keys back to inital state
    keyboardButtons.forEach(button => {
        button.disabled = false
        button.classList.remove('wrong', 'chosen')
    });
    const scoreboard = document.querySelectorAll( "#scoreboard ol li" ) //hearts back to inital state
    for (var i = 0; i < scoreboard.length; i++) {
        scoreboard[i].firstElementChild.setAttribute('src',"images/liveheart.png" )
    }
  }*/
