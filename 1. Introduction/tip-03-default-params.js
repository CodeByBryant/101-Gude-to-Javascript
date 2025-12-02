// Tip #3: Default Parameters
// Title: Set Default Function Parameter Values
//
// Explanation:
// Default parameters allow you to specify fallback values for function parameters.
// If an argument is not provided or is undefined, the default value is used.
// This eliminates the need for manual undefined checks inside the function.
//
// Example:

"use strict";

// Function with default parameter value
function greet(name = "stranger") {
  return `Hello, ${name}`;
}

// When no argument is provided, the default value is used
console.log(greet()); // Output: Hello, stranger

// When an argument is provided, it overrides the default
console.log(greet("Bryant")); // Output: Hello, Bryant

// You can use default parameters with multiple arguments
function createUser(username = "anonymous", role = "user") {
  return { username, role };
}

console.log(createUser()); // Output: { username: 'anonymous', role: 'user' }
console.log(createUser("John")); // Output: { username: 'John', role: 'user' }
