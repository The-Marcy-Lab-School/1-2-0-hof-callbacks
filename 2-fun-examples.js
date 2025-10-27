// --------------------------
// Example 1: Create a "loading wheel" animation
// --------------------------

const chars = ["\\", "|", "/", "-"];
let i = 0;

// empty the console each time and print the next character in the sequence
const loopThroughChars = () => {
  console.clear()
  console.log(chars[i]);
  i++;
  if (i >= 4) i = 0;
};

// Try invoking this function with setInterval every 250ms (4x / second)

// --------------------------
// Example 2: Animate an alien that bounces across the screen
// --------------------------

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
  const terminalWidth = process.stdout.columns;
  if (str.length === terminalWidth || str.length === 2) {
    forward = !forward;
  }
};

// Try invoking this function with setInterval every 20ms (50x / second)
