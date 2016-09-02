function twice(number) {
  // check if the number is a 'double number'
  // if so then return it as is, else return 2 * number
  return double_number(number) ? number : 2 * number;
}

function double_number(number) {
  // convert number to a string
  // if the number's length is not even, return false
  // check if the digits in the first half of the number equal the
  // digits in the second half of the number
  var num_str = number.toString();
  var mid = num_str.length / 2;
  if (num_str.length % 2 === 1) {
    return false;
  }
  return num_str.slice(0, mid) === num_str.slice(mid);
}
