const assert = require('chai').assert;
const bubbleSort = require('../bubble_sort')

describe("bubbleSort", function() {
  it("will do a bubble sort on an array", function() {
    var sorted = ["a", "b", "c", "d"];
    var arr = ["d", "b", "a", "c"]
    assert.deepEqual(bubbleSort(arr), sorted)
  });
});
