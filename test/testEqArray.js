const eqArray = require('../eqArray');
const assert = require('chai').assert;

describe ('#eqArray', () => {
  it('checks to make sure array values are equivalent', () => {
    assert.isTrue(eqArray([1, 2, 3], [1, 2, 3]), true)
  });
});

// TEST CASES:
// assertEqual(eqArray([1, 2, 3], [1, 2, 3]), true); // => true
// assertEqual(eqArray([1, 2, 3], [3, 2, 1]), false); // => false
// assertEqual(eqArray(["1", "2", "3"], ["1", "2", "3"]), true); // => true
// assertEqual(eqArray(["1", "2", "3"], ["1", "2", 3]), false); // => false
// assertEqual(eqArray([1, 2, 3], [1, 2, 3]), true); 

