// Tip #21: Array.includes()
// Title: Check Array Membership with includes()
//
// Explanation:
// Array.includes() checks if an array contains a specific element and returns
// a boolean. It's simpler and more readable than indexOf() !== -1. It also
// correctly handles NaN values, which indexOf() doesn't.
//
// Example:

"use strict";

const fruits = ["apple", "banana", "orange"];

// Check if array contains specific elements
console.log(fruits.includes("banana")); // Output: true
console.log(fruits.includes("grape"));  // Output: false

// Works from a specific index (optional second parameter)
console.log(fruits.includes("apple", 1)); // Output: false (starts checking from index 1)

// Handles NaN correctly (unlike indexOf)
const values = [1, 2, NaN, 4];
console.log(values.includes(NaN)); // Output: true
console.log(values.indexOf(NaN) !== -1); // Output: false (indexOf can't find NaN)

// Practical example: validation
const allowedRoles = ["admin", "user", "moderator"];
const userRole = "admin";

if (allowedRoles.includes(userRole)) {
  console.log("Access granted"); // Output: Access granted
} else {
  console.log("Access denied");
}
