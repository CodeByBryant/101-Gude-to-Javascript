// Tip #11: Falsy vs Truthy Values
// Title: Understanding Truthy and Falsy Values
//
// Explanation:
// JavaScript automatically converts values to boolean in conditional contexts.
// Falsy values: false, 0, -0, 0n, '', null, undefined, NaN
// Everything else is truthy (including [], {}, "0", "false", etc.)
// Understanding this is crucial for conditional logic and default values.
//
// Example:

"use strict";

// All falsy values
const falsy = [false, 0, "", null, undefined, NaN];
console.log("Falsy values converted to boolean:");
falsy.forEach(v => console.log(Boolean(v))); // All output: false

// All truthy values (note: empty arrays and objects are truthy!)
const truthy = [true, 1, "text", [], {}, () => {}];
console.log("\nTruthy values converted to boolean:");
truthy.forEach(v => console.log(Boolean(v))); // All output: true

// Practical usage in conditionals
const emptyString = "";
if (!emptyString) {
  console.log("\nEmpty string is falsy"); // This executes
}

const emptyArray = [];
if (emptyArray) {
  console.log("Empty array is truthy"); // This executes (arrays are always truthy!)
}

// Common pattern: checking for existence
const value = null;
const result = value || "default";
console.log("\nUsing falsy for defaults:", result); // Output: default