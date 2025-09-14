"use strict";

// Partial application
function partial(fn, ...presetArgs) {
  return function partiallyApplied(...laterArgs) {
    return fn(...presetArgs, ...laterArgs);
  };
}

// Example usage
function greet(greeting, name) {
  return `${greeting}, ${name}!`;
}

const sayHello = partial(greet, "Hello");
const sayHi = partial(greet, "Hi");

console.log(sayHello("John")); // ✅ "Hello, John!"
console.log(sayHi("Jane")); // ✅ "Hi, Jane!"

// With more arguments
const add = (a, b, c) => a + b + c;
const add5and10 = partial(add, 5, 10);
console.log(add5and10(3)); // ✅ 18
