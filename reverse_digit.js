function reversed_number(int) {
  // drop any zeros at end
  // convert number to string, split string into array,
  // reverse array and join, convert back to Number
  int = drop_end_zeros(int);
  return Number(int.toString().split('').reverse().join(''));
}

function drop_end_zeros(int) {
  // while int % 10 === 0
  // Divide number by 10 and truncate it
  while (int % 10 === 0) {
    int = Math.floor(int / 10);
  }
  return int;
}
