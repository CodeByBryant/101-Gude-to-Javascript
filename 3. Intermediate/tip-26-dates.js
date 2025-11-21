// Tip #26: Dates
// Title: Work with Dates and Times
//
// Explanation:
// The Date object provides methods for working with dates and times.
// You can create, format, compare, and manipulate dates. JavaScript dates
// are based on milliseconds since January 1, 1970 (Unix epoch). Use
// toLocaleDateString() and toLocaleTimeString() for locale-aware formatting.
//
// Example:

"use strict";

// Create dates
const now = new Date();                    // Current date and time
const specific = new Date("2025-01-01");   // Specific date
const withTime = new Date(2025, 0, 1, 12, 30, 0); // Year, month (0-indexed), day, hour, min, sec

console.log(now); // Output: Current date/time

// Date formatting
console.log(now.toLocaleDateString());     // Output: Local date format (e.g., 11/21/2025)
console.log(now.toLocaleTimeString());     // Output: Local time format (e.g., 8:54:30 PM)
console.log(now.toISOString());            // Output: ISO format (e.g., 2025-11-21T20:54:30.186Z)

// Extract date components
console.log(now.getFullYear());  // Output: 2025
console.log(now.getMonth());     // Output: 10 (0-11, so 10 = November)
console.log(now.getDate());      // Output: 21
console.log(now.getDay());       // Output: 5 (0-6, Sunday = 0)

// Date operations
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
console.log(tomorrow > now); // Output: true

// Calculate difference in days
const date1 = new Date("2025-01-01");
const date2 = new Date("2025-01-10");
const diffMs = date2 - date1;
const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
console.log(`Difference: ${diffDays} days`); // Output: Difference: 9 days

// Practical example: check if date is in the past
function isPast(date) {
  return date < new Date();
}
console.log(isPast(new Date("2024-01-01"))); // Output: true
