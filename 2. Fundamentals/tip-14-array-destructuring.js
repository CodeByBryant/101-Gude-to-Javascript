// Tip #14: Array Destructuring
// Title: Extract Array Values with Destructuring
//
// Explanation:
// Array destructuring allows you to unpack values from arrays into separate
// variables in a single statement. You can also skip elements, use default values,
// and swap variables easily without temporary variables.
//
// Example:

"use strict";

const arr = ["red", "green", "blue"];

// Extract first two elements into variables
const [first, second] = arr;
console.log(first, second); // Output: red green

// Skip elements using commas
const [primary, , tertiary] = arr;
console.log(primary, tertiary); // Output: red blue

// Use with default values
const [a, b, c, d = "yellow"] = arr;
console.log(d); // Output: yellow (default because array has no 4th element)

// Swap variables without a temporary variable
let x = 1, y = 2;
[x, y] = [y, x];
console.log(x, y); // Output: 2 1

// Extract from function return values
function getCoordinates() {
  return [10, 20];
}
const [xCoord, yCoord] = getCoordinates();
console.log(xCoord, yCoord); // Output: 10 20