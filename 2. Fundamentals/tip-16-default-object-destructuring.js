// Tip #16: Default Object Destructuring
// Title: Set Default Values in Object Destructuring
//
// Explanation:
// When destructuring objects, you can provide default values for properties
// that might be missing or undefined. This prevents having to check for
// undefined values later and makes your code more robust.
//
// Example:

"use strict";

const settings = { theme: "dark" };

// Destructure with default value for missing property
const { theme, fontSize = 16 } = settings;
console.log(theme);    // Output: dark (exists in settings)
console.log(fontSize); // Output: 16 (default value used)

// Multiple defaults
const config = { host: "localhost" };
const { 
  host, 
  port = 3000, 
  timeout = 5000,
  debug = false 
} = config;

console.log(host);    // Output: localhost
console.log(port);    // Output: 3000 (default)
console.log(timeout); // Output: 5000 (default)
console.log(debug);   // Output: false (default)

// Combining with renaming
const data = { x: 10 };
const { x: xValue, y: yValue = 20 } = data;
console.log(xValue); // Output: 10
console.log(yValue); // Output: 20 (default)