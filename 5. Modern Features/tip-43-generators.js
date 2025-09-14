"use strict";

// Generator functions
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

// Using the generator
const gen = numberGenerator();
console.log(gen.next().value); // ✅ 1
console.log(gen.next().value); // ✅ 2
console.log(gen.next().value); // ✅ 3
console.log(gen.next().done); // ✅ true

// Infinite sequence generator
function* infiniteSequence() {
  let i = 0;
  while (true) {
    yield i++;
  }
}
