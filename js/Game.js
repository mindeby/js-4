/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor(missed, phrases, activePhrase) {
    this.missed = 0;
    this.phrases = [
      new Phrase("A Lannister always pays his debts"),
      new Phrase("Winter is coming"),
      new Phrase("You know nothing Jon Snow"),
      new Phrase("The things I do for love"),
      new Phrase("Hold the door")
    ];
    this.activePhrase = null;
  }

  startGame() {
    document.getElementById("overlay").style.display = "none"; // hides the start screen overlay
    document.getElementById("overlay").classList.add("start");
    document.getElementById("overlay").classList.remove("lose", "win");
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  getRandomPhrase() {
    const randomPhrase = this.phrases[
      Math.floor(Math.random() * this.phrases.length)
    ];
    return randomPhrase;
  }

  handleInteraction() {
    let eventType = event.type;
    if (eventType === 'click') { //if user clicked on a letter
      if (this.activePhrase.checkLetter(event.target.innerText)){
        event.target.classList.add("chosen");
        this.checkForWin();
      } else {
        event.target.classList.add("wrong");
        this.removeLife();
      }
      event.target.disabled = true;
    } else if (eventType === 'keydown') { //if user pressed key on keyboard
      if (this.activePhrase.checkLetter(event.key)) {
        keyboardButtons.forEach(button => {
          if (button.innerText === event.key && !button.classList.contains("chosen")){
            button.classList.add("chosen")
          }
        });
        this.checkForWin();
      } else {
        keyboardButtons.forEach(button => {
          if (button.innerText === event.key && !button.classList.contains("wrong")){
            button.classList.add("wrong")
            this.removeLife();
          }
        });
      }
    }
  }

  removeLife() {
    let scoreboard = document.querySelectorAll("#scoreboard ol li");
    this.missed += 1;
    for (var i = 0; i < scoreboard.length; i++) {
      scoreboard[5 - this.missed].firstElementChild.setAttribute(
        "src",
        "images/lostheart.png"
      );
    }
    if (this.missed === 5) {
      this.gameOver("lose");
    }
  }

  checkForWin() {
    let hiddenLetters = document.getElementsByClassName("hide");
    if (hiddenLetters.length === 0) {
      this.gameOver("win");
    }
  }

  gameOver(score) {
    const overlay = document.getElementById("overlay");
    overlay.classList.remove("win", "lose");
    overlay.style.display = "block";
    overlay.classList.remove("start");
    const message = document.getElementById("game-over-message");
    this.missed = 0;
    if (score === "win") {
      message.innerText = "You did great! 🥳";
      overlay.classList.add("win");
    } else if (score === "lose") {
      message.innerText = "Better luck next time 😩";
      overlay.classList.add("lose");
    }
  }
}
