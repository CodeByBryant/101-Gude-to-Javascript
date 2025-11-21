// Tip #0: Strict Mode
// Title: Enable Strict Mode for Safer Code
//
// Explanation:
// Strict mode helps catch common coding mistakes and prevents the use of
// unsafe features. It's enabled by adding "use strict" at the top of a file
// or function. This prevents undeclared variables and other error-prone patterns.
//
// Example:

"use strict";

// Attempting to use an undeclared variable will throw an error
// Uncomment the line below to see the error:
// x = 3.14; // ❌ ReferenceError: x is not defined

// In non-strict mode, this would create a global variable
console.log("Strict mode is enabled ✅");
