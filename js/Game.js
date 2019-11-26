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
     if (this.activePhrase.checkLetter(event.target.innerText)) {
       console.log("nice!")
     } else {
       event.target.classList.add('wrong')
       this.removeLife();
     }
     event.target.disabled = true; //disables the selected key
   }
   removeLife(){
     const scoreboard = document.querySelector( "#scoreboard ol" )
     this.missed += 1
     console.log(this.missed)
     console.log(scoreboard.firstElementChild)
     if (this.missed === 5) {
       this.gameOver();
     }
   }
   checkForWin(){
   }
   gameOver(){
     console.log('you lost')
   }

 }
