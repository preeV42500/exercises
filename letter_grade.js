function get_grade(score1, score2, score3) {
  var avg = Math.round((score1 + score2 + score3) / 3);
  return letter_grade(avg);
}

function letter_grade(avg) {
  if (avg >= 90 && avg <= 100) {
    return "A";
  } else if (avg >= 80 && avg < 90) {
    return "B";
  } else if (avg >= 70 && avg < 80) {
    return "C";
  } else if (avg >= 60 && avg < 70) {
    return "D";
  } else {
    return "F";
  }
}
