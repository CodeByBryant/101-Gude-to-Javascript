"use strict";

// Object methods: Object.keys(), Object.values(), Object.entries()
const person = {
  name: "John",
  age: 30,
  city: "New York",
};

console.log(Object.keys(person)); // ✅ ['name', 'age', 'city']
console.log(Object.values(person)); // ✅ ['John', 30, 'New York']
console.log(Object.entries(person)); // ✅ [['name','John'], ['age',30], ['city','New York']]
