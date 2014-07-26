var input = 1000;

function calculate(input) {
  var sum = 0;

  for (var i = 1; i < input; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}
