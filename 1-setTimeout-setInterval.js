const sayHi = () => {
  console.log('hi');
};

// we provide our function to setTimeout
// setTimeout will invoke this function after 2000ms (2 seconds)
// setTimeout(sayHi, 1000);




const chars = ["\\", "|", "/", "-"];
let i = 0;

// empty the console each time and print the next character in the sequence
const loopThroughChars = () => {
  console.clear()
  console.log(chars[i]);
  i++;
  if (i >= 4) i = 0;
};

// setInterval will invoke this function EVERY 200ms (5x / second)
// setInterval(loopThroughChars, 200);

// Why doesn't this work?
// setInterval(loopThroughChars(), 200);




let str = '👾';
let forward = true;

const animateAlien = () => {
  // console.clear();   // uncomment this for a single-row experience
  console.log(str);

  if (forward) {
    // add white space to the front
    str = ' ' + str;
  } else {
    // remove 1 white space from the front
    str = str.slice(1);
  }

  // Turn around when reaching either side of the terminal
  if (str.length === process.stdout.columns || str.length === 2) {
    forward = !forward;
  }
};

// setInterval will invoke this function EVERY 200ms (5x / second)
// setInterval(animateAlien, 20);
