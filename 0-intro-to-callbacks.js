// This higher-order function takes in callback and executes it.
const executeCallback = (callback) => {
  callback();
}

// Any simple function can be a callback.
const sayHello = () => console.log("hello world");

// We pass in the callback to the higher-order function
executeCallback(sayHello);
// hello world

// TODO: Create your own callback and pass it to executeCallback
