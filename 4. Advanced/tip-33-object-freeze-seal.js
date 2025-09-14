"use strict";

// Object.freeze() vs Object.seal()
const frozen = Object.freeze({
  prop: 42,
  nested: { value: 10 },
});

frozen.prop = 100; // ❌ Fails silently in non-strict mode
frozen.newProp = 200; // ❌ Cannot add new properties
console.log(frozen.prop); // ✅ Still 42

const sealed = Object.seal({
  prop: 42,
});

sealed.prop = 100; // ✅ Can modify existing properties
sealed.newProp = 200; // ❌ Cannot add new properties
console.log(sealed.prop); // ✅ 100
