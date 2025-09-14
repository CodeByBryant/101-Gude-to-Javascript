"use strict";

// Array grouping
const inventory = [
  { name: "apple", type: "fruit", quantity: 5 },
  { name: "banana", type: "fruit", quantity: 10 },
  { name: "carrot", type: "vegetable", quantity: 8 },
  { name: "orange", type: "fruit", quantity: 3 },
];

// Group by type
const grouped = inventory.group((item) => item.type);
console.log(grouped);
// ✅ {
//     fruit: [
//         { name: 'apple', type: 'fruit', quantity: 5 },
//         { name: 'banana', type: 'fruit', quantity: 10 },
//         { name: 'orange', type: 'fruit', quantity: 3 }
//     ],
//     vegetable: [
//         { name: 'carrot', type: 'vegetable', quantity: 8 }
//     ]
// }
