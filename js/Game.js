/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
   constructor(missed, phrases, activePhrase){
     this.missed = 0;
     this.phrases = //array of five phrase objects
     this.activePhrase = null;
   }
   startGame() {
     //calls the getRandomPhrase() method, and sets the activePhrase property with the chosen phrase. It also adds that phrase to the board by calling the addPhraseToDisplay() method on the active Phrase object.
     document.getElementById('overlay').style.display = "none" //hides the start screen overlay
     console.log('new game started')
   }
   getRandomPhrase() {
     //this method randomly retrieves one of the phrases stored in the phrases array and returns it.
   }
   handleInteraction(){
     //It checks to see if the button clicked by the player matches a letter in the phrase, and then directs the game based on a correct or incorrect guess.
   }
   removeLife(){
   }
   checkForWin(){
   }
   gameOver(){
   }

 }
