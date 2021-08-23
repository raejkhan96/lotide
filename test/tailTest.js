const assertEqual = require('../assertEqual');
const tail = require('../tail');
const assert = require('chai').assert;

describe('#tail', () => {
  it('checks to make sure the tail values are equal', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
});

// TESTING: 
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2);
// assertEqual(result[0], "Lighthouse");
// assertEqual(result[1], "Labs");
