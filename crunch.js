function crunch(string) {
  // when a new letter is encountered, store it in current letter variable
  // if next letter is equal to the current letter, continue to subsequent letters until a new letter is seen
  var result = '';
  var current_letter;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === current_letter) {
      continue;
    }
    current_letter = string[i];
    result += string[i];
  }
  return result;
}
