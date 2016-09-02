function isUppercase(string) {
  // iterate through string, if character is not alphabetic, continue to next
  // else return false if character is not uppercase
  var alphabetic;
  for (var i = 0; i < string.length; i++) {
    alphabetic = Boolean(string[i].match(/[a-zA-Z]/));
    if (!alphabetic) {
      continue;
    } else if (!string[i].match(/[A-Z]/)) {
      return false;
    }
  }
  return true;
}
