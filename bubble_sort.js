function bubbleSort(arr) {
  var swapped = true;
  var n = arr.length;
  while (swapped === true) {
    swapped = false;
    for (var i = 0; i < (n - 1); i++) {
      if (arr[i] > arr[i+1]) {
        var temp = arr[i+1];
        swapped = true;
        arr[i+1] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr
}

var toSort = ["d", "b", "a", "c"]
console.log(bubbleSort(toSort));

module.exports = bubbleSort
