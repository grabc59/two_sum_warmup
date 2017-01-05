// Two Sum: Write a function that takes an array of integers and a target integer. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in an array like so: [index1, index2].
// input: [1, 2, 3, 4, 5, 6, 7], 13
// output: [5,6]

// Write tests for it
// Some hints to get you started if you want to use Mocha test suite with the Chai Assertion library
// npm init
// npm install mocha chai --save
'use strict';
function sumFinder(array, targetInt) {
  // loop through each index
  for (var i = 0; i < array.length; i++) {
    // loop through again and add the values to the current index
    for (var j = 0; j < array.length; j++) {
      if (array[i] + array[j] === targetInt && i !== j) {
        console.log([i, j])
        return [i, j]
      }
    }
  }
}
// sumFinder([1, 2, 3, 4, 5, 6, 7], 13); //[ 5, 6 ]
// sumFinder([1, 2, 3, 4, 5, 6, 7], 10); //[ 2, 6 ]
module.exports = {
  sumFinder: sumFinder
}
