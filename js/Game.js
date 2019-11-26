/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
   constructor(missed, phrases, activePhrase){
     this.missed = 0;
     this.phrases = [
                    new Phrase ("A Lannister always pays his debts"),
                    new Phrase ("Winter is coming"),
                    new Phrase ("When you play the game of thrones you win or you die"),
                    new Phrase ("You know nothing Jon Snow"),
                    new Phrase ("The night is dark and full of terrors")
                  ];
     this.activePhrase = null;
   }
   startGame() {
     document.getElementById('overlay').style.display = "none" //hides the start screen overlay
     this.activePhrase = this.getRandomPhrase();
     this.activePhrase.addPhraseToDisplay();
   }
   getRandomPhrase() {
    const randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
    return randomPhrase;
   }
   handleInteraction(){
     if (this.activePhrase.checkLetter(event.target.innerText) || this.activePhrase.checkLetter(event.key)) {
       event.target.classList.add('chosen')
       console.log("nice!")
     } else {
       event.target.classList.add('wrong')
       this.removeLife();
     }
     event.target.disabled = true; //disables the selected key
     this.checkForWin()
   }
   removeLife(){
     const scoreboard = document.querySelectorAll( "#scoreboard ol li" )
     this.missed += 1
     for (var i = 0; i < scoreboard.length; i++) {
         scoreboard[this.missed-1].firstElementChild.setAttribute('src',"images/lostheart.png" )
     }
     if (this.missed === 5) {
       this.gameOver('lose');
       this.missed = 0;
     }
   }
   checkForWin(){
     const hiddenLetters = document.getElementsByClassName( "hide" );
     if (hiddenLetters.length === 0) {
       this.gameOver('win');
     }
   }
   gameOver(score){
     document.getElementById('overlay').style.display = "block"
     const overlay = document.getElementById('overlay')
     overlay.classList.remove('start')
     const message = document.getElementById('game-over-message')
     resetGame();
     if (score === 'win'){
      message.innerText = "🥳"
      overlay.classList.add('win')
     } else {
       message.innerText = "😩"
       overlay.classList.add('lose')
     }
   }
 }

function resetGame(){
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
}
