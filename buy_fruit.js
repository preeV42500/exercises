function buy_fruit(array) {
  // in each subarray, the second value represents the quantity
  // for the quantity number of times, push the item from the subarray
  // (first value) onto result array
  var result = [];
  array.forEach(function(subarray) {
    for (var i = 1; i <= subarray[1]; i++) {
      result.push(subarray[0]);
    }
  });
  return result;
}
