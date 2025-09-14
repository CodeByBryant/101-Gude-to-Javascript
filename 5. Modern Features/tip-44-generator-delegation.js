"use strict";

// Generator delegation using yield*
function* gen1() {
  yield "a";
  yield "b";
}

function* gen2() {
  yield* gen1(); // Delegate to gen1
  yield "c";
  yield "d";
}

const generator = gen2();
for (const value of generator) {
  console.log(value); // ✅ 'a', 'b', 'c', 'd'
}
