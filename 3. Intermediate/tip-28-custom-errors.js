"use strict";

// Custom Error types
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

try {
  throw new ValidationError("Invalid input");
} catch (error) {
  if (error instanceof ValidationError) {
    console.log("Validation error:", error.message); // ✅ Handles specific error type
  }
}
