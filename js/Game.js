/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor(missed, phrases, activePhrase) {
    this.missed = 0;
    this.phrases = [
      new Phrase("A Lannister always pays his debts"),
      new Phrase("Winter is coming"),
      new Phrase("When you play the game of thrones you win or you die"),
      new Phrase("You know nothing Jon Snow"),
      new Phrase("The night is dark and full of terrors")
    ];
    this.activePhrase = null;
  }

  startGame() {
    console.log(`🆕Starting a new game:`);
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
    if (this.activePhrase.checkLetter(event.target.innerText)) {
      console.log(`⭐️Right letter`);
      event.target.classList.add("chosen");
    } else {
      console.log(`🛑Wrong letter`);
      event.target.classList.add("wrong");
      this.removeLife();
    }
    event.target.disabled = true; // disables the selected key
    this.checkForWin();
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
    console.log(`💔You missed ${this.missed}/5`);
  }

  checkForWin() {
    let hiddenLetters = document.getElementsByClassName("hide");
    if (hiddenLetters.length === 0) {
      this.gameOver("win");
    } else if (this.missed === 5) {
      this.gameOver("lose");
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
      message.innerText = "🥳";
      overlay.classList.add("win");
    } else if (score === "lose") {
      message.innerText = "😩";
      overlay.classList.add("lose");
    }
  }
}
