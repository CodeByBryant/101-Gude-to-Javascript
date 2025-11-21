// Tip #20: Array.some() and Array.every()
// Title: Test Array Elements with some() and every()
//
// Explanation:
// some() returns true if AT LEAST ONE element passes the test function.
// every() returns true only if ALL elements pass the test function.
// Both stop iterating early when the result is determined (short-circuit).
// These are useful for validation and conditional logic.
//
// Example:

"use strict";

const nums = [2, 4, 6, 8];

// Check if at least one number is greater than 5
console.log(nums.some(n => n > 5));   // Output: true (6 and 8 are > 5)

// Check if all numbers are even
console.log(nums.every(n => n % 2 === 0)); // Output: true (all are even)

// More examples
const mixed = [1, 2, 3, 4, 5];
console.log(mixed.some(n => n > 10));  // Output: false (no number > 10)
console.log(mixed.every(n => n > 0));  // Output: true (all are positive)

// Practical example: validation
const users = [
  { name: "John", age: 25, verified: true },
  { name: "Jane", age: 30, verified: true },
  { name: "Bob", age: 20, verified: false }
];

// Check if any user is unverified
const hasUnverified = users.some(user => !user.verified);
console.log("Has unverified users:", hasUnverified); // Output: true

// Check if all users are adults (18+)
const allAdults = users.every(user => user.age >= 18);
console.log("All users are adults:", allAdults); // Output: true

// Empty array edge cases
console.log([].some(n => n > 0));  // Output: false (no elements to check)
console.log([].every(n => n > 0)); // Output: true (vacuous truth: no elements violate condition)