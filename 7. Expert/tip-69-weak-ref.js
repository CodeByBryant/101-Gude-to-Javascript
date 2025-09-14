"use strict";

// WeakRef and FinalizationRegistry
// WeakRef - weak reference to an object
let target = { data: "some data" };
const weakRef = new WeakRef(target);

// Access the target object
console.log(weakRef.deref()?.data); // ✅ "some data"

// FinalizationRegistry - run code when object is garbage collected
const registry = new FinalizationRegistry((heldValue) => {
  console.log(`Object was garbage collected: ${heldValue}`);
});

// Register an object
registry.register(target, "my target object");

// Clear target reference
target = null;
// When garbage collection occurs, callback will run
