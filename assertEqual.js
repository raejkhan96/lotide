const assertEqual = function(actual, expected) {
  if (actual === expected)  {
    console.log('✅ ✅ ✅ Assertion Passed: %s === %s', actual, expected);
  } else {
    console.log('🛑🛑🛑 Assertion Failed: %s !== %s', actual, expected);
  }
};

assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(3, 1);