"use strict";

// Module features
// Named exports
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// Default export
export default class Calculator {
  add(a, b) {
    return a + b;
  }
  subtract(a, b) {
    return a - b;
  }
}

// Re-exporting
export { multiply, divide } from "./math.js";

// Namespace import
import * as mathUtils from "./math.js";

// Named imports
import { add, subtract } from "./math.js";

// Default import
import Calculator from "./calculator.js";
