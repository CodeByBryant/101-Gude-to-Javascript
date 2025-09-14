// Tip #11
// Title: Falsy vs Truthy Values
//
// Explanation:
// JavaScript treats certain values as false in conditionals (false, 0, '', null, undefined, NaN). Everything else is truthy.
//
// Example:
const falsy = [false, 0, "", null, undefined, NaN];
falsy.forEach(v => console.log(Boolean(v))); // all false

const truthy = [true, 1, "text", [], {}, () => {}];
truthy.forEach(v => console.log(Boolean(v))); // all true