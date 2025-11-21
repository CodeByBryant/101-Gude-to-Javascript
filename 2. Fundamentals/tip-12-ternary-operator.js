// Tip #12: Ternary Operator
// Title: Conditional Assignment with Ternary Operator
//
// Explanation:
// The ternary operator provides a concise way to write conditional expressions
// in a single line. Syntax: condition ? valueIfTrue : valueIfFalse
// It's cleaner than if-else for simple conditional assignments.
//
// Example:

"use strict";

const age = 20;

// Use ternary operator for conditional assignment
const message = age >= 18 ? "Adult" : "Minor";
console.log(message); // Output: Adult

// Ternary can be nested but keep it readable
const score = 85;
const grade = score >= 90 ? "A" : 
              score >= 80 ? "B" : 
              score >= 70 ? "C" : "D";
console.log(grade); // Output: B

// Common use case: setting default values or conditional rendering
const user = { name: "John", isAdmin: true };
const access = user.isAdmin ? "Full access" : "Limited access";
console.log(access); // Output: Full access