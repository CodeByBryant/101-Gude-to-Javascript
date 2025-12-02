// Tip #4: Destructuring Assignment
// Title: Extract Object Properties with Destructuring
//
// Explanation:
// Destructuring allows you to extract multiple properties from an object
// in a single statement. This makes code more concise and readable compared
// to accessing properties one by one with dot notation.
//
// Example:

"use strict";

const person = { name: "John", age: 25, city: "New York" };

// Extract properties using destructuring
const { name, age } = person;

console.log(name, age); // Output: John 25

// You can also rename variables during destructuring
const { name: fullName, age: years } = person;
console.log(fullName, years); // Output: John 25

// Destructuring works with nested objects too
const user = { 
  id: 1, 
  profile: { username: "john_doe", email: "john@example.com" } 
};
const { profile: { username } } = user;
console.log(username); // Output: john_doe
