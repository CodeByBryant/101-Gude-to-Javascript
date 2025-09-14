// Tip #20
// Title: Array.some() and Array.every()
//
// Explanation:
// some() checks if at least one element passes the test. every() checks if all do.
//
// Example:
const nums = [2, 4, 6, 8];
console.log(nums.some(n => n > 5));   // true
console.log(nums.every(n => n % 2 === 0)); // true