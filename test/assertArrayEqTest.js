const assert = require('chai').assert;
const assertArrayEqual = require('../assertArrayEqual.js');

describe('#assertArrayEqual', () => {
  it('checks to make sure arrays are equal', () => {
    assert.isTrue(assertArrayEqual([1,2,3],[1,2,3]));
  });
});

// TEST CASES:
// assertArrayEqual([1, 2, 3], [1, 2, 3]); // => true
// assertArrayEqual([1, 2, 3], [3, 2, 1]); // => false
// assertArrayEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
// assertArrayEqual(["1", "2", "3"], ["1", "2", 3]); // => false
