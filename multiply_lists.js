function multiply_list(array1, array2) {
  // iterate through indices of an array
  // multiply corresponding values in each array
  // push into result array
  var result = [];
  array1.forEach(function(item, index) {
    result.push(item * array2[index]);
  });
  return result;
}
