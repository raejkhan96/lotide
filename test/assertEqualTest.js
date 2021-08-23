const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe('#assertEqual', () => {
  it('checks to make sure the values are equal', () => {
    assert.isTrue(assertEqual('Lighthouse Labs', 'Lighthouse Labs'));
  });
});

// TEST CASES
// assertEqual('Lighthouse Labs', 'Bootcamp');
// assertEqual(3, 1);
