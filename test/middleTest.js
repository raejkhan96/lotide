const middle = require('../middle');
const assert = require('chai').assert;

describe('#middle', () => {
  it('checks to make sure the middle array values are equal', () => {
    assert.deepEqual(middle([1,2,3]), [2]);
  });
});

// TEST CASES:
// assertArrayEqual(middle([1]), []);
// assertArrayEqual(middle([1,2]), []);
// assertArrayEqual(middle([1,2,3]), [2]);
// assertArrayEqual(middle([1,2,3,4]), [2,3]);
// assertArrayEqual(middle([1,2,3,4,5]), [3]);
// assertArrayEqual(middle([1,2,3,4,5,6]), [3,4]);