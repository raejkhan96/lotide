//const assertEqual = require('../assertEqual');

const head = function(arr) {
  return arr[0];
};
module.exports = head;

// const assertEqual = function(actual, expected) {
//   if (actual === expected)  {
//     console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// assertEqual('Lighthouse Labs', 'Bootcamp');
// assertEqual(3, 1);

// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");