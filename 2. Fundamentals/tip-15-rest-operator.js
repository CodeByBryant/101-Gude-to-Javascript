// Tip #15
// Title: Rest Operator
//
// Explanation:
// Use ... to collect multiple arguments into an array.
//
// Example:
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4)); // 10