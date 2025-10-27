// --------------------------
// Example 1: A "normal" function that takes in a string as an argument.
// --------------------------

const greet = (name) => {
  console.log(`Hello ${name}`);
}

greet('Ada');


// --------------------------
// Example 2: Higher-order functions that take in a callback function and a number as arguments.
// --------------------------

// Example 2a: setInterval
const tick = () => {
  console.log("Tick");
}
setInterval(tick, 1000);

// Example 2b: setTimeout
setTimeout(() => {
  console.log("10 seconds have passed");
}, 10000);



