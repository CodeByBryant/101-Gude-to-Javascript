// Tip #27: Error Handling
// Title: Handle Errors with try-catch-finally
//
// Explanation:
// try-catch-finally blocks handle runtime errors gracefully. Code in the try
// block is executed, and if an error occurs, control passes to the catch block.
// The finally block always executes, regardless of whether an error occurred.
// This prevents crashes and allows for cleanup operations.
//
// Example:

"use strict";

// Basic error handling
try {
  // Attempting to access property of undefined
  const obj = {};
  console.log(obj.nonexistent.property);
} catch (error) {
  // Catches the error and handles it gracefully
  console.log("An error occurred:", error.message); 
  // Output: An error occurred: Cannot read properties of undefined
} finally {
  // This always runs, regardless of error
  console.log("This always runs"); // Output: This always runs
}

// Practical example: parsing JSON
function parseJSON(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.log("Invalid JSON:", error.message);
    return null; // Return default value on error
  }
}

console.log(parseJSON('{"name": "John"}')); // Output: { name: 'John' }
console.log(parseJSON('invalid json'));     // Output: Invalid JSON: ..., then null

// Throwing custom errors
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}

try {
  console.log(divide(10, 2)); // Output: 5
  console.log(divide(10, 0)); // Throws error
} catch (error) {
  console.log("Error:", error.message); // Output: Error: Division by zero is not allowed
}

// Finally for cleanup (e.g., closing connections)
let resource = null;
try {
  resource = "database connection";
  // ... do operations
  throw new Error("Something went wrong");
} catch (error) {
  console.log("Caught:", error.message);
} finally {
  // Cleanup happens regardless of error
  if (resource) {
    console.log("Closing resource");
    resource = null;
  }
}
