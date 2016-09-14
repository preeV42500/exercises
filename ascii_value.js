function ascii_value(string) {
  // for each character in the string, add its ascii value to the total
  return string.split('').reduce(function(total, char, index) {
    return total + string.charCodeAt(index);
  }, 0);
}
