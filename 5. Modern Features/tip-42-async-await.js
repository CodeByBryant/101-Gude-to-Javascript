"use strict";

// Async/Await syntax
async function getData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data); // ✅ Processed after data is received
  } catch (error) {
    console.error("Error:", error);
  }
}

// Using with Promise.all
async function getAllData() {
  const [users, posts] = await Promise.all([
    fetch("https://api.example.com/users"),
    fetch("https://api.example.com/posts"),
  ]);
  // ✅ Both requests run in parallel
}
