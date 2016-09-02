function penultimate(string) {
  // split string into list of words
  // return word at second to last index
  var wordlist = string.split(' ');
  return wordlist[wordlist.length - 2];
}
