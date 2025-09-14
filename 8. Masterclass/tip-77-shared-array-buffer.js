"use strict";

// SharedArrayBuffer
// Create a shared buffer
const buffer = new SharedArrayBuffer(4);
const view = new Int32Array(buffer);

// Worker thread code
// worker.js
/*
self.onmessage = function(e) {
    const view = new Int32Array(e.data);
    // Atomic operation
    Atomics.add(view, 0, 1);
    self.postMessage('Incremented');
};
*/

// Main thread
view[0] = 0;
// worker.postMessage(buffer);
console.log(view[0]); // ✅ Shared memory between threads

// Atomic operations ensure thread safety
Atomics.store(view, 0, 42);
console.log(Atomics.load(view, 0)); // ✅ 42
