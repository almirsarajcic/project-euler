var result     = 0,
    lastNumber = 0;

for (var i = 1; i <= 4000000;) {
  if (i % 2 === 0) {
    result += i;
  }

  var tmp = i;
  i += lastNumber;
  lastNumber = tmp;
}
