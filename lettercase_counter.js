function letter_case_count(string) {
  // declare variables to store count of lowercase,
  // uppercase, and neither characters
  // iterate through the string
  // add to count of lowercase, uppercase or neither based on character case
  // return object with lowercase, uppercase, and neither character counts
  var lowercase = 0;
  var uppercase = 0;
  var neither = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i].match(/[a-z]/)) {
      lowercase++;
    } else if (string[i].match(/[A-Z]/)) {
      uppercase++;
    } else {
      neither++;
    }
  }
  return {
    lowercase: lowercase,
    uppercase: uppercase,
    neither: neither
  };
}
