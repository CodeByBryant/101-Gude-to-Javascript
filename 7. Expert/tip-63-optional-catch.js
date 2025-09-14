"use strict";

// Optional catch binding
// Old way
try {
  throw new Error("Oops!");
} catch (error) {
  // Error parameter required
  console.log("An error occurred");
}

// Modern way (when error object isn't needed)
try {
  throw new Error("Oops!");
} catch {
  // No binding needed
  console.log("An error occurred");
}

// Useful when you don't need error details
try {
  JSON.parse("invalid json");
} catch {
  console.log("Invalid JSON!");
}
