function staggered_case(string) {
  // iterate over string's characters
  // have a flag to check if previous character was uppercase or lowercase
  // if the character is a letter, update the case based on the
  // flag's previous value and update the flag's value
  var lowercase = true;
  return string.split('').map(function(character) {
    if (isLetter(character) && lowercase) {
      lowercase = false;
      return character.toUpperCase();
    } else if (isLetter(character) && !lowercase) {
      lowercase = true;
      return character.toLowerCase();
    } else {
      return character;
    }
  }).join('');
}

function isLetter(character) {
  return Boolean(character.match(/[a-zA-Z]/));
}
