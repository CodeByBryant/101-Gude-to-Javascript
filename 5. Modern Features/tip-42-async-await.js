// Tip #42: Async/Await
// Title: Write Asynchronous Code with Async/Await
//
// Explanation:
// Async/await is syntactic sugar over Promises, making asynchronous code look
// and behave more like synchronous code. Functions marked 'async' automatically
// return Promises. The 'await' keyword pauses execution until a Promise resolves.
// Always use try-catch for error handling with async/await.
//
// Example:

"use strict";

// Async function (automatically returns a Promise)
async function getData() {
  try {
    // Simulate API call (would fail in Node without fetch)
    // const response = await fetch("https://api.example.com/data");
    // const data = await response.json();
    
    // Simulated async operation for demo
    const data = await Promise.resolve({ message: "Data loaded" });
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error; // Re-throw to let caller handle
  }
}

// Execute async function
getData().then(result => console.log("Success:", result));

// Using with Promise.all for parallel execution
async function getAllData() {
  try {
    // Run multiple promises in parallel
    const [result1, result2] = await Promise.all([
      Promise.resolve({ type: "users", count: 10 }),
      Promise.resolve({ type: "posts", count: 50 })
    ]);
    
    console.log("Users:", result1);
    console.log("Posts:", result2);
    return [result1, result2];
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
}

getAllData();

// Practical example: sequential vs parallel async operations
async function sequentialExample() {
  console.log("Sequential start");
  const start = Date.now();
  
  // These run one after another (slower)
  const a = await Promise.resolve("A");
  const b = await Promise.resolve("B");
  
  console.log(`Sequential: ${a}, ${b} took ${Date.now() - start}ms`);
}

async function parallelExample() {
  console.log("Parallel start");
  const start = Date.now();
  
  // These run simultaneously (faster)
  const [a, b] = await Promise.all([
    Promise.resolve("A"),
    Promise.resolve("B")
  ]);
  
  console.log(`Parallel: ${a}, ${b} took ${Date.now() - start}ms`);
}

sequentialExample();
parallelExample();
