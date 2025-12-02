// Tip #19: Array.find()
// Title: Find First Matching Element
//
// Explanation:
// Array.find() returns the FIRST element that passes a test function.
// If no element matches, it returns undefined. Use findIndex() if you
// need the index instead. This is more efficient than filter() when you
// only need one match since it stops searching after the first match.
//
// Example:

"use strict";

const arr = [{ id: 1, name: "John" }, { id: 2, name: "Jane" }];

// Find first object with id === 2
const result = arr.find(o => o.id === 2);
console.log(result); // Output: { id: 2, name: 'Jane' }

// Returns undefined if no match found
const notFound = arr.find(o => o.id === 999);
console.log(notFound); // Output: undefined

// Practical example: finding a user
const users = [
  { username: "john_doe", email: "john@example.com" },
  { username: "jane_smith", email: "jane@example.com" },
  { username: "bob_jones", email: "bob@example.com" }
];

const user = users.find(u => u.username === "jane_smith");
console.log(user); 
// Output: { username: 'jane_smith', email: 'jane@example.com' }

// Use with optional chaining for safe property access
const email = users.find(u => u.username === "missing_user")?.email;
console.log(email); // Output: undefined (safely handled)

// Compare with filter (which returns an array of ALL matches)
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.find(n => n > 2));   // Output: 3 (first match only)
console.log(numbers.filter(n => n > 2)); // Output: [3, 4, 5] (all matches)