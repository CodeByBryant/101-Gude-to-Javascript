"use strict";

// BigInt for large numbers
const maxNumber = Number.MAX_SAFE_INTEGER;
console.log(maxNumber); // ✅ 9007199254740991
console.log(maxNumber + 1 === maxNumber + 2); // ❌ true (precision loss)

// Using BigInt
const bigInt = 9007199254740991n;
console.log(bigInt + 1n === bigInt + 2n); // ✅ false (precise)

// Operations with BigInt
console.log(bigInt * 2n); // ✅ 18014398509481982n
console.log(typeof bigInt); // ✅ 'bigint'
