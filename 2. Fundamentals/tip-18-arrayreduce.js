// Tip #18: Array.reduce()
// Title: Reduce Arrays to Single Values
//
// Explanation:
// Array.reduce() executes a reducer function on each element, accumulating
// results into a single output value. It's powerful for summing, counting,
// transforming arrays to objects, flattening, and many other operations.
//
// Example:

"use strict";

const nums = [1, 2, 3, 4];

// Sum all numbers (accumulator starts at 0)
const total = nums.reduce((sum, n) => sum + n, 0);
console.log(total); // Output: 10

// Find maximum value
const max = nums.reduce((maxVal, n) => n > maxVal ? n : maxVal, nums[0]);
console.log(max); // Output: 4

// Transform array to object (counting occurrences)
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(count); 
// Output: { apple: 3, banana: 2, orange: 1 }

// Flatten nested arrays
const nested = [[1, 2], [3, 4], [5]];
const flat = nested.reduce((acc, arr) => acc.concat(arr), []);
console.log(flat); // Output: [1, 2, 3, 4, 5]

// Group objects by property
const people = [
  { name: "John", role: "dev" },
  { name: "Jane", role: "designer" },
  { name: "Bob", role: "dev" }
];
const byRole = people.reduce((acc, person) => {
  if (!acc[person.role]) acc[person.role] = [];
  acc[person.role].push(person.name);
  return acc;
}, {});
console.log(byRole); 
// Output: { dev: ['John', 'Bob'], designer: ['Jane'] }