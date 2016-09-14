function word_sizes(string) {
  // for each word in the string, first replace any non-letters with empty strings, then get its length
  // if the length already exists as a property on the object, increment it
  // else add its length as an object property.
  return string.split(' ').reduce(function(obj, word) {
    if (word === '') {
      return obj;
    }
    var length = word.replace(/[^a-z]/ig, '').length;
    obj[length] ? obj[length]++ : obj[length] = 1;
    return obj;
  }, {});
}
