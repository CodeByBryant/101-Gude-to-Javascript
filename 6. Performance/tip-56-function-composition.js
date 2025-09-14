"use strict";

// Function composition
const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((y, f) => f(y), x);
const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((y, f) => f(y), x);

// Example functions
const addOne = (x) => x + 1;
const double = (x) => x * 2;
const square = (x) => x * x;

// Using compose (right to left)
const composedFn = compose(square, double, addOne);
console.log(composedFn(3)); // ✅ 64 ((3 + 1) * 2)² = 64

// Using pipe (left to right)
const pipedFn = pipe(addOne, double, square);
console.log(pipedFn(3)); // ✅ 64 (same result, more readable order)
