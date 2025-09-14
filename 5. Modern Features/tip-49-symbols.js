"use strict";

// Symbol type
const symbolKey = Symbol("description");
const obj = {
  [symbolKey]: "This is a symbol property",
};

// Symbols are always unique
const symbol1 = Symbol("key");
const symbol2 = Symbol("key");
console.log(symbol1 === symbol2); // ✅ false

// Well-known symbols
const iterable = {
  [Symbol.iterator]: function* () {
    yield 1;
    yield 2;
  },
};

for (const value of iterable) {
  console.log(value); // ✅ 1, 2
}
