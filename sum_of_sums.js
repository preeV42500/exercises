function sum_of_sums(array) {
  // at each index of the array, add
  // all the values from index 0 up to the current index
  var total = 0;
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j <= i; j++) {
      total += array[j];
    }
  }
  return total;
}
