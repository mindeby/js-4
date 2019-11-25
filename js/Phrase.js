/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 //Create the Phrase class in the Phrase.js file.

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }
  addPhraseToDisplay(phrase){
    const display = document.querySelector( "#phrase ul" )
    for (var i = 0; i < phrase.length; i++) {
      let li = document.createElement('LI')
      let letter = phrase.charAt(i);
      display.append(li)
      li.append(letter)
      if (letter !== " ") {
        li.classList.add('hide', 'letter', `${letter}`)
      } else {
        li.classList.add('space');
      }
    }
  }
  checkLetter(){
    // checks to see if the letter selected by the player matches a letter in the phrase.
  }
  showMatchedLetter(){
    // reveals the letter(s) on the board that matches the player's selection. To reveal the matching letter(s), select all of the letter DOM elements that have a CSS class name that matches the selected letter and replace each selected element's hide CSS class with the show CSS class.
  }

}


/*["A Lannister always pays his debts",
               "Winter is coming",
               "When you play the game of thrones you win or you die",
               "You know nothing Jon Snow",
               "The night is dark and full of terrors"];
*/
