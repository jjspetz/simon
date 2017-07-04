
// globals
var colorArray = [];

// set variables
var red = document.getElementById('red');
var blue = document.getElementById('blue');
var green = document.getElementById('green');
var yellow = document.getElementById('yellow');

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
    // change back
    setTimeout(function() {button.style.backgroundColor = color}, 1000);
  });
}

// game loop
window.onload = function() {
  // new random button/color
  let next = randomColor();


}
