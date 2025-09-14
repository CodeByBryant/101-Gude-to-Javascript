"use strict";

// Set data structure for unique values
const uniqueNumbers = new Set([1, 1, 2, 2, 3, 3]);
console.log([...uniqueNumbers]); // ✅ [1, 2, 3]

// Adding and removing elements
uniqueNumbers.add(4);
uniqueNumbers.delete(1);
console.log(uniqueNumbers.has(1)); // ❌ false
