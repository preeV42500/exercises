function show_multiplicative_average(array) {
  // get product of all values in array by reducing
  // divide by array's length
  var average = array.reduce(function(product, number) {
    return product * number;
  }) / array.length;
  console.log("The result is " + Number(average).toFixed(3));
}
