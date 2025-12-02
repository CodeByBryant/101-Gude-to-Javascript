// Tip #10: Array.map()
// Title: Transform Arrays with map()
//
// Explanation:
// Array.map() creates a new array by applying a function to each element
// of the original array. It's cleaner than traditional for loops for transformations
// and doesn't modify the original array. Use it whenever you need to convert data.
//
// Example:

"use strict";

const nums = [1, 2, 3];

// Transform each element using map
const doubled = nums.map(n => n * 2);
console.log(doubled); // Output: [2, 4, 6]

// Original array remains unchanged
console.log(nums); // Output: [1, 2, 3]

// More complex transformations
const people = [
  { firstName: "John", lastName: "Doe" },
  { firstName: "Jane", lastName: "Smith" }
];

// Extract and transform data
const fullNames = people.map(person => `${person.firstName} ${person.lastName}`);
console.log(fullNames); // Output: ["John Doe", "Jane Smith"]

// Chain with other array methods
const squares = [1, 2, 3, 4, 5]
  .filter(n => n > 2)         // Keep numbers > 2
  .map(n => n * n);           // Square them
console.log(squares); // Output: [9, 16, 25]
