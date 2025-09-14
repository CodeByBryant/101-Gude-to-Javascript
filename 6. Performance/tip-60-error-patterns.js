"use strict";

// Advanced Error Handling Patterns
// Custom error hierarchy
class ApplicationError extends Error {
  constructor(message, status) {
    super(message);
    this.name = "ApplicationError";
    this.status = status;
  }
}

class ValidationError extends ApplicationError {
  constructor(message) {
    super(message, 400);
    this.name = "ValidationError";
  }
}

class AuthorizationError extends ApplicationError {
  constructor(message) {
    super(message, 403);
    this.name = "AuthorizationError";
  }
}

// Error handling
try {
  throw new ValidationError("Invalid input");
} catch (error) {
  if (error instanceof ValidationError) {
    console.log("Validation failed:", error.message);
  } else if (error instanceof AuthorizationError) {
    console.log("Authorization failed:", error.message);
  } else {
    console.log("Unknown error:", error);
  }
}
