function time_of_day(mins) {
  // get the number of hours that have passed since the last midnight mark
  // if number of minutes is before midnight, subtract the value from 24 to get hours in 24-hr format
  // for minutes in 24-hour format, multiply fractional part of hours by 60 and round

  var hoursSinceMidnight;
  var hours;
  var minutes;
  if (mins < 0) {
    hoursSinceMidnight = 24 + ((mins / 60) % 24);
  } else {
    hoursSinceMidnight = (mins / 60) % 24;
  }
  hours = Math.floor(hoursSinceMidnight);
  minutes = Math.round((hoursSinceMidnight % 1) * 60);
  return formatHoursMinutes(hours, minutes);
}

function formatHoursMinutes(hours, minutes) {
 if (hours < 10) {
   hours = "0" + hours;
 }
 if (minutes < 10) {
   minutes = "0" + minutes;
 }
 return hours + ":" + minutes;
}
