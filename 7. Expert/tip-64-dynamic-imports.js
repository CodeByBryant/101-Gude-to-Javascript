"use strict";

// Dynamic imports
async function loadModule() {
  try {
    // Load module dynamically
    const module = await import("./math.js");

    // Use the module
    console.log(module.add(2, 3)); // ✅ 5
    console.log(module.multiply(2, 3)); // ✅ 6
  } catch (error) {
    console.log("Module loading failed");
  }
}

// Conditional loading
const userPreference = "dark";
if (userPreference === "dark") {
  import("./darkTheme.js")
    .then((module) => module.apply())
    .catch((err) => console.log("Theme loading failed"));
}
