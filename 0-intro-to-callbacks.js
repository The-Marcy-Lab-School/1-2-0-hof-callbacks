/*
Takes a function (it can't have any parameters)
Prints the function as a string
Invokes the function and prints the return value
*/
const logAndRun = (func) => {
  const funcStr = func.toString();
  console.log("Executing func: ", funcStr);

  const returned = func();
  console.log("Returned value: ", returned);
};

const rollDie = () => Math.ceil(Math.random() * 6);
const sayHi = () => {
  console.log('hi')
};

/*
When providing a "callback" function as an argument,
remember to omit the (), just provide the function 
itself, because the logAndRun function will invoke it.
*/
logAndRun(rollDie);
logAndRun(sayHi);
