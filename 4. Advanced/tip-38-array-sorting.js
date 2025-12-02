// Tip #38: Array Sorting
// Title: Sort Arrays Correctly with Custom Comparators
//
// Explanation:
// Array.sort() modifies the array in-place and returns it. By default, it
// converts elements to strings and sorts lexicographically (alphabetically).
// For numeric sorting, use a compare function: (a, b) => a - b for ascending.
// For descending: (a, b) => b - a. Use localeCompare() for proper string sorting.
// WARNING: sort() mutates the original array!
//
// Example:

"use strict";

const numbers = [23, 5, 100, 56, 9, 1, 2];
const words = ["banana", "apple", "Cherry", "date"];

// Default sort (lexicographic) - INCORRECT for numbers!
console.log([...numbers].sort()); 
// Output: [1, 100, 2, 23, 5, 56, 9] (treats as strings!)

// Correct numeric sorting - ascending
console.log([...numbers].sort((a, b) => a - b)); 
// Output: [1, 2, 5, 9, 23, 56, 100]

// Numeric sorting - descending
console.log([...numbers].sort((a, b) => b - a)); 
// Output: [100, 56, 23, 9, 5, 2, 1]

// String sorting (case-sensitive by default)
console.log([...words].sort()); 
// Output: ['Cherry', 'apple', 'banana', 'date'] (uppercase first!)

// Case-insensitive string sorting
console.log([...words].sort((a, b) => 
  a.toLowerCase().localeCompare(b.toLowerCase())
)); 
// Output: ['apple', 'banana', 'Cherry', 'date']

// Sorting objects by property
const people = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Bob", age: 35 }
];

// Sort by age
const byAge = [...people].sort((a, b) => a.age - b.age);
console.log(byAge);
// Output: [{ name: 'Jane', age: 25 }, { name: 'John', age: 30 }, { name: 'Bob', age: 35 }]

// Sort by name
const byName = [...people].sort((a, b) => a.name.localeCompare(b.name));
console.log(byName);

// Practical example: multi-level sorting
const items = [
  { category: "fruit", name: "banana" },
  { category: "fruit", name: "apple" },
  { category: "vegetable", name: "carrot" }
];

items.sort((a, b) => {
  // First sort by category
  const catCompare = a.category.localeCompare(b.category);
  if (catCompare !== 0) return catCompare;
  // Then by name within same category
  return a.name.localeCompare(b.name);
});
console.log(items);
