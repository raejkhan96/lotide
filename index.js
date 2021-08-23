const assertObjectsEqual = require('./assertObjectsEqual');
const assertArrayEqual = require('./assertArrayEqual');
const assertEqual = require('./assertEqual');
const countLetters = require('./countLetters');
const eqArrays = require('./eqArray');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const head = require('./head');
const letterPositions = require('./letterPositions');
const map = require('./map');
const middle = require('./middle');
const tail = require('./tail');
const takeUntil = require('./takeUntil');
const without = require('./without');

module.exports = {
  head: head,
  tail: tail, 
  middle: middle,
  assertObjectsEqual: assertObjectsEqual,
  assertArrayEqual: assertArrayEqual,
  assertEqual: assertEqual,
  countLetters: countLetters, 
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  letterPositions: letterPositions,
  map: map, 
  takeUntil: takeUntil,
  without: without
};