"use strict";

// Memory management and garbage collection
let array = new Array(1000000); // Allocate large array

// Freeing memory explicitly
array = null; // Original array can be garbage collected

// Memory-efficient array manipulation
const numbers = [1, 2, 3, 4, 5];
// Instead of creating new array:
// const doubled = numbers.map(x => x * 2);
// Modify in place:
for (let i = 0; i < numbers.length; i++) {
  numbers[i] *= 2;
}

// Using WeakMap for cache
const cache = new WeakMap();
let obj = { key: "value" };
cache.set(obj, "cached data");
// When obj is no longer referenced, cache entry is automatically cleaned
