const tail = function(words) {
  let arr = [];
  let length = words.length;
  arr = words.slice(1, length);
  return arr;
};

// const assertEqual = function(actual, expected) {
//   if (actual === expected)  {
//     console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };


// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2);
// assertEqual(result[0], "Lighthouse");
// assertEqual(result[1], "Labs");

module.exports = tail;