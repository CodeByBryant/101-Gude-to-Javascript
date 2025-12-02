// Tip #15: Rest Operator
// Title: Collect Multiple Arguments with Rest Operator
//
// Explanation:
// The rest operator (...) collects multiple arguments or array elements into
// a single array. It's useful for functions with variable number of arguments,
// or for collecting remaining elements during destructuring.
//
// Example:

"use strict";

// Collect all function arguments into an array
function sum(...nums) {
  // nums is now an array containing all arguments
  return nums.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10
console.log(sum(5, 10)); // Output: 15

// Combine with regular parameters
function greet(greeting, ...names) {
  return `${greeting} ${names.join(", ")}!`;
}
console.log(greet("Hello", "John", "Jane", "Bob")); // Output: Hello John, Jane, Bob!

// Use in array destructuring to collect remaining elements
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first);  // Output: 1
console.log(second); // Output: 2
console.log(rest);   // Output: [3, 4, 5]

// Use in object destructuring
const { name, age, ...otherProps } = { name: "John", age: 25, city: "NYC", country: "USA" };
console.log(otherProps); // Output: { city: 'NYC', country: 'USA' }