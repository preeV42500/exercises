function staggered_case(string) {
  // iterate over string's characters
  // if the index of a character is even, the character should be
  // capitalized if it is a letter
  // if the index of a char is odd, char should be lowercase if it is a letter

  return string.split('').map(function(character, index) {
    return alterCaseIfLetter(character, index);
  }).join('');
}

function alterCaseIfLetter(character, index) {
  if (index % 2 === 0 && character.match(/[a-zA-Z]/)) {
    return character.toUpperCase();
  } else if (index % 2 === 1 && character.match(/[a-zA-Z]/)) {
    return character.toLowerCase();
  } else {
    return character;
  }
}
