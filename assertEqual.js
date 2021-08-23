const assertEqual = function(actual, expected) {
  if (actual === expected)  {
    // console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
    return true;
  } else {
    // console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
};

// assertEqual('Lighthouse Labs', 'Bootcamp');
// assertEqual(3, 1);

module.exports = assertEqual;