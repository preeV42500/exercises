function repeater(string) {
  // iterate through the string
  // add the current character to a result string 2 times
  var result = '';
  for (var i = 0; i < string.length; i++) {
    for (var j = 0; j < 2; j++) {
      result += string[i];
    }
  }
  return result;
}
