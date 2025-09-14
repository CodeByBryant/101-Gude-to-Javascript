"use strict";

// Try-Catch error handling
try {
  // Attempting to access undefined property
  const obj = {};
  console.log(obj.nonexistent.property);
} catch (error) {
  console.log("An error occurred:", error.message); // ✅ Shows error message
} finally {
  console.log("This always runs"); // ✅ Executes regardless of error
}
