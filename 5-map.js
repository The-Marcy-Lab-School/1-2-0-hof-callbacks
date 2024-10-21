const inchesArr = [70, 55, 62, 12, 36];
const feetAndInches = inchesArr.map(inches => {
  const feet = Math.floor(inches / 12);
  const remainingInches = inches % 12;
  return `${feet} feet ${remainingInches} inches`;
});

console.log(inchesArr);
console.log(feetAndInches);