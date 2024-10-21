const fruits = ['apples', 'bananas', 'cherries'];
const printLoudly = (input, index, arr) => {
  console.log(`${input}!!! at index ${index} in array [${arr}]`);
}
fruits.forEach(printLoudly);
fruits.forEach(value => console.log(value.toUpperCase()));


/* 
Implement your own forEach function that takes an array and a 
callback and invokes the callback on every value in the array. 
The callback should be invoked with 3 inputs for every value:
1. The current value
2. The current value's index in the source array
3. The source array itself

Nothing is returned.
*/

const forEach = (array, callback) => {
  // 1. Loop over the array
  // 2. For each value in the array, invoke callback with 3 inputs
};