"use strict";

// Decorators (function decorators)
function measureTime(fn) {
  return function wrapped(...args) {
    const start = performance.now();
    const result = fn.apply(this, args);
    const end = performance.now();
    console.log(`${fn.name} took ${end - start}ms`);
    return result;
  };
}

function retry(maxAttempts) {
  return function (fn) {
    return async function wrapped(...args) {
      for (let i = 0; i < maxAttempts; i++) {
        try {
          return await fn.apply(this, args);
        } catch (error) {
          if (i === maxAttempts - 1) throw error;
          console.log(`Attempt ${i + 1} failed, retrying...`);
        }
      }
    };
  };
}

// Example usage
const slowFunction = measureTime(function slow() {
  // Simulated slow operation
  const start = Date.now();
  while (Date.now() - start < 1000) {} // Wait 1 second
  return "Done!";
});

slowFunction(); // ✅ Logs execution time
