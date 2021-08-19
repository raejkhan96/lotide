// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  // They have the same number of keys
  // The value for each key in one object is the same as the value for that same key in the other object
    if (Object.keys(object1).length === Object.keys(object2).length) {
      // console.log('works')
      let count = 0;
      for (let keys in object1){
        if (object1[keys] === object2[keys]) {
          count += 1;
        } 
      }
      if (count !== Object.keys(object1).length) {
        console.log('false')
      } else {
        console.log('true')
      }
    } else {
      console.log('false')
    }
  };
  
  
  const assertEqual = function(actual, expected) {
    if (actual === expected)  {
      console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  
  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  //assertEqual(ab, ba);
  eqObjects(ab, ba); // true
  const abc = { a: "1", b: "2", c: "3" };
  //assertEqual(ab, abc);
  eqObjects(ab, abc); //false
  