function rotate90(matrix) {
  // similar to transpose, except get elements from last subarray to first
  var result = [];
  for (var i = 0; i < matrix[0].length; i++) {
    var temp = [];
    for (var j = matrix.length - 1; j >= 0; j--) {
      temp.push(matrix[j][i]);
    }
    result.push(temp);
  }
  return result;
}
