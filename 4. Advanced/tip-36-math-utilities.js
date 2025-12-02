// Tip #36: Math Utilities
// Title: Mathematical Operations with Math Object
//
// Explanation:
// The Math object provides mathematical constants and functions for
// rounding, random numbers, trigonometry, and more. All methods are static.
// Common uses: rounding decimals, generating random numbers, finding min/max,
// calculating powers, square roots, and trigonometric operations.
//
// Example:

"use strict";

// Rounding methods
console.log(Math.round(4.6));  // Output: 5 (rounds to nearest integer)
console.log(Math.floor(4.6));  // Output: 4 (rounds down)
console.log(Math.ceil(4.2));   // Output: 5 (rounds up)
console.log(Math.trunc(4.9));  // Output: 4 (removes decimal part)

// Random numbers
console.log(Math.random()); // Output: Random number between 0 (inclusive) and 1 (exclusive)

// Generate random integer in range [min, max]
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomInt(1, 10)); // Output: Random integer between 1 and 10

// Min and Max
console.log(Math.min(2, 5, 1, 8));  // Output: 1
console.log(Math.max(2, 5, 1, 8));  // Output: 8

// Find min/max in array
const numbers = [2, 5, 1, 8, 3];
console.log(Math.min(...numbers)); // Output: 1
console.log(Math.max(...numbers)); // Output: 8

// Powers and roots
console.log(Math.pow(2, 3));   // Output: 8 (2^3)
console.log(2 ** 3);           // Output: 8 (exponentiation operator)
console.log(Math.sqrt(16));    // Output: 4
console.log(Math.cbrt(27));    // Output: 3 (cube root)

// Absolute value and sign
console.log(Math.abs(-5));     // Output: 5
console.log(Math.sign(-5));    // Output: -1 (returns -1, 0, or 1)

// Constants
console.log(Math.PI);          // Output: 3.141592653589793
console.log(Math.E);           // Output: 2.718281828459045

// Practical example: calculate distance between two points
function distance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}
console.log(distance(0, 0, 3, 4)); // Output: 5
