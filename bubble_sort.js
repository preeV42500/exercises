function bubble_sort(array) {
  // iterate through the array repeatedly until no swaps have been made
  // for every new iteration over the array, initially set swap to false
  // check the val at each index with the value at the index after it
  // if the first value is greater than the second, swap the two elements
  // set swap variable to true
  var swap = true;
  while (swap) {
    swap = false;
    for (var i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        var temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swap = true;
      }
    }
  }
  return array;
}
