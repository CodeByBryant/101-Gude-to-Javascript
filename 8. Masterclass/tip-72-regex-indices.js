"use strict";

// RegExp Match Indices
const text = "Hello, World!";
const regex = /World/d; // 'd' flag enables indices

const result = regex.exec(text);
console.log(result.indices[0]); // ✅ [7, 12] (start and end indices)

// Named capture groups with indices
const dateRegex = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/d;
const date = "2025-09-14";
const match = dateRegex.exec(date);

console.log(match.indices.groups.year); // ✅ [0, 4]
console.log(match.indices.groups.month); // ✅ [5, 7]
console.log(match.indices.groups.day); // ✅ [8, 10]
