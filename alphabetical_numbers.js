function alphabetic_number_sort(array) {
  var number_words = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen"
  };
  // sort numbers based on the alphabetic ordering of their English words
  return array.sort(function(num1, num2) {
    if (number_words[num1] < number_words[num2]) {
      return -1;
    } else if (number_words[num1] > number_words[num2]) {
      return 1;
    } else {
      return 0;
    }
  });
}
