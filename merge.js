function merge(array1, array2) {
  // for every element in array1, check if any elements
  // in array2 are less than or equal to it
  // if they are, push them onto the result array
  // stop iterating in array2 when an element is not less than or equal to the
  // element in array1
  // push the element from array1 onto the result array
  // if there are any elements left in array2 after iterating through array1,
  // concat those with the result array

  var result = [];
  for (var i = 0, j = 0; i < array1.length; i++) {
    while (j < array2.length) {
      if (array2[j] <= array1[i]) {
        result.push(array2[j]);
        j++;
      } else {
        break;
      }
    }
    result.push(array1[i]);
  }

  if (array2[j]) {
    return result.concat(array2.slice(j));
  }
  return result;
}
