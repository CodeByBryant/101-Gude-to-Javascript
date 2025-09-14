"use strict";

// Promise.any
const promises = [
  fetch("https://api1.example.com"),
  fetch("https://api2.example.com"),
  fetch("https://api3.example.com"),
];

// Resolves when any promise succeeds
Promise.any(promises)
  .then((firstSuccess) => {
    console.log("First successful response:", firstSuccess);
  })
  .catch((error) => {
    // AggregateError if all promises reject
    console.log("All promises failed:", error.errors);
  });

// Difference from Promise.race
// Promise.race resolves/rejects with first settled promise
// Promise.any resolves with first fulfilled promise
