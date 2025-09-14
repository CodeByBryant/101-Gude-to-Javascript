// Spread operator for cloning arrays

const arr = [1, 2, 3];
const copy = [...arr];

copy.push(4);

console.log(arr);  // [1, 2, 3]
console.log(copy); // [1, 2, 3, 4]
