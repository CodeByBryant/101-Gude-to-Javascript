"use strict";

// Array.flat() and Array.flatMap()
const nestedArray = [1, [2, 3], [4, [5, 6]]];

// Flattening nested arrays
console.log(nestedArray.flat()); // ✅ [1, 2, 3, 4, [5, 6]]
console.log(nestedArray.flat(2)); // ✅ [1, 2, 3, 4, 5, 6]

// Using flatMap
const numbers = [1, 2, 3];
console.log(numbers.flatMap((x) => [x, x * 2])); // ✅ [1, 2, 2, 4, 3, 6]
