/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
   constructor(missed, phrases, activePhrase){
     this.missed = 0;
     this.phrases = [
                   "A Lannister always pays his debts",
                    "Winter is coming",
                    "When you play the game of thrones you win or you die",
                    "You know nothing Jon Snow",
                    "The night is dark and full of terrors"
                  ];
     this.activePhrase = null;
   }
   startGame() {
     document.getElementById('overlay').style.display = "none" //hides the start screen overlay
     this.activePhrase = this.getRandomPhrase();
     this.activePhrase = new Phrase(this.activePhrase);
     console.log(this.activePhrase)
     this.activePhrase.addPhraseToDisplay();
   }
   getRandomPhrase() {
    const randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
    return randomPhrase;
   }
   handleInteraction(){
     //It checks to see if the button clicked by the player matches a letter in the phrase, and then directs the game based on a correct or incorrect guess.
     this.activePhrase.checkLetter(event.target.innerText)
     event.target.disabled = true;
   }
   removeLife(){
   }
   checkForWin(){
   }
   gameOver(){
   }

 }
