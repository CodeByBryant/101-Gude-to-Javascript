// Tip #41: Promises
// Title: Handle Asynchronous Operations with Promises
//
// Explanation:
// Promises represent eventual completion (or failure) of an asynchronous operation.
// They have three states: pending, fulfilled, or rejected. Use .then() for success,
// .catch() for errors, and .finally() for cleanup. Promises are chainable and
// provide better error handling than callbacks, avoiding "callback hell".
//
// Example:

"use strict";

// Create a Promise that simulates async data fetching
const fetchData = () => {
  return new Promise((resolve, reject) => {
    // Simulate async operation with setTimeout
    setTimeout(() => {
      const success = true;
      
      if (success) {
        resolve("Data fetched successfully");
      } else {
        reject("Error fetching data");
      }
    }, 1000);
  });
};

// Use the Promise with .then() and .catch()
fetchData()
  .then((data) => {
    console.log(data); // Output: 'Data fetched successfully'
    return data.length; // Chain another operation
  })
  .then((length) => {
    console.log(`Data length: ${length}`);
  })
  .catch((error) => {
    console.log("Error:", error); // Handles any errors in the chain
  })
  .finally(() => {
    console.log("Operation complete"); // Always executes
  });

// Promise.all - wait for all promises
const promise1 = Promise.resolve(3);
const promise2 = Promise.resolve(42);
const promise3 = new Promise((resolve) => setTimeout(() => resolve('foo'), 100));

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log("All resolved:", values); // Output: [3, 42, 'foo']
  });

// Promise.race - first promise to settle wins
Promise.race([
  new Promise((resolve) => setTimeout(() => resolve('slow'), 500)),
  new Promise((resolve) => setTimeout(() => resolve('fast'), 100))
])
  .then((value) => {
    console.log("Winner:", value); // Output: 'fast'
  });

// Creating already resolved/rejected promises
const resolved = Promise.resolve("Immediate value");
const rejected = Promise.reject("Immediate error");

resolved.then(console.log); // Output: 'Immediate value'
rejected.catch(console.log); // Output: 'Immediate error'
