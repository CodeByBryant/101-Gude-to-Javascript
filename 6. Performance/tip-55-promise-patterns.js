"use strict";

// Advanced Promise patterns
// Promise.race
const timeout = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

Promise.race([fetch("https://api.example.com/data"), timeout(5000)])
  .then((result) => {
    console.log("Completed within timeout");
  })
  .catch(() => {
    console.log("Operation timed out");
  });

// Promise.allSettled
const promises = [
  Promise.resolve(1),
  Promise.reject("error"),
  Promise.resolve(3),
];

Promise.allSettled(promises).then((results) => {
  results.forEach((result) => {
    if (result.status === "fulfilled") {
      console.log("Success:", result.value);
    } else {
      console.log("Error:", result.reason);
    }
  });
});
