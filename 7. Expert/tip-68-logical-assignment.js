"use strict";

// Logical assignment operators
let x = null;
let y = 0;
let z = "";

// Logical OR assignment (||=)
x ||= 42; // ✅ x = 42 (assigns if falsy)
console.log(x); // ✅ 42

// Logical AND assignment (&&=)
y &&= 42; // ✅ y = 0 (assigns if truthy)
console.log(y); // ✅ 0

// Nullish coalescing assignment (??=)
z ??= "default"; // ✅ z = 'default' (assigns if null/undefined)
console.log(z); // ✅ '' (not assigned as z was '')
