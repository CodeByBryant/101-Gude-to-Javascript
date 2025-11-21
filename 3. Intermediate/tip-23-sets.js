// Tip #23: Sets
// Title: Store Unique Values with Set
//
// Explanation:
// Set is a collection that stores unique values of any type. Duplicate values
// are automatically removed. Sets are useful for removing duplicates, checking
// membership, and performing set operations (union, intersection, difference).
// They offer O(1) lookups, making them faster than arrays for large datasets.
//
// Example:

"use strict";

// Create Set from array - duplicates are automatically removed
const uniqueNumbers = new Set([1, 1, 2, 2, 3, 3]);
console.log([...uniqueNumbers]); // Output: [1, 2, 3]

// Adding and removing elements
uniqueNumbers.add(4);
uniqueNumbers.delete(1);
console.log(uniqueNumbers.has(1)); // Output: false
console.log(uniqueNumbers.has(4)); // Output: true

// Set size property
console.log(uniqueNumbers.size); // Output: 3

// Iterating over Set
const colors = new Set(["red", "green", "blue"]);
for (const color of colors) {
  console.log(color); // Output: red, green, blue (in insertion order)
}

// Practical example: remove array duplicates
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 3, 3, 4])); // Output: [1, 2, 3, 4]

// Set operations
const setA = new Set([1, 2, 3]);
const setB = new Set([2, 3, 4]);

// Union
const union = new Set([...setA, ...setB]);
console.log([...union]); // Output: [1, 2, 3, 4]

// Intersection
const intersection = new Set([...setA].filter(x => setB.has(x)));
console.log([...intersection]); // Output: [2, 3]
