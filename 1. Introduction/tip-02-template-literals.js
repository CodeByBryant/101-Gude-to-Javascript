// Tip #2: Template Literals
// Title: Use Template Literals for String Interpolation
//
// Explanation:
// Template literals use backticks (`) instead of quotes and allow embedding
// expressions using ${expression} syntax. They're cleaner than string concatenation
// and support multi-line strings naturally.
//
// Example:

"use strict";

const name = "Bryant";
const age = 25;

// Clean string interpolation with template literals
console.log(`Hello, ${name}!`); // Output: Hello, Bryant!

// You can include multiple expressions and even calculations
console.log(`${name} is ${age} years old`); // Output: Bryant is 25 years old
console.log(`Next year, ${name} will be ${age + 1}`); // Output: Next year, Bryant will be 26

// Multi-line strings are easy with template literals
const message = `Hello ${name},
Welcome to JavaScript!
Have a great day!`;
console.log(message);
