// Tip #13
// Title: Object Property Shorthand
//
// Explanation:
// When the property name matches the variable name, you can omit the key in object literals.
//
// Example:
const foo = "bar";
const baz = 42;
const obj = { foo, baz };
console.log(obj); // { foo: "bar", baz: 42 }