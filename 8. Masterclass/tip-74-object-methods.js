"use strict";

// Object methods
const obj = {
  name: "John",
  age: 30,
};

// Object.hasOwn - safer than hasOwnProperty
console.log(Object.hasOwn(obj, "name")); // ✅ true
console.log(Object.hasOwn(obj, "toString")); // ✅ false

// Object.entries with Object.fromEntries
const modified = Object.fromEntries(
  Object.entries(obj).map(([key, value]) => [
    key,
    typeof value === "number" ? value * 2 : value,
  ])
);
console.log(modified); // ✅ { name: 'John', age: 60 }
