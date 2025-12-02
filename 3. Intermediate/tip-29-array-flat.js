// Tip #29: Array.flat() and flatMap()
// Title: Flatten Nested Arrays
//
// Explanation:
// Array.flat() flattens nested arrays up to a specified depth (default is 1).
// Array.flatMap() first maps each element using a function, then flattens
// the result by one level. It's equivalent to .map().flat() but more efficient.
// These methods are useful for working with nested data structures.
//
// Example:

"use strict";

const nestedArray = [1, [2, 3], [4, [5, 6]]];

// Flatten one level deep (default)
console.log(nestedArray.flat()); 
// Output: [1, 2, 3, 4, [5, 6]]

// Flatten two levels deep
console.log(nestedArray.flat(2)); 
// Output: [1, 2, 3, 4, 5, 6]

// Flatten all levels (use Infinity)
console.log(nestedArray.flat(Infinity)); 
// Output: [1, 2, 3, 4, 5, 6]

// Remove empty slots from array
const withHoles = [1, 2, , 4, 5];
console.log(withHoles.flat()); 
// Output: [1, 2, 4, 5] (empty slots removed)

// flatMap: map and flatten in one operation
const numbers = [1, 2, 3];
console.log(numbers.flatMap((x) => [x, x * 2])); 
// Output: [1, 2, 2, 4, 3, 6]

// Practical example: extracting nested data
const users = [
  { name: "John", hobbies: ["reading", "gaming"] },
  { name: "Jane", hobbies: ["cooking", "hiking"] }
];

// Get all hobbies in a single array
const allHobbies = users.flatMap(user => user.hobbies);
console.log(allHobbies); 
// Output: ['reading', 'gaming', 'cooking', 'hiking']

// Compare map().flat() vs flatMap()
const result1 = [1, 2, 3].map(x => [x, x * 2]).flat();    // Two operations
const result2 = [1, 2, 3].flatMap(x => [x, x * 2]);       // One operation (more efficient)
console.log(result1); // Output: [1, 2, 2, 4, 3, 6]
console.log(result2); // Output: [1, 2, 2, 4, 3, 6]
