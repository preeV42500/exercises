function multiply_all_pairs(array1, array2) {
  // for every element in one array, iterate through all the elements in
  // the other array, multiply each of those elements by the element in
  // the first array, and push each resulting value into a result array
  // sort the result array
  var result = [];
  for (var i = 0; i < array1.length; i++) {
    for (var j = 0; j < array2.length; j++) {
      result.push(array2[j] * array1[i]);
    }
  }
  return result.sort(function(item1, item2) {
    return item1 - item2;
  });
}
