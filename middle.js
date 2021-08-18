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

const middle = function(arr1) {
  let arr2 = [];
  if (arr1.length === 1 || arr1.length === 2) {
    return arr2;
  } else if (arr1.length % 2 === 0) {
    let num = arr1.length / 2;
    arr2.push(arr1[num - 1]);
    arr2.push(arr1[num]);
    return arr2;
  } else if (arr1.length % 2 === 1) {
    let num = Math.round(arr1.length / 2);
    arr2.push(arr1[num - 1]);
    return arr2;
  }
};

assertArrayEqual(middle([1]), []);
assertArrayEqual(middle([1,2]), []);
assertArrayEqual(middle([1,2,3]), [2]);
assertArrayEqual(middle([1,2,3,4]), [2,3]);
assertArrayEqual(middle([1,2,3,4,5]), [3]);
assertArrayEqual(middle([1,2,3,4,5,6]), [3,4]);