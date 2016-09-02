function capitalize(string) {
  // split string into array of words
  // map each word in the array to a word with only the first letter capitalized
  // join resulting array into string and return it
  var wordlist = string.split(' ');
  return wordlist.map(function(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }).join(' ');
}
