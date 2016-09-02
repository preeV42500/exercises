function transpose(matrix) {
  // get the first element of every subarray, push each of these into a temp array
  // push the temp array onto a result array
  // repeat for every index of the subarrays
  var result = [];
  for (var i = 0; i < matrix[0].length; i++) {
    var temp = [];
    for (var j = 0; j < matrix.length; j++) {
      temp.push(matrix[j][i]);
    }
    result.push(temp);
  }
  return result;
}
