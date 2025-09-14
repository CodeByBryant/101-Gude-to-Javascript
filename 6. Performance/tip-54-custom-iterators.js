"use strict";

// Custom iterators
const customIterable = {
  data: ["a", "b", "c"],

  // Implementing iterator protocol
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < this.data.length) {
          return { value: this.data[index++], done: false };
        }
        return { done: true };
      },
    };
  },
};

// Using the custom iterator
for (const item of customIterable) {
  console.log(item); // ✅ 'a', 'b', 'c'
}

// Spread operator works too
console.log([...customIterable]); // ✅ ['a', 'b', 'c']
