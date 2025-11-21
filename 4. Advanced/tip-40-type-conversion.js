// Tip #40: Type Conversion
// Title: Convert Between Data Types
//
// Explanation:
// JavaScript performs implicit type conversion (coercion) in many situations,
// but explicit conversion is clearer and more predictable. Use Number(), String(),
// Boolean() constructors, or shorthand operators like +, !!, and template literals.
// parseInt/parseFloat extract numbers from strings. Be aware of edge cases!
//
// Example:

"use strict";

// String to Number
console.log(Number("42"));        // Output: 42
console.log(+"42");               // Output: 42 (unary plus operator)
console.log(parseInt("42px"));    // Output: 42 (stops at non-digit)
console.log(parseFloat("42.5"));  // Output: 42.5
console.log(Number("42.5"));      // Output: 42.5

// Edge cases for string to number
console.log(Number(""));          // Output: 0 (empty string becomes 0)
console.log(Number("  42  "));    // Output: 42 (trims whitespace)
console.log(Number("abc"));       // Output: NaN (invalid number)
console.log(parseInt("42", 10));  // Output: 42 (always specify radix!)

// Number to String
console.log(String(42));          // Output: '42'
console.log((42).toString());     // Output: '42'
console.log(42 + "");             // Output: '42' (concatenation coercion)
console.log(`${42}`);             // Output: '42' (template literal)

// Number formatting
console.log((42.5678).toFixed(2));      // Output: '42.57' (2 decimal places)
console.log((42.5).toPrecision(4));     // Output: '42.50' (4 significant digits)
console.log((1234567).toExponential()); // Output: '1.234567e+6'

// Boolean conversion
console.log(Boolean(1));          // Output: true
console.log(!!1);                 // Output: true (double negation)
console.log(!!"");                // Output: false
console.log(Boolean(0));          // Output: false
console.log(Boolean("false"));    // Output: true (non-empty string is truthy!)

// Array to String
console.log([1, 2, 3].toString());     // Output: '1,2,3'
console.log([1, 2, 3].join(" - "));    // Output: '1 - 2 - 3'
console.log(String([1, 2, 3]));        // Output: '1,2,3'

// Object to String
console.log(String({ a: 1 }));         // Output: '[object Object]'
console.log(JSON.stringify({ a: 1 })); // Output: '{"a":1}' (use this!)

// Practical example: safe number parsing
function safeParseInt(str, defaultValue = 0) {
  const num = parseInt(str, 10);
  return isNaN(num) ? defaultValue : num;
}
console.log(safeParseInt("42"));    // Output: 42
console.log(safeParseInt("abc"));   // Output: 0 (default)
console.log(safeParseInt("abc", -1)); // Output: -1 (custom default)

// Check for valid number
function isValidNumber(value) {
  return typeof value === "number" && !isNaN(value) && isFinite(value);
}
console.log(isValidNumber(42));       // Output: true
console.log(isValidNumber(NaN));      // Output: false
console.log(isValidNumber(Infinity)); // Output: false
