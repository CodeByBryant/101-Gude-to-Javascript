"use strict";

// Class static initialization blocks
class MyClass {
  static myStaticProp;

  // Static initialization block
  static {
    // Complex initialization logic
    const initValue = someComplexComputation();
    this.myStaticProp = initValue;

    // Can access private fields and methods
    this.#setupStatic();
  }

  static #setupStatic() {
    // Private static initialization
    console.log("Static initialization");
  }

  // Regular static method
  static getValue() {
    return this.myStaticProp;
  }
}

function someComplexComputation() {
  return 42;
}
