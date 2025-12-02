// Tip #32: Array.from()
// Title: Create Arrays from Iterables and Array-like Objects
//
// Explanation:
// Array.from() creates a new array from an array-like or iterable object.
// It can convert strings, Sets, Maps, NodeLists, and arguments objects to arrays.
// It also accepts a map function as second parameter to transform elements
// during creation. Useful for creating number ranges, converting data structures.
//
// Example:

"use strict";

// Convert string to array of characters
const arrayFromString = Array.from("hello");
console.log(arrayFromString); // Output: ['h', 'e', 'l', 'l', 'o']

// Using mapping function during creation
const numbers = Array.from([1, 2, 3], (x) => x * 2);
console.log(numbers); // Output: [2, 4, 6]

// Create arrays with specific length
const zeros = Array.from({ length: 5 }, () => 0);
console.log(zeros); // Output: [0, 0, 0, 0, 0]

// Create a range of numbers
const range = Array.from({ length: 5 }, (_, i) => i + 1);
console.log(range); // Output: [1, 2, 3, 4, 5]

// Convert Set to Array
const set = new Set([1, 2, 3]);
const arrayFromSet = Array.from(set);
console.log(arrayFromSet); // Output: [1, 2, 3]

// Convert Map to Array of entries
const map = new Map([["a", 1], ["b", 2]]);
const arrayFromMap = Array.from(map);
console.log(arrayFromMap); // Output: [['a', 1], ['b', 2]]

// Practical example: creating multiplication table
function multiplicationTable(n) {
  return Array.from({ length: n }, (_, i) => 
    Array.from({ length: n }, (_, j) => (i + 1) * (j + 1))
  );
}
console.log(multiplicationTable(3));
// Output: [[1,2,3], [2,4,6], [3,6,9]]

// Remove duplicates from array
const duplicates = [1, 2, 2, 3, 3, 3];
const unique = Array.from(new Set(duplicates));
console.log(unique); // Output: [1, 2, 3]
