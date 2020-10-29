var pi = 0;
var signe = '+';
for (var i = 1; i < 1000000; i += 2) {
  if (signe === '+') {
    pi = pi + (4 / i);
    signe = '-';
  } else if (signe === '-') {
    pi = pi - (4 / i);
    signe = '+';
  }
  // pi = (pi + ((4 / i))) * -1;
}
console.log('pi', pi);
//
// 4/1 + 4/3 - 4/5.....
