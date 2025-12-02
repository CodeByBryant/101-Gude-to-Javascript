// Tip #13: Object Property Shorthand
// Title: Concise Object Property Syntax
//
// Explanation:
// When creating objects, if a property name matches a variable name,
// you can use shorthand syntax and omit the key. This makes object
// creation more concise and reduces redundancy in your code.
//
// Example:

"use strict";

const foo = "bar";
const baz = 42;

// Shorthand: property name same as variable name
const obj = { foo, baz };
console.log(obj); // Output: { foo: "bar", baz: 42 }

// Without shorthand (more verbose):
// const obj = { foo: foo, baz: baz };

// Practical example: creating user objects
const username = "john_doe";
const email = "john@example.com";
const age = 25;

const user = { username, email, age };
console.log(user); 
// Output: { username: 'john_doe', email: 'john@example.com', age: 25 }

// Mixing shorthand and regular properties
const id = 123;
const person = { 
  id,                    // Shorthand
  name: "Jane Smith",    // Regular property
  role: "developer"      // Regular property
};
console.log(person);