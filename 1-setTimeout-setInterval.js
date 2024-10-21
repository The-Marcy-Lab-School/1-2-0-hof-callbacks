const sayHi = () => {
  console.log('hi');
};

// we provide our function to setTimeout
// setTimeout will invoke this function after 2000ms (2 seconds)
// setTimeout(sayHi, 2000);


const chars = ["\\", "|", "/", "-"];
let x = 0;
const loopThroughChars = () => {
  console.clear()
  console.log(chars[x]);
  x++;
  x = x % chars.length;
  if (x >= 4) x = 0
};

// setInterval will invoke this function EVERY 200ms (5x / second)
// setInterval(loopThroughChars, 200);



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
setInterval(animateAlien, 20);
