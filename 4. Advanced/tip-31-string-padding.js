"use strict";

// String padding methods
const number = "42";
console.log(number.padStart(5, "0")); // ✅ '00042'
console.log(number.padEnd(5, "*")); // ✅ '42***'

// Useful for formatting
const creditCard = "1234567890123456";
const last4Digits = creditCard.slice(-4);
console.log(last4Digits.padStart(16, "*")); // ✅ '************3456'
