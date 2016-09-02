function fizzbuzz(start, end) {
  // loop through all nums from start to end
  // declare a string to store the output
  // if num is a multiple of 3, add 'Fizz' to output string
  // if num is a multiple of 5, add 'Buzz' to output string
  // log the output or the number if output is empty
  for (var i = start; i <= end; i++) {
    var output = '';
    if (i % 3 === 0) {
      output += 'Fizz';
    }
    if (i % 5 === 0) {
      output += 'Buzz';
    }
    console.log(output || i);
  }
}
