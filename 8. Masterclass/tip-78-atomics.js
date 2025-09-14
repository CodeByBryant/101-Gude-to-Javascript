"use strict";

// Atomics API
const buffer = new SharedArrayBuffer(4);
const view = new Int32Array(buffer);

// Atomic operations
Atomics.store(view, 0, 10); // Store value
console.log(Atomics.load(view, 0)); // ✅ 10

// Add and return old value
console.log(Atomics.add(view, 0, 5)); // ✅ 10
console.log(view[0]); // ✅ 15

// Compare and exchange
const success = Atomics.compareExchange(view, 0, 15, 20);
console.log(success); // ✅ 15 (old value)
console.log(view[0]); // ✅ 20 (new value)
