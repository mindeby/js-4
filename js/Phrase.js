/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 //Create the Phrase class in the Phrase.js file.

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }
  addPhraseToDisplay(){ //creates html elements for each letter
    const display = document.querySelector( "#phrase ul" )
    for (var i = 0; i < this.phrase.length; i++) {
      let li = document.createElement('LI')
      let letter = this.phrase.charAt(i);
      display.append(li)
      li.append(letter)
      if (letter !== " ") {
        li.classList.add('hide', 'letter', `${letter}`)
      } else {
        li.classList.add('space');
      }
    }
  }
  checkLetter(selectedLetter){ //checks to see if it matches the target of the click event
    const letters = [];
    for (var i = 0; i < this.phrase.length; i++) {
      letters.push(this.phrase.charAt(i));
    }
    const cleanLetters = letters //removing duplicates
      .filter((letter, index) => letters.indexOf(letter) === index)
    if (cleanLetters.indexOf(selectedLetter) !== -1) {
      this.showMatchedLetter(selectedLetter) //if there is a match showMatchedLetter()
    }
  }
  showMatchedLetter(letter){
    const matchedLetters = document.getElementsByClassName(`${letter}`); //get elements with the same class name as the matched letter
    for (var i = 0; i < matchedLetters.length; i++) {
      matchedLetters[i].classList.remove('hide'); //change the styling for each
      matchedLetters[i].classList.add('show');
    }
  }

}
