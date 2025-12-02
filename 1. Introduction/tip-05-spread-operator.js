// Tip #5: Spread Operator
// Title: Clone and Merge Arrays/Objects with Spread
//
// Explanation:
// The spread operator (...) expands an array or object into its individual elements.
// It's useful for creating shallow copies, merging arrays/objects, and passing
// array elements as function arguments. This prevents accidental mutation of original data.
//
// Example:

"use strict";

// Clone an array using spread operator
const arr = [1, 2, 3];
const copy = [...arr];

// Modifying the copy doesn't affect the original
copy.push(4);

console.log(arr);  // Output: [1, 2, 3]
console.log(copy); // Output: [1, 2, 3, 4]

// Merge multiple arrays
const arr1 = [1, 2];
const arr2 = [3, 4];
const merged = [...arr1, ...arr2];
console.log(merged); // Output: [1, 2, 3, 4]

// Clone and merge objects
const obj1 = { name: "John" };
const obj2 = { age: 25 };
const person = { ...obj1, ...obj2 };
console.log(person); // Output: { name: 'John', age: 25 }
