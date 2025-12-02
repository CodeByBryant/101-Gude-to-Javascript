// Tip #33: Object.freeze() and Object.seal()
// Title: Prevent Object Modification
//
// Explanation:
// Object.freeze() makes an object completely immutable - no properties can be
// added, removed, or modified (shallow freeze only).
// Object.seal() prevents adding/removing properties but allows modifying existing ones.
// Use freeze for constants, seal when you want fixed structure but mutable values.
// Both throw errors in strict mode when violated.
//
// Example:

"use strict";

// Object.freeze() - complete immutability
const frozen = Object.freeze({
  prop: 42,
  nested: { value: 10 },
});

// These operations fail in strict mode (throw TypeError)
try {
  frozen.prop = 100;      // Cannot modify
  frozen.newProp = 200;   // Cannot add
  delete frozen.prop;     // Cannot delete
} catch (e) {
  console.log("Cannot modify frozen object");
}

console.log(frozen.prop); // Output: 42 (unchanged)

// Note: freeze is shallow - nested objects can still be modified
frozen.nested.value = 20;
console.log(frozen.nested.value); // Output: 20 (nested object not frozen)

// Deep freeze function for complete immutability
function deepFreeze(obj) {
  Object.freeze(obj);
  Object.values(obj).forEach(value => {
    if (typeof value === "object" && value !== null) {
      deepFreeze(value);
    }
  });
  return obj;
}

// Object.seal() - allows modification but not addition/deletion
const sealed = Object.seal({
  prop: 42,
});

sealed.prop = 100; // ✅ Can modify existing properties
console.log(sealed.prop); // Output: 100

try {
  sealed.newProp = 200;   // ❌ Cannot add new properties
  delete sealed.prop;     // ❌ Cannot delete properties
} catch (e) {
  console.log("Cannot add/remove properties from sealed object");
}

// Check object state
console.log(Object.isFrozen(frozen)); // Output: true
console.log(Object.isSealed(sealed)); // Output: true

// Practical example: configuration object
const config = Object.freeze({
  API_URL: "https://api.example.com",
  TIMEOUT: 5000,
  MAX_RETRIES: 3
});
// Prevents accidental modification of config
