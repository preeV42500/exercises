function diamond(n) {
  // for top half of diamond, distance from center line goes from (n - 1) / 2 to 1
  // for bottom half, distance from center goes from 1 to n - 1 / 2
  // can have a function that takes care of printing the stars in each
  // row based on the row's distance from the center line
  // function to print the top half => loop from distance (n - 1) / 2 to 1, call print_row function
  // function to print the bottom half => loop from distance of 1 to (n - 1) / 2
  top_half(n);
  print_row(0, n);
  bottom_half(n);
}

function print_row(distance, n) {
  // number of spaces on each side of star = row's distance from center
  // number of stars = n - (2*distance)

  var spaces = '',
      stars = '',
      num_stars = n - (2 * distance);
  for (var i = 1; i <= distance; i++) {
    spaces += ' ';
  }
  for (var j = 1; j <= num_stars; j++) {
    stars += "*";
  }
  console.log(spaces + stars + spaces);
}

function top_half(n) {
  var max_distance = (n - 1) / 2;
  for (var i = max_distance; i >= 1; i--) {
    print_row(i, n);
  }
}

function bottom_half(n) {
  var max_distance = (n - 1) / 2;
  for (var i = 1; i <= max_distance; i++) {
    print_row(i, n);
  }
}
