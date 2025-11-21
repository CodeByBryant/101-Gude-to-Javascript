// Tip #17: Array.filter()
// Title: Filter Array Elements with filter()
//
// Explanation:
// Array.filter() creates a new array containing only elements that pass
// a test function (return true). The original array remains unchanged.
// It's perfect for removing unwanted elements or selecting specific items.
//
// Example:

"use strict";

const nums = [1, 2, 3, 4, 5];

// Keep only even numbers
const evens = nums.filter(n => n % 2 === 0);
console.log(evens); // Output: [2, 4]

// Original array is unchanged
console.log(nums); // Output: [1, 2, 3, 4, 5]

// Filter objects based on property
const users = [
  { name: "John", age: 25, active: true },
  { name: "Jane", age: 30, active: false },
  { name: "Bob", age: 35, active: true }
];

const activeUsers = users.filter(user => user.active);
console.log(activeUsers); 
// Output: [{ name: 'John', age: 25, active: true }, { name: 'Bob', age: 35, active: true }]

// Chain with other methods
const result = [1, 2, 3, 4, 5, 6]
  .filter(n => n > 2)       // Keep numbers > 2
  .filter(n => n % 2 === 0) // Keep only even numbers
  .map(n => n * 2);         // Double them
console.log(result); // Output: [8, 12]