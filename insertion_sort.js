function insertionSort(arr) {
  var sorted = [arr[0]];
  arr.shift();
  var n = arr.length;
  for (var i = 0; i < n; i++) {
    var current = arr[i];
    sorted.push(current);
    if (current < sorted[sorted.length - 2]) {
      var m = sorted.length;
      for (var j = (m - 2); j >= 0; j--) {
        if (current < sorted[j]) {
          sorted[j + 1] = sorted[j];
          sorted[j] = current;
        }
      }
    }
  }
  return sorted
}

var toSort = ["d", "b", "a", "c"];
console.log(insertionSort(toSort));

module.exports = insertionSort
