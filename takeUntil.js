const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

const takeUntil = (arr, stop) => {
  const results = [];
  for (let item of arr) {
    if (stop(item) === false) {
      results.push(item);
    } else {
      break;
    }
  }
  return results;
};

const assertArrayEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true)  {
    console.log(`✅ ✅ ✅ Assertion Passed`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed`);
  }
};

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


const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);
assertArrayEqual(results1, [ 1, 2, 5, 7, 2]);
console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);
assertArrayEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']);

module.exports = takeUntil;
// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]