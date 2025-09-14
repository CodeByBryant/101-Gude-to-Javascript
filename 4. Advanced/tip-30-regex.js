"use strict";

// Regular Expressions
const text = "Hello, my email is john@example.com";
const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;

// Testing for match
console.log(emailRegex.test(text)); // ✅ true

// Extracting matches
const email = text.match(emailRegex)[0];
console.log(email); // ✅ 'john@example.com'
