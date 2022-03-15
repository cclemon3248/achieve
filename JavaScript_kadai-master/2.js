function score_indicate() {
  let subject_points = [60, 60, 60, 60, 60];
  return subject_points;
};

function totals() {
  let total = score_indicate();
  let sum = total[0];
  sum = sum + total[1];
  sum = sum + total[2];
  sum = sum + total[3];
  sum = sum + total[4];
  return sum;
};

let goukei = totals();
console.log(goukei);
