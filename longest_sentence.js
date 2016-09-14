function longestSentence(text) {
  // split text into an array of sentences based on punctuation marks
  // determine the longest sentence in the array of sentences based on the length of each sentence
  var sentences = text.split(/(\!|\.|\?)/);

  var longest = sentences.map(function(sentence) {
    return sentence.trim();
  }).reduce(function(longest, sentence) {
    return sentence.split(' ').length >= longest.split(' ').length ? sentence : longest;
  });

  console.log(longest);
  console.log('The longest sentence has ' + longest.split(' ').length + ' words.');
}
