const countLetters = function(sentence) {
  let ans = {};
  for (let alpha of sentence) {
    if (ans[alpha]) {
      ans[alpha] += 1;
    } else {
      ans[alpha] = 1;
    }
  }
  return ans;
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

// countLetters('LHL')
assertArrayEqual(countLetters('LHL'), {L:2, H:1});
assertArrayEqual(countLetters('The fox'), {T: 1, h: 1, e: 1, f: 1, o: 1, x: 1});
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);

module.exports = countLetters;
