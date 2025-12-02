// Tip #30: Regular Expressions
// Title: Pattern Matching with Regex
//
// Explanation:
// Regular expressions (regex) are patterns used to match character combinations
// in strings. They're powerful for validation, searching, and text manipulation.
// Use test() to check if a pattern exists, match() to extract matches, and
// replace() for substitutions. Learn common patterns for emails, URLs, etc.
//
// Example:

"use strict";

const text = "Hello, my email is john@example.com";

// Define email regex pattern
const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;

// Test if pattern exists in string
console.log(emailRegex.test(text)); // Output: true

// Extract the match
const email = text.match(emailRegex)[0];
console.log(email); // Output: 'john@example.com'

// Common regex patterns
const phoneRegex = /\d{3}-\d{3}-\d{4}/;        // Format: 555-123-4567
const urlRegex = /https?:\/\/[^\s]+/;          // URLs
const dateRegex = /\d{4}-\d{2}-\d{2}/;         // Format: 2025-01-01

// Using flags (i = case insensitive, g = global, m = multiline)
const caseInsensitive = /hello/i;
console.log(caseInsensitive.test("HELLO")); // Output: true

// Extract all matches with global flag
const numbers = "Call 555-123-4567 or 555-987-6543";
const allPhones = numbers.match(/\d{3}-\d{3}-\d{4}/g);
console.log(allPhones); // Output: ['555-123-4567', '555-987-6543']

// Replace with regex
const masked = "My SSN is 123-45-6789".replace(/\d/g, "*");
console.log(masked); // Output: My SSN is ***-**-****

// Validation function
function isValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}
console.log(isValidEmail("test@example.com")); // Output: true
console.log(isValidEmail("invalid-email"));    // Output: false
