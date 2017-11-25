const assert = require('chai').assert;
const insertionSort = require('../insertion_sort')

describe("insertionSort", function() {
  it("will do an insertion sort on an array", function() {
    var sorted = ["a", "b", "c", "d"];
    var arr = ["d", "b", "a", "c"]
    assert.deepEqual(insertionSort(arr), sorted)
  });
});
