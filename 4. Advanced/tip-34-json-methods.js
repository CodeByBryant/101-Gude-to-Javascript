"use strict";

// JSON methods
const person = {
  name: "John",
  age: 30,
  hobbies: ["reading", "music"],
  toString: function () {
    return this.name;
  },
};

// Converting to JSON string
const jsonString = JSON.stringify(person, null, 2);
console.log(jsonString);
// ✅ {
//      "name": "John",
//      "age": 30,
//      "hobbies": ["reading", "music"]
//    }

// Parsing JSON string back to object
const parsed = JSON.parse(jsonString);
console.log(parsed.name); // ✅ 'John'
