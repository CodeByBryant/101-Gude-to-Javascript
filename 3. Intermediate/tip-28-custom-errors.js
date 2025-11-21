// Tip #28: Custom Errors
// Title: Create Custom Error Classes
//
// Explanation:
// Custom error classes extend the built-in Error class to create specific
// error types for your application. This allows for better error handling,
// where you can catch and handle different error types differently. Always
// set the name property to identify your custom error type.
//
// Example:

"use strict";

// Define custom error class
class ValidationError extends Error {
  constructor(message) {
    super(message);                    // Call parent constructor
    this.name = "ValidationError";     // Set error name
  }
}

// Another custom error with additional properties
class DatabaseError extends Error {
  constructor(message, code) {
    super(message);
    this.name = "DatabaseError";
    this.code = code;                  // Custom property
  }
}

// Using custom errors
try {
  throw new ValidationError("Invalid input");
} catch (error) {
  if (error instanceof ValidationError) {
    console.log("Validation error:", error.message); 
    // Output: Validation error: Invalid input
  }
}

// Practical example: form validation
function validateEmail(email) {
  if (!email) {
    throw new ValidationError("Email is required");
  }
  if (!email.includes("@")) {
    throw new ValidationError("Email must contain @");
  }
  return true;
}

try {
  validateEmail("invalid-email");
} catch (error) {
  if (error instanceof ValidationError) {
    console.log("Validation failed:", error.message);
    // Output: Validation failed: Email must contain @
  }
}

// Handling multiple error types
try {
  throw new DatabaseError("Connection failed", "DB_001");
} catch (error) {
  if (error instanceof ValidationError) {
    console.log("Please check your input");
  } else if (error instanceof DatabaseError) {
    console.log(`Database error (${error.code}): ${error.message}`);
    // Output: Database error (DB_001): Connection failed
  } else {
    console.log("Unknown error:", error);
  }
}
