function print_in_box(string) {
  // print border, then empty line, then string, with another empty line and border below the string
  // for border, number of dashes is equal to the length of the string plus 2
  // for empty line, number of spaces is equal to the length of the string plus 2
  var border = createBorder(string.length);
  var empty_line = createEmptyLine(string.length);
  console.log(border);
  console.log(empty_line);
  console.log('| ' + string + ' |');
  console.log(empty_line);
  console.log(border);
}

function createBorder(n) {
  var border = '+';
  for (var i = 0; i < n + 2; i++) {
    border += '-';
  }
  return border + '+';
}

function createEmptyLine(n) {
  var line = '|';
  for (var i = 0; i < n + 2; i++) {
    line += ' ';
  }
  return line + '|';
}
