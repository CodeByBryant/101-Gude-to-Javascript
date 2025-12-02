// Tip #39: String Manipulation
// Title: Advanced String Manipulation Methods
//
// Explanation:
// JavaScript provides many methods for string manipulation:
// - trim(), trimStart(), trimEnd() remove whitespace
// - toLowerCase(), toUpperCase() change case
// - substring(), slice() extract portions (slice supports negative indices)
// - replace(), replaceAll() substitute text
// - split(), join() convert between strings and arrays
// All string methods return new strings (strings are immutable).
//
// Example:

"use strict";

const text = "  Hello World!  ";

// Trimming whitespace
console.log(text.trim());       // Output: 'Hello World!'
console.log(text.trimStart());  // Output: 'Hello World!  '
console.log(text.trimEnd());    // Output: '  Hello World!'

// Case conversion
console.log(text.toLowerCase()); // Output: '  hello world!  '
console.log(text.toUpperCase()); // Output: '  HELLO WORLD!  '

// Substring extraction
console.log(text.substring(2, 7)); // Output: 'Hello' (positions 2-7, exclusive)
console.log(text.slice(2, 7));     // Output: 'Hello' (same as substring)
console.log(text.slice(-7, -1));   // Output: 'World!' (negative = from end)

// Replace methods
const sentence = "I love cats. Cats are great!";
console.log(sentence.replace("cats", "dogs")); 
// Output: 'I love dogs. Cats are great!' (only first match)

console.log(sentence.replaceAll("cats", "dogs")); 
// Output: 'I love dogs. dogs are great!' (case-sensitive)

console.log(sentence.replaceAll(/cats/gi, "dogs")); 
// Output: 'I love dogs. dogs are great!' (case-insensitive with regex)

// Split and join
const words = "apple,banana,orange".split(",");
console.log(words); // Output: ['apple', 'banana', 'orange']
console.log(words.join(" | ")); // Output: 'apple | banana | orange'

// Repeat strings
console.log("ha".repeat(3)); // Output: 'hahaha'

// Character access
console.log("hello".charAt(1));    // Output: 'e'
console.log("hello"[1]);           // Output: 'e' (bracket notation)

// Practical example: capitalize first letter
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
console.log(capitalize("hello WORLD")); // Output: 'Hello world'

// Practical example: slugify string
function slugify(str) {
  return str.toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
console.log(slugify("Hello World! 123")); // Output: 'hello-world-123'
