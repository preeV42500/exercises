function palindromes(string) {
  // get all substrings of the string
  // filter out the ones that are not palindromes
  var all_substrings = substrings(string);
  return all_substrings.filter(function(substr) {
    return isPalindrome(substr);
  });
}

function isPalindrome(string) {
  if (string.length < 2) {
    return false;
  }
  return string.split('').reverse().join('') === string;
}
