function interleave(array1, array2) {
  // declare an empty array
  // iterate through the indices of the arrays (both are same length)
  // at each index, push an element from array1 into result array and
  // from array2 into result array
  // return result array
  var result = [];
  for (var i = 0; i < array1.length; i++) {
    result.push(array1[i]);
    result.push(array2[i]);
  }
  return result;
}
