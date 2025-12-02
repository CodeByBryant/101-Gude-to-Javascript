// Tip #35: Timers
// Title: Schedule Code Execution with Timers
//
// Explanation:
// setTimeout() executes a function once after a specified delay (in milliseconds).
// setInterval() repeatedly executes a function at specified intervals.
// Both return IDs that can be used with clearTimeout/clearInterval to cancel.
// Timers are asynchronous and don't block code execution.
//
// Example:

"use strict";

// setTimeout - execute once after delay
console.log("Starting");
const timeoutId = setTimeout(() => {
  console.log("Executed after 2 seconds");
}, 2000);

// Can cancel timeout before it executes
// clearTimeout(timeoutId);

// setInterval - execute repeatedly at intervals
let counter = 0;
const intervalId = setInterval(() => {
  counter++;
  console.log(`Counter: ${counter}`);
  
  // Stop interval after 3 executions
  if (counter >= 3) {
    clearInterval(intervalId);
    console.log("Interval stopped");
  }
}, 1000);

// Practical example: debounce function
function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

// Usage: prevent excessive function calls
const expensiveOperation = debounce(() => {
  console.log("Expensive operation executed");
}, 500);

// Recursive setTimeout pattern (preferred over setInterval for control)
function recursiveTimer(count = 0) {
  console.log(`Recursive timer: ${count}`);
  if (count < 3) {
    setTimeout(() => recursiveTimer(count + 1), 1000);
  }
}
// recursiveTimer();
