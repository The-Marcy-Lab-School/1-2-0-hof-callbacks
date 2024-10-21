const scores = [100, 85, 90, 70, 74];
const isPassing = (score) => {
  return score >= 75;
}
const passingScores = scores.filter(isPassing);
console.log(`There were ${passingScores.length} passing scores`);



const users = [
  { id: 1, username: 'ben', isAdmin: false },
  { id: 2, username: 'maya', isAdmin: true },
  { id: 3, username: 'reuben', isAdmin: true },
  { id: 4, username: 'gonzalo', isAdmin: false },
];
const admins = users.filter(user => user.isAdmin);
console.log(admins);