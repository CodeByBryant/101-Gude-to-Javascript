"use strict";

// Class Fields Declaration
class Rectangle {
  // Public instance fields
  height = 0;
  width = 0;

  // Private instance fields
  #area = 0;

  // Static public field
  static defaultShape = "rectangle";

  // Static private field
  static #counter = 0;

  constructor(height, width) {
    this.height = height;
    this.width = width;
    this.#calculateArea();
    Rectangle.#counter++;
  }

  // Private method
  #calculateArea() {
    this.#area = this.height * this.width;
  }

  // Public method
  getArea() {
    return this.#area;
  }

  // Static method
  static getCount() {
    return Rectangle.#counter;
  }
}

const rect = new Rectangle(5, 3);
console.log(rect.getArea()); // ✅ 15
console.log(Rectangle.getCount()); // ✅ 1
