// Tip #8: Optional Chaining
// Title: Safely Access Nested Properties with ?.
//
// Explanation:
// Optional chaining (?.) allows you to safely access nested object properties
// without having to check if each level exists. If any part is null or undefined,
// it returns undefined instead of throwing an error. This eliminates verbose null checks.
//
// Example:

"use strict";

const user = { profile: { email: "a@b.com" } };

// Safely access nested properties
console.log(user?.profile?.email);   // Output: "a@b.com"

// Returns undefined instead of throwing an error
console.log(user?.settings?.theme);  // Output: undefined

// Without optional chaining, this would throw an error:
// console.log(user.settings.theme); // ❌ TypeError: Cannot read property 'theme' of undefined

// Works with arrays and function calls too
const users = [{ name: "John" }];
console.log(users?.[0]?.name); // Output: "John"
console.log(users?.[5]?.name); // Output: undefined

// Call optional method
const obj = { method: () => "result" };
console.log(obj.method?.()); // Output: "result"
console.log(obj.nonexistent?.()); // Output: undefined
