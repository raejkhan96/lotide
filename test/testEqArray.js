const assertEqual = require('../assertEqual');
const eqArray = require('../eqArray');

assertEqual(eqArray([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArray([1, 2, 3], [3, 2, 1]), false); // => false
assertEqual(eqArray(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArray(["1", "2", "3"], ["1", "2", 3]), false); // => false
assertEqual(eqArray([1, 2, 3], [1, 2, 3]), true); 