function block_word(word) {
  // iterate through letters of word
  // if a letter can be mapped to another letter that is also in the word
  // or if a letter has already been seen, return false
  var blocks = {
    B: "O",
    X: "K",
    D: "Q",
    C: "P",
    N: "A",
    G: "T",
    R: "E",
    F: "S",
    J: "W",
    H: "U",
    V: "I",
    L: "Y",
    Z: "M"
  };
  var seen_letters = [];
  for (var i = 0; i < word.length; i++) {
    var letter = word[i];
    if (bothLetters(letter, blocks, word)|| seen_letters.indexOf(letter) !== -1) {
      return false;
    } else {
      seen_letters.push(letter);
    }
  }
  return true;
}

function bothLetters(letter, blocks, word) {
  // check if the given letter maps to another letter in blocks object
  // if it does, check if the mapped letter is also in the word
  var mapped_letter = blocks[letter];
  if (mapped_letter && word.indexOf(mapped_letter) !== -1) {
    return true;
  }
  return false;
}
