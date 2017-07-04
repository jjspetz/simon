

window.onload = function() {
  // globals
  var colorArray = [];
  var userArray = [];
  var count = 0;
  var colors;

  // set variables
  var red = document.getElementById('red');
  var blue = document.getElementById('blue');
  var green = document.getElementById('green');
  var yellow = document.getElementById('yellow');
  var start = document.getElementById('start');
  var countDisplay = document.getElementById('countDisplay');

  // set audio
  var audio = {
  redAudio: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
  blueAudio: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
  greenAudio: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
  yellowAudio: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3'),
  }

  // listening for click events
  // red
  red.addEventListener('click', function() {
    userArray.push(red);
  });
  // blue
  blue.addEventListener('click', function() {
    userArray.push(blue);
  });
  // green
  green.addEventListener('click', function() {
    userArray.push(green);
  });
  // yellow
  yellow.addEventListener('click', function() {
    userArray.push(yellow);
  });
  // start
  start.addEventListener('click', function() {
    game();
  });

  // gets a random color using Math.random and a list of possible colors
  function randomColor() {
    colors = [red, blue, yellow, green];
    index = Math.floor(Math.random() * 4);

    return colors[index];
  }

  // button effects
  function effects(buttons) {
    buttons.forEach(function(button) {
      // gets old color
      let color = button.style.borderColor;
      // change later
      button.style.borderColor = "white";
      // play audio
      let track = audio[button.id + 'Audio'];
      track.play();
      // change back
      setTimeout(function() {button.style.borderColor = color}, 5000);
    });
  }

  // check user input
  function check() {
    return false;
  }

  // main game function
  function game() {
    // new random button/color
    let next = randomColor();
    // reset array to check against computer AI
    userArray = [];
    // sets count display
    countDisplay.innerHTML = count;

    colorArray.push(next);
    effects(colorArray);

    if (!check()) {
      effects(colorArray);
    }
    else if (count < 20) {
      count++;
      game();
    }
    else {
      console.log('game over');
    }
  }
}
