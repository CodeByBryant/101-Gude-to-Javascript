"use strict";

// New String methods
const text = "   Hello World   ";

// replaceAll
console.log("hello,hello".replaceAll("hello", "hi")); // ✅ 'hi,hi'

// at() method (works with strings and arrays)
console.log("hello".at(1)); // ✅ 'e'
console.log("hello".at(-1)); // ✅ 'o'

// New trim methods
console.log(text.trimStart()); // ✅ 'Hello World   '
console.log(text.trimEnd()); // ✅ '   Hello World'

// String.prototype.matchAll
const str = "cat, bat, sat, fat";
const regex = /[bc]at/g;
for (const match of str.matchAll(regex)) {
  console.log(match); // ✅ Matches for 'cat' and 'bat'
}
