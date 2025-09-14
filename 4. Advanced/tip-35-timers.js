"use strict";

// Timer functions
// setTimeout
console.log("Starting");
setTimeout(() => {
  console.log("Executed after 2 seconds"); // ✅ Delayed execution
}, 2000);

// setInterval
let counter = 0;
const intervalId = setInterval(() => {
  counter++;
  console.log(`Counter: ${counter}`);
  if (counter >= 3) {
    clearInterval(intervalId); // ✅ Stop interval after 3 executions
  }
}, 1000);
