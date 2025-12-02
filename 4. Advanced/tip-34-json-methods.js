// Tip #34: JSON Methods
// Title: Serialize and Parse JSON Data
//
// Explanation:
// JSON.stringify() converts JavaScript objects to JSON strings for storage or transmission.
// JSON.parse() converts JSON strings back to JavaScript objects.
// Functions, undefined, and symbols are omitted during stringification.
// Use the replacer/reviver functions and space parameter for custom formatting.
//
// Example:

"use strict";

const person = {
  name: "John",
  age: 30,
  hobbies: ["reading", "music"],
  greet: function () {
    return `Hello, ${this.name}`;
  },
};

// Convert object to JSON string (functions are omitted)
const jsonString = JSON.stringify(person, null, 2);
console.log(jsonString);
// Output:
// {
//   "name": "John",
//   "age": 30,
//   "hobbies": ["reading", "music"]
// }

// Parse JSON string back to object
const parsed = JSON.parse(jsonString);
console.log(parsed.name); // Output: 'John'
console.log(parsed.greet); // Output: undefined (functions not serialized)

// Using replacer function to filter properties
const filtered = JSON.stringify(person, ["name", "age"]);
console.log(filtered); // Output: {"name":"John","age":30}

// Custom replacer function
const customJson = JSON.stringify(person, (key, value) => {
  if (typeof value === "number") return value * 2;
  return value;
});
console.log(customJson); // Output: age is doubled

// Reviver function during parsing
const jsonWithDate = '{"name":"John","createdAt":"2025-01-01T00:00:00.000Z"}';
const withDate = JSON.parse(jsonWithDate, (key, value) => {
  if (key === "createdAt") return new Date(value);
  return value;
});
console.log(withDate.createdAt instanceof Date); // Output: true

// Deep clone objects (simple objects only, no functions/dates)
const original = { a: 1, b: { c: 2 } };
const clone = JSON.parse(JSON.stringify(original));
clone.b.c = 3;
console.log(original.b.c); // Output: 2 (original unchanged)

// Error handling for invalid JSON
try {
  JSON.parse("invalid json");
} catch (error) {
  console.log("Invalid JSON:", error.message);
}
