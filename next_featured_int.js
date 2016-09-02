function featured(int) {
  // increment int by 1 to get the next higher number
  // increment int by 1 until int is odd and is a multiple of 7
  // increment int by 14 until no digit appears twice
  int += 1;
  while (int % 2 === 0 || int % 7 !== 0) {
    int += 1;
  }
  while (duplicateDigits(int)) {
   int += 14;
  }
  return int;
}

function duplicateDigits(int) {
  // convert the int to a string
  // if the last index of a digit and the first index of a digit
  // are not the same, there are duplicate digits
  var int_string = int.toString();
  for (var i = 0; i < int_string; i++) {
    var digit = int_string[i];
    if (int_string.indexOf(digit) !== int_string.lastIndexOf(digit)) {
      return true;
    }
  }
  return false;
}
