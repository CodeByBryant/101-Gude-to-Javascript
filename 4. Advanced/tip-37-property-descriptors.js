"use strict";

// Object property descriptors
const person = {};

Object.defineProperty(person, "name", {
  value: "John",
  writable: false, // Cannot be changed
  enumerable: true, // Shows up in loops
  configurable: false, // Cannot be deleted or reconfigured
});

person.name = "Jane"; // ❌ Fails silently in non-strict mode
console.log(person.name); // ✅ Still 'John'

// Getting property descriptor
console.log(Object.getOwnPropertyDescriptor(person, "name"));
// ✅ Shows all property attributes
