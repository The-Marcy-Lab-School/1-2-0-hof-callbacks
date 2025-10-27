// TODO: Define your own method called "isOdd" and test it out!

const methods = {
  sayHi: () => {
    console.log("Hi");
  },
  greet: (name) => {
    console.log(`Hello ${name}`);
  },
  isEven: (number) => {
    return number % 2 === 0;
  }
};

methods.sayHi();                // Hi
methods.greet('Ada');           // Hello Ada
console.log(methods.isEven(4)); // true