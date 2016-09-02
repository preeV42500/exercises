function word_lengths(string) {
  // split string into array of words
  // map each word to a string of itself plus its length
  if (!string) {
    return [];
  }
  return string.split(' ').map(function(word) {
    return word + " " + word.length;
  });
}
