"use strict";

// Working with Dates
const now = new Date();
const specific = new Date("2025-01-01");

// Date formatting
console.log(now.toLocaleDateString()); // ✅ Local date format
console.log(now.toLocaleTimeString()); // ✅ Local time format

// Date operations
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
console.log(tomorrow > now); // ✅ true
