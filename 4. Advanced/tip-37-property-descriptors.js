// Tip #37: Property Descriptors
// Title: Control Object Property Behavior
//
// Explanation:
// Property descriptors define the attributes of object properties:
// - value: the property's value
// - writable: whether the value can be changed
// - enumerable: whether it shows up in loops/Object.keys()
// - configurable: whether descriptor can be changed or property deleted
// Use Object.defineProperty() to create properties with custom descriptors.
//
// Example:

"use strict";

const person = {};

// Define property with custom descriptor
Object.defineProperty(person, "name", {
  value: "John",
  writable: false,      // Cannot be changed
  enumerable: true,     // Shows up in loops
  configurable: false,  // Cannot be deleted or reconfigured
});

// Attempt to modify (throws error in strict mode)
try {
  person.name = "Jane";
} catch (e) {
  console.log("Cannot modify non-writable property");
}
console.log(person.name); // Output: 'John' (unchanged)

// Get property descriptor
const descriptor = Object.getOwnPropertyDescriptor(person, "name");
console.log(descriptor);
// Output: { value: 'John', writable: false, enumerable: true, configurable: false }

// Define multiple properties at once
const car = {};
Object.defineProperties(car, {
  brand: {
    value: "Toyota",
    writable: false,
    enumerable: true
  },
  year: {
    value: 2025,
    writable: true,
    enumerable: true
  },
  _internal: {
    value: "hidden",
    enumerable: false  // Won't show in Object.keys()
  }
});

console.log(Object.keys(car)); // Output: ['brand', 'year'] (_internal is hidden)

// Practical example: create read-only constant
function createConstant(obj, prop, value) {
  Object.defineProperty(obj, prop, {
    value: value,
    writable: false,
    configurable: false
  });
}

const config = {};
createConstant(config, "API_KEY", "secret123");
console.log(config.API_KEY); // Output: 'secret123'

// Getters and setters with descriptors
const user = {};
Object.defineProperty(user, "fullName", {
  get() {
    return `${this.firstName} ${this.lastName}`;
  },
  set(value) {
    [this.firstName, this.lastName] = value.split(" ");
  },
  enumerable: true
});

user.fullName = "John Doe";
console.log(user.fullName);    // Output: 'John Doe'
console.log(user.firstName);   // Output: 'John'
