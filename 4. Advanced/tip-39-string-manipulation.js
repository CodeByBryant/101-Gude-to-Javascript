"use strict";

// String manipulation methods
const text = "  Hello World!  ";

// Trimming
console.log(text.trim()); // ✅ 'Hello World!'
console.log(text.trimStart()); // ✅ 'Hello World!  '
console.log(text.trimEnd()); // ✅ '  Hello World!'

// Case conversion
console.log(text.toLowerCase()); // ✅ '  hello world!  '
console.log(text.toUpperCase()); // ✅ '  HELLO WORLD!  '

// Substring extraction
console.log(text.substring(2, 7)); // ✅ 'Hello'
console.log(text.slice(-7, -1)); // ✅ 'World!'
