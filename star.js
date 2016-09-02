function star(n) {
  // have a function that prints out number of stars and spaces in a row
  // based on row's distance from the center line
  // functions for printing top half of star, center line, and bottom half
  top(n);
  center_line(n);
  bottom(n);
}

function print_row(n, distance) {
  // spaces between stars = distance - 1
  // if distance is zero, spaces on either side is zero, else
  // spaces on either side of row = max distance - distance

  var between_spaces,
      num_side_spaces,
      max_distance = (n - 1) / 2,
      stars_string = '',
      spaces = '',
      side_spaces = '',
      num_stars;
  if (distance === 0) {
    between_spaces = 0;
    num_side_spaces = 0;
    num_stars = n;
  } else {
    between_spaces = distance - 1;
    num_side_spaces = max_distance - distance;
    num_stars = 3;
  }
  for (var i = 1; i <= between_spaces; i++) {
    spaces += ' ';
  }
  for (var i = 1; i <= num_side_spaces; i++) {
    side_spaces += ' ';
  }
  for (var i = 1; i <= num_stars; i++) {
    i === num_stars ? stars_string += "*" : stars_string += "*" + spaces;
  }

  console.log(side_spaces + stars_string + side_spaces);
}

function center_line(n) {
  print_row(n, 0);
}

function top(n) {
  // loop from max_distance to 1
  // print row for each distance
  var max_distance = (n - 1) / 2;
  for (var i = max_distance; i >= 1; i--) {
    print_row(n, i);
  }
}

function bottom(n) {
  var max_distance = (n - 1) / 2;
  for (var i = 1; i <= max_distance; i++) {
    print_row(n, i);
  }
}
