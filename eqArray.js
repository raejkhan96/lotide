// const eqObjects = function(object1, object2) {
//   if (Object.keys(object1).length === Object.keys(object2).length) {
//     // console.log('works')
//     for (let keys in object1) {
//       if (typeof object1[keys] === 'object') {
//         // console.log('object')
//         if (!eqArrays(object1[keys], object2[keys])) {
//           return false;
//         }
//       } else {
//         if (object1[keys] !== object2[keys]) {
//           return false;
//         }
//       }
//     }
//     return true;
//   } else {
//     return false;
//   }
// };



const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;


// const assertEqual = function(actual, expected) {
//   if (actual === expected)  {
//     console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };



// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// // assertEqual(ab, ba);
// assertEqual(eqObjects(ab, ba), true); // true
// const abc = { a: "1", b: "2", c: "3" };
// // assertEqual(ab, abc);
// assertEqual(eqObjects(ab, abc), false); //false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false