// Tip #6: Arrow Functions
// Title: Use Arrow Functions for Concise Syntax
//
// Explanation:
// Arrow functions provide a shorter syntax for writing functions and have
// lexical 'this' binding (they don't create their own 'this' context).
// They're perfect for callbacks, array methods, and simple operations.
//
// Example:

"use strict";

const nums = [1, 2, 3];

// Arrow function with map - concise single-line syntax
const squared = nums.map(n => n * n);
console.log(squared); // Output: [1, 4, 9]

// Arrow function with explicit return for multi-line operations
const complexOperation = (x) => {
  const result = x * 2 + 1;
  return result;
};
console.log(complexOperation(5)); // Output: 11

// Traditional function vs arrow function comparison
const traditional = function(x) { return x + 1; };
const arrow = x => x + 1;
console.log(traditional(5), arrow(5)); // Output: 6 6
