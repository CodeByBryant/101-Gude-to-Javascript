// Tip #9: Nullish Coalescing
// Title: Use ?? to Handle Only null or undefined
//
// Explanation:
// The nullish coalescing operator (??) returns the right operand only when
// the left operand is null or undefined. Unlike ||, it treats 0, false, and ""
// as valid values. This is better for default values when falsy values like 0 are valid.
//
// Example:

"use strict";

// ?? only considers null and undefined as nullish
const count = 0;
console.log(count ?? 10); // Output: 0 (0 is not nullish)
console.log(undefined ?? 10); // Output: 10 (undefined is nullish)

// Compare with || operator
console.log(count || 10); // Output: 10 (|| treats 0 as falsy)
console.log(undefined || 10); // Output: 10

// Practical example: preserving falsy values
const settings = {
  volume: 0,        // 0 is a valid volume level
  darkMode: false,  // false is a valid preference
  username: null    // null needs a default
};

console.log(settings.volume ?? 50); // Output: 0 (preserves 0)
console.log(settings.darkMode ?? true); // Output: false (preserves false)
console.log(settings.username ?? "Guest"); // Output: "Guest" (replaces null)
