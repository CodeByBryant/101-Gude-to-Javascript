"use strict";

// Memoization pattern
function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      console.log("Fetching from cache");
      return cache.get(key);
    }

    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

// Example usage
const expensiveOperation = memoize((n) => {
  console.log("Computing...");
  return n * n;
});

console.log(expensiveOperation(4)); // ✅ Computing... 16
console.log(expensiveOperation(4)); // ✅ From cache: 16
