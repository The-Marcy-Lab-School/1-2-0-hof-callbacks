const fruits = ['apples', 'bananas', 'cherries'];

// print every fruit and its position in the array!
fruits.forEach((input, i, arr) => {
  console.log(`${input}!!! at index ${i} in array [${arr}]`);
});

// Here we only use the value parameter
fruits.forEach((value) => {
  console.log(`${input}!!!`);
});


// revoke isAdmin status from all users
const users = [
  { id: 1, username: 'ben', isAdmin: false },
  { id: 2, username: 'maya', isAdmin: true },
  { id: 3, username: 'reuben', isAdmin: true },
  { id: 4, username: 'gonzalo', isAdmin: false },
];
users.forEach(user => {
  user.isAdmin = false
});

/* Challenge 1: Capitalize every user's username! */



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