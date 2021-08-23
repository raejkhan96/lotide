const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (results[letter]) {
      results[letter].push(i);
    } else {
      results[letter] = new Array();
      results[letter].push(i);
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
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// console.log(letterPositions('hello'));
assertArrayEqual(letterPositions('hello'), {h: [0], e: [1], l: [2,3], o: [4]});
assertArrayEqual(letterPositions('lighthouse in the house'),
  {
    l: [0],
    i: [1, 11],
    g: [2],
    h: [3, 5, 15, 18],
    t: [4, 14],
    o: [6, 19],
    u: [7, 20],
    s: [8, 21],
    e: [9, 16, 22],
    n: [12]
  });

module.exports = letterPositions;