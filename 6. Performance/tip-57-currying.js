"use strict";

// Currying
const curry = (fn) => {
  const arity = fn.length;

  return function curried(...args) {
    if (args.length >= arity) {
      return fn(...args);
    }

    return (...moreArgs) => curried(...args, ...moreArgs);
  };
};

// Example usage
const multiply = (a, b, c) => a * b * c;
const curriedMultiply = curry(multiply);

console.log(curriedMultiply(2)(3)(4)); // ✅ 24
console.log(curriedMultiply(2, 3)(4)); // ✅ 24
console.log(curriedMultiply(2)(3, 4)); // ✅ 24
console.log(curriedMultiply(2, 3, 4)); // ✅ 24
