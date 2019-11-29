# js-4
 OOP Game Show App

CSS changes:
Shake Animation for the .wrong class
Transform(rotateX) & background-color change on the .show class
Changed background-color on the .main-container
Added box-shadow to .letter class
Added a border to .key class
Styled the #game-over-message


Challlenges:
The biggest challenge I faced while working on this project
was figuring out how to properly reset the game. Initially
I was adding listener click events inside the initial
click listener event that creates a new instance of new Game() which was causing the handleInteraction() to trigger multiple times with one
single click. I didn't know it was possible to create listener events for a certain element inside other listener events for that same element. (Event listener Inception). The fix was to listen for a key input (click and keyboard later on) outside of the startButton event.

Another issue that happens very rarely and I haven't figured out why is that sometimes when I lose a life it skips the heart meant to change sources/images. It's very rare and I can't seem to be able to recreate it. If you have any ideas as to the cause I'd really appreciate it :)
