
// gets a random color using Math.random and a list of possible colors
function randomColor() {
  colors = ["red", "blue", "yellow", "green"];
  index = Math.floor(Math.random() * 5);

  return colors[index];
}
