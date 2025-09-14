"use strict";

// Error Cause
function readConfig(path) {
  try {
    // Attempt to read configuration
    throw new Error("Config file not found");
  } catch (error) {
    throw new Error("Failed to initialize app", {
      cause: error,
    });
  }
}

try {
  readConfig("./config.json");
} catch (error) {
  console.log(error.message); // ✅ 'Failed to initialize app'
  console.log(error.cause.message); // ✅ 'Config file not found'
}
