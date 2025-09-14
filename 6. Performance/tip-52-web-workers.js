"use strict";

// Web Workers
// main.js
const workerCode = `
    self.onmessage = function(e) {
        // Heavy computation
        const result = e.data.num * e.data.num;
        self.postMessage({ result: result });
    }
`;

// Create Blob URL for worker
const blob = new Blob([workerCode], { type: "application/javascript" });
const workerURL = URL.createObjectURL(blob);

// Create and use worker
const worker = new Worker(workerURL);
worker.onmessage = function (e) {
  console.log("Result:", e.data.result); // ✅ Computed result
};

worker.postMessage({ num: 42 }); // Start computation
