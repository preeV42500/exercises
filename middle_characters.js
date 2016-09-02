function center_of(string) {
  // determine if string's length is odd or even
  // if string's length is odd, middle index is lower integer of length / 2
  // if string's length is even, mid index is length / 2
  // if even length, get characters from index before mid index to mid index
  var mid_char = '',
      mid_index,
      length = string.length,
      even;
  length % 2 === 0 ? even = true : even = false;
  if (even) {
    mid_index = length / 2;
    mid_char += string[mid_index - 1] + string[mid_index];
  } else {
    mid_index = Math.floor(length / 2);
    mid_char += string[mid_index];
  }
  return mid_char;
}
