"use strict";

// Array sorting
const numbers = [23, 5, 100, 56, 9, 1, 2];
const words = ["banana", "apple", "Cherry", "date"];

// Basic sorting
console.log(numbers.sort()); // ❌ [1, 100, 2, 23, 5, 56, 9] (incorrect)

// Correct numeric sorting
console.log(numbers.sort((a, b) => a - b)); // ✅ [1, 2, 5, 9, 23, 56, 100]

// Case-insensitive string sorting
console.log(
  words.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
); // ✅ ['apple', 'banana', 'Cherry', 'date']
