/*
Takes a function (it can't have any parameters)
Prints the function as a string
Invokes the function and prints the return value
*/
const logAndRun = (func) => {
  const funcStr = func.toString();
  console.log("Executing func: ", funcStr);

  const returned = func();
  console.log("Returned func value: ", returned);
};

// callbacks
const myName = 'ben';
const rollDie = () => {
  return Math.ceil(Math.random() * 6);
}
const sayHi = () => {
  console.log('hi')
};


/*
When providing a "callback" function as an argument,
remember to omit the (), just provide the function
itself, because the logAndRun function will invoke it.
*/
debugger;
logAndRun(rollDie);
logAndRun(sayHi);




/* Here is what the HOF is doing

// turn rollDie into a string
const funcStr = rollDie.toString();
console.log("Executing func: ", funcStr);

// invoke it
const returned = rollDie();
console.log("Returned func value: ", returned);

// turn sayHi into a string
const funcStr2 = sayHi.toString();
console.log("Executing func: ", funcStr2);

// invoke it
const returned2 = sayHi();
console.log("Returned func value: ", returned2);

*/