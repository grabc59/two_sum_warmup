'use strict';
var assert = require('assert');
var code = require('../thursday-warmup.js');

describe ('two sum', function() {
  // base function
  it('should return the indeces of two numbers in the array that sum to the target integer', function(){
    assert.deepEqual([5, 6], code.sumFinder([1, 2, 3, 4, 5, 6, 7], 13));
  });
  // edge case: an index's value plus itself adds up to the desired amount.
  // For example: ([1,2,3,4,5],8). 4 + 4 could work. But we want 2 unique indices. Test that this edge case is prevented.
  it('should not return the same index twice', function() {
    assert.deepEqual([2,4], code.sumFinder([1,2,3,4,5],8));
  });
});
