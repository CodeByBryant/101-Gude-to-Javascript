"use strict";

// Proxy validation example
const validator = {
  set: function (obj, prop, value) {
    if (prop === "age") {
      if (!Number.isInteger(value)) {
        throw new TypeError("Age must be an integer");
      }
      if (value < 0 || value > 120) {
        throw new RangeError("Age must be between 0 and 120");
      }
    }
    obj[prop] = value;
    return true;
  },
};

const person = new Proxy({}, validator);
person.age = 30; // ✅ Valid
// person.age = -1;  // ❌ RangeError
// person.age = 150; // ❌ RangeError
// person.age = 'young'; // ❌ TypeError
