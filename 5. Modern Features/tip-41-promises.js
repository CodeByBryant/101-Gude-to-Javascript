"use strict";

// Basic Promise usage
const fetchData = () => {
  return new Promise((resolve, reject) => {
    // Simulating async operation
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("Data fetched successfully");
      } else {
        reject("Error fetching data");
      }
    }, 1000);
  });
};

fetchData()
  .then((data) => console.log(data)) // ✅ 'Data fetched successfully'
  .catch((error) => console.log(error)); // Handles any errors
