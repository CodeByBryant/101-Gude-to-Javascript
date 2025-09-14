"use strict";

// Top-level await
// Previously only allowed inside async functions
// Now allowed at module top level

// Waiting for resources
const response = await fetch("https://api.example.com/data");
const data = await response.json();

// Dynamic dependencies
const strings = await import(`./strings_${navigator.language}.js`);

// Resource initialization
const connection = await dbConnect();

// Export after async initialization
const instance = await initialization();
export { instance };
