"use strict";

// Numeric separators
// Large numbers
const billion = 1_000_000_000;
const binary = 0b1010_0001;
const hex = 0xff_ff_ff;

console.log(billion); // ✅ 1000000000
console.log(binary); // ✅ 161
console.log(hex); // ✅ 16777215

// Decimal numbers
const amount = 1_234.56;
console.log(amount); // ✅ 1234.56

// Invalid usage
// const invalid = _100;     // ❌ Cannot start with _
// const invalid2 = 100_;    // ❌ Cannot end with _
// const invalid3 = 1__000;  // ❌ Cannot have multiple _
