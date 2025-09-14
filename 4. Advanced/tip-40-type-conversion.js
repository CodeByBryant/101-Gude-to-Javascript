"use strict";

// Type conversion techniques
// String to Number
console.log(Number("42")); // ✅ 42
console.log(+"42"); // ✅ 42
console.log(parseInt("42px")); // ✅ 42
console.log(parseFloat("42.5")); // ✅ 42.5

// Number to String
console.log(String(42)); // ✅ '42'
console.log((42).toString()); // ✅ '42'
console.log(`${42}`); // ✅ '42'

// Boolean conversion
console.log(Boolean(1)); // ✅ true
console.log(!!1); // ✅ true
console.log(!!""); // ✅ false
