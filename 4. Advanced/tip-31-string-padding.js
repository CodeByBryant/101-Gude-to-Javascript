// Tip #31: String Padding
// Title: Pad Strings with padStart() and padEnd()
//
// Explanation:
// padStart() adds characters to the beginning of a string until it reaches
// a specified length. padEnd() adds to the end. These methods are useful for
// formatting numbers, aligning text, masking sensitive data, and creating
// fixed-width strings for display or logging.
//
// Example:

"use strict";

const number = "42";

// Pad to 5 characters with zeros at the start
console.log(number.padStart(5, "0")); // Output: '00042'

// Pad to 5 characters with asterisks at the end
console.log(number.padEnd(5, "*"));   // Output: '42***'

// Practical example: masking credit card numbers
const creditCard = "1234567890123456";
const last4Digits = creditCard.slice(-4);
const masked = last4Digits.padStart(16, "*");
console.log(masked); // Output: '************3456'

// Formatting numbers with leading zeros
function formatId(id) {
  return String(id).padStart(8, "0");
}
console.log(formatId(42));    // Output: '00000042'
console.log(formatId(12345)); // Output: '00012345'

// Aligning text in columns
const items = [
  { name: "Apple", price: 1.50 },
  { name: "Banana", price: 0.75 },
  { name: "Orange", price: 2.00 }
];

console.log("Item".padEnd(15) + "Price");
items.forEach(item => {
  console.log(item.name.padEnd(15) + "$" + item.price.toFixed(2));
});
// Output:
// Item           Price
// Apple          $1.50
// Banana         $0.75
// Orange         $2.00

// If no padding character specified, space is used
console.log("hi".padStart(5));  // Output: '   hi'
console.log("hi".padEnd(5));    // Output: 'hi   '
