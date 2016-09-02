function swapcase(string) {
  // split string into words
  // iterate through words
  // iterate through characters in words
  // for each character in a word check its case
  // if it matches a lowercase letter, map to uppercase
  // else if it matches an uppercase letter, map to lowercase
  var wordlist = string.split(' ');
  return wordlist.map(function(word) {
    return word.split('').map(function(letter) {
      return convertCase(letter);
    }).join('');
  }).join(' ');
}

function convertCase(letter) {
  if (letter.match(/[a-z]/)) {
    return letter.toUpperCase();
  } else if (letter.match(/[A-Z]/)) {
    return letter.toLowerCase();
  } else {
    return letter;
  }
}
