function after_midnight(time) {
  // for total minutes, multiply number of hours by 60, add on number of minutes from time string
  // get the remainder when this total number of minutes is divided by the total number of minutes in 24 hours (1440)
  var hours = +time.slice(0, 2);
  var minutes = (hours * 60) + (+time.slice(3));
  return minutes % 1440;
}

function before_midnight(time) {
  // same as after_midnight, except subtract the number of minutes from 1440 to get minutes before midnight 
  var hours = +time.slice(0, 2);
  var minutes = (hours * 60) + (+time.slice(3));
  return (1440 - minutes) % 1440;
}
