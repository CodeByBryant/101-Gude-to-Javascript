// Tip #7: Short-Circuit Evaluation
// Title: Use && and || for Conditional Logic
//
// Explanation:
// Short-circuit evaluation means that logical operators (|| and &&) stop evaluating
// as soon as the result is determined. || returns the first truthy value or the last value.
// && returns the first falsy value or the last value. This is useful for default values.
//
// Example:

"use strict";

// Using || for default values
const user = null;
const name = user || "Guest";
console.log(name); // Output: Guest

// && for conditional execution
const isLoggedIn = true;
isLoggedIn && console.log("User is logged in"); // Output: User is logged in

// Chaining with || to find first truthy value
const value = null || undefined || 0 || "default";
console.log(value); // Output: default

// Practical example: setting default options
function createConfig(options) {
  const config = {
    timeout: options && options.timeout || 3000,
    retries: options && options.retries || 3
  };
  return config;
}
console.log(createConfig()); // Output: { timeout: 3000, retries: 3 }
