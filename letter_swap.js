function swap(string) {
  // for every word in the string, swap its first and last letters
  return string.split(' ').map(function(word) {
    return swapFirstAndLast(word);
  }).join(' ');
}

function swapFirstAndLast(word) {
  word = word.split('');
  var temp = word[0];
  word[0] = word[word.length - 1];
  word[word.length - 1] = temp;
  return word.join('');
}
