function word_sizes(string) {
  // for each word in the string, if its length already exists as a property on the object, increment it
  // else add its length as an object property.
  return string.split(' ').reduce(function(obj, word) {
    if (word === '') {
      return obj;
    }
    obj[word.length] ? obj[word.length]++ : obj[word.length] = 1;
    return obj;
  }, {});
}
