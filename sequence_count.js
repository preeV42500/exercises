function sequence(count, start) {
  // from 1 up til count, push multiples of the start value onto result array
  var result = [];
  for (var i = 1; i <= count; i++) {
    result.push(start * i);
  }
  return result;
}
