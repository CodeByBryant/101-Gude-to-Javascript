// Tip #16
// Title: Default Object Destructuring
//
// Explanation:
// Set default values during object destructuring in case a property is missing.
//
// Example:
const settings = { theme: "dark" };
const { theme, fontSize = 16 } = settings;
console.log(theme);    // dark
console.log(fontSize); // 16