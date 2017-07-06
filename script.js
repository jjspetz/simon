

window.onload = function() {
  // globals
  var colorArray = [];
  var userArray = [];
  var colors, count;
  var colorDict = {
    darkyellow: '#b38f00',
    lightred: '...'
  }

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
    audio[this.id + 'Audio'].play();
    userArray.push(red);
  });
  // blue
  blue.addEventListener('click', function() {
    audio[this.id + 'Audio'].play();
    userArray.push(blue);
  });
  // green
  green.addEventListener('click', function() {
    audio[this.id + 'Audio'].play();
    userArray.push(green);
  });
  // yellow
  yellow.addEventListener('click', function() {
    audio[this.id + 'Audio'].play();
    userArray.push(yellow);
  });
  // start
  start.addEventListener('click', function() {
    // reset globals
    colorArray = [];
    userArray = [];
    count = 0;
    // run game
    count++;
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

      buttons.forEach(function(button, index) {
        setTimeout(() => {
        // change later
        button.style.backgroundColor = "white";
        // play audio
        let track = audio[button.id + 'Audio'];
        track.play();
        let last = buttons[index-1] || undefined;
        if (last)
          last.style.backgroundColor = last.id;

      }, 1000 * index);
      });

  }

  // check user input
  function check() {
    count++;
    pushCount = 0;
    userArray = [];
    let c = 0;

    let loop = setInterval (function() {
      c++;
      console.log('listen ' + c);
      console.log(colorArray);
      console.log(userArray);
      if (userArray.length==colorArray.length && userArray.every((v,i)=> v === colorArray[i])) {
        console.log('returned true');
        clearInterval(loop);
        return game();
      }
      if (userArray.length > colorArray.length) {
        clearInterval(loop);
      }
    },1000)

    if (!loop) {
      return 'game over!';
    }


    // console.log('returned false');
    // return false;
  }

  // main game function
  function game(next=true) {
    // checks if the game should advance to next round
    if (next) {
      // new random button/color
      let next = randomColor();
      // sets count display
      countDisplay.innerHTML = count;

      colorArray.push(next);
    }
    // delayed so there is time between users last push and start of new loop
    setTimeout(function() {effects(colorArray)}, 1000);

    check();

    // else if (count < 5) {
    //   count++;
    //   game();
    // }
    // else {
    //   console.log('game over');
    // }
  }
}
