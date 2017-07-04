
// globals
var colorArray = [];

// set variables
var red = document.getElementById('red');
var blue = document.getElementById('blue');
var green = document.getElementById('green');
var yellow = document.getElementById('yellow');

// set audio
var audio = {
redAudio: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
blueAudio: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
greenAudio: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
yellowAudio: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3'),
}

// gets a random color using Math.random and a list of possible colors
function randomColor() {
  colors = [red, blue, yellow, green];
  index = Math.floor(Math.random() * 5);

  return colors[index];
}

// button effects
function effects(buttons) {
  buttons.forEach(function(button) {
    // gets old color
    let color = button.style.backgroundColor;
    // change later
    button.style.backgroundColor = "white";
    // play audio
    let track = audio[button + 'Audio'];
    track.play();
    // change back
    setTimeout(function() {button.style.backgroundColor = color}, 1000);
  });
}

// check user input

// game loop
window.onload = function() {
  // new random button/color
  let next = randomColor();


}
