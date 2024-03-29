const eqArrays = require('./eqArray');


const assertArrayEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true)  {
    // console.log(`✅ ✅ ✅ Assertion Passed`);
    return true;
  } else {
    // console.log(`🛑🛑🛑 Assertion Failed`);
    return false;
  }
};

module.exports = assertArrayEqual;

// const eqArrays = function(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// const assertEqual = function(actual, expected) {
//   if (actual === expected)  {
//     console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// assertArrayEqual([1, 2, 3], [1, 2, 3]); // => true
// assertArrayEqual([1, 2, 3], [3, 2, 1]); // => false

// assertArrayEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
// assertArrayEqual(["1", "2", "3"], ["1", "2", 3]); // => false