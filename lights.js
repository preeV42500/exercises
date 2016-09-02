function lights(array) {
  // declare a variable that indicates the increment at which to traverse the array
  // increment should initially be set to 1
  // iterate through the array
  // the index to start traversing the array is one less than the increment value
  // add the increment value to the index at every iteration of the loop
  // after the loop completes, add one to the increment
  // iterate through array repeatedly
  // until the increment value is equal to the length of the array

  var repetitions = array.length,
      increment = 1;
  while (increment <= repetitions) {
    for (var i = increment - 1; i < repetitions; i += increment) {
      array[i] === "off" ? array[i] = "on" : array[i] = "off";
    }
    increment++;
  }

  var on_lights = determineOnLights(array);
  console.log(on_lights.length + " lights are on: " + on_lights.join(', '));
}

function determineOnLights(array) {
  // get the positions of the lights that are on
  // the positions of the lights are one greater than their index in the array
  // iterate through array and push the positions of on lights to a separate array
  var on_lights = [];
  array.forEach(function(item, index) {
    if (item === "on") {
      on_lights.push(index + 1);
    }
  });
  return on_lights;
}
