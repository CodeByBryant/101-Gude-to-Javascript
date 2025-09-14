"use strict";

// Reflection API
const obj = {
  name: "John",
  age: 30,
};

// Property examination
console.log(Reflect.has(obj, "name")); // ✅ true
console.log(Reflect.get(obj, "age")); // ✅ 30
console.log(Reflect.ownKeys(obj)); // ✅ ['name', 'age']

// Property manipulation
Reflect.set(obj, "city", "New York"); // ✅ Adding new property
console.log(Reflect.get(obj, "city")); // ✅ 'New York'
Reflect.deleteProperty(obj, "city"); // ✅ Removing property
