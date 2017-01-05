'use strict';
var assert = require('assert');
var code = require('../thursday-warmup.js');

describe ('two sum', function() {
  it('should return the indeces of two numbers in the array that sum to the target integer', function(){
    assert.deepEqual([5, 6], code.sumFinder([1, 2, 3, 4, 5, 6, 7], 13))
  })
})
