"use strict";

// WeakMap and WeakSet
// WeakMap example
let obj = { data: "some data" };
const weakMap = new WeakMap();
weakMap.set(obj, "metadata");

console.log(weakMap.get(obj)); // ✅ 'metadata'
obj = null; // Object becomes eligible for garbage collection

// WeakSet example
let user = { id: 1 };
const weakSet = new WeakSet();
weakSet.add(user);

console.log(weakSet.has(user)); // ✅ true
user = null; // Object becomes eligible for garbage collection
