"use strict";

// Event loop and microtasks
console.log("Script start"); // 1️⃣ First

setTimeout(() => {
  console.log("Timeout"); // 4️⃣ Fourth
}, 0);

Promise.resolve()
  .then(() => {
    console.log("Promise 1"); // 2️⃣ Second (microtask)
  })
  .then(() => {
    console.log("Promise 2"); // 3️⃣ Third (microtask)
  });

console.log("Script end"); // 1️⃣ First (with 'Script start')
