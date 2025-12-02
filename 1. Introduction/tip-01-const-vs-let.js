// Tip #1: Const vs Let
// Title: Use const and let Instead of var
//
// Explanation:
// const and let are block-scoped and safer than var, which is function-scoped.
// Use const for values that won't be reassigned, and let for values that will change.
// This prevents accidental variable hoisting issues and makes code more predictable.
//
// Example:

"use strict";

// Use const for values that won't change
const pi = 3.14;

// Use let for values that will be reassigned
let count = 0;

// You can modify the value of let variables
count++;

console.log(pi, count); // Output: 3.14 1

// Note: Trying to reassign pi would cause an error
// pi = 3.15; // ❌ TypeError: Assignment to constant variable
