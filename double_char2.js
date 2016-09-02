function double_consonants(string) {
  // iterate through the string, if character is a consonant,
  // add the character to a result string 2 times
  // else add the character to the result string one time
  var result = '',
      num_iterations;
  for (var i = 0; i < string.length; i++) {
    isConsonant(string[i]) ? num_iterations = 2 : num_iterations = 1;
    for (var j = 0; j < num_iterations; j++) {
      result += string[i];
    }
  }
  return result;
}

function isConsonant(character) {
  return Boolean(character.match(/[^aeiou0-9\s\-\.\?\,\!\:]/));
}
