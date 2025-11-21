// Tip #24: Maps
// Title: Key-Value Storage with Map
//
// Explanation:
// Map is a collection of key-value pairs where keys can be ANY type (objects,
// functions, primitives). Unlike objects, Maps maintain insertion order, have
// a size property, and are optimized for frequent additions/deletions. Use Map
// when you need non-string keys or when key-value pairs are frequently added/removed.
//
// Example:

"use strict";

// Create a Map and set key-value pairs
const userRoles = new Map();

userRoles.set("john", "admin");
userRoles.set("jane", "user");

// Get values and check membership
console.log(userRoles.get("john")); // Output: 'admin'
console.log(userRoles.has("jane")); // Output: true

// Map size
console.log(userRoles.size); // Output: 2

// Iterating over Map (maintains insertion order)
for (const [user, role] of userRoles) {
  console.log(`${user} is a ${role}`); 
  // Output: john is a admin, jane is a user
}

// Keys can be any type (not just strings!)
const objectMap = new Map();
const keyObj = { id: 1 };
const keyFunc = function() {};
const keyNum = 42;

objectMap.set(keyObj, "value for object");
objectMap.set(keyFunc, "value for function");
objectMap.set(keyNum, "value for number");

console.log(objectMap.get(keyObj)); // Output: value for object

// Initialize Map from array of [key, value] pairs
const settings = new Map([
  ["theme", "dark"],
  ["language", "en"],
  ["notifications", true]
]);
console.log(settings.get("theme")); // Output: dark

// Convert Map to array
console.log([...settings.entries()]); 
// Output: [['theme', 'dark'], ['language', 'en'], ['notifications', true]]
