"use strict";

// Array.from() utility
// Converting array-like objects
const arrayFromString = Array.from("hello");
console.log(arrayFromString); // ✅ ['h', 'e', 'l', 'l', 'o']

// Using mapping function
const numbers = Array.from([1, 2, 3], (x) => x * 2);
console.log(numbers); // ✅ [2, 4, 6]

// Creating arrays with specific length
const zeros = Array.from({ length: 5 }, () => 0);
console.log(zeros); // ✅ [0, 0, 0, 0, 0]
