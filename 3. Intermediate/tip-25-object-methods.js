// Tip #25: Object Methods
// Title: Extract Object Data with keys, values, entries
//
// Explanation:
// Object.keys() returns an array of an object's property names.
// Object.values() returns an array of property values.
// Object.entries() returns an array of [key, value] pairs.
// These methods make it easy to iterate over objects, transform them,
// or convert them to other data structures like Maps.
//
// Example:

"use strict";

const person = {
  name: "John",
  age: 30,
  city: "New York",
};

// Get all property names (keys)
console.log(Object.keys(person)); 
// Output: ['name', 'age', 'city']

// Get all property values
console.log(Object.values(person)); 
// Output: ['John', 30, 'New York']

// Get [key, value] pairs
console.log(Object.entries(person)); 
// Output: [['name', 'John'], ['age', 30], ['city', 'New York']]

// Iterate over object properties
Object.entries(person).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
// Output: name: John, age: 30, city: New York

// Filter object properties
const filtered = Object.fromEntries(
  Object.entries(person).filter(([key, value]) => typeof value === "string")
);
console.log(filtered); // Output: { name: 'John', city: 'New York' }

// Transform object values
const doubled = Object.fromEntries(
  Object.entries({ a: 1, b: 2, c: 3 }).map(([key, value]) => [key, value * 2])
);
console.log(doubled); // Output: { a: 2, b: 4, c: 6 }

// Convert object to Map
const personMap = new Map(Object.entries(person));
console.log(personMap.get("name")); // Output: John

// Count properties
console.log(`Object has ${Object.keys(person).length} properties`); 
// Output: Object has 3 properties
