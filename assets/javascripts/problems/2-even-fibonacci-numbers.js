var input = 4000000;

function calculate(input) {
  var sum        = 0,
      lastNumber = 0;

  for (var i = 1; i <= input;) {
    if (i % 2 === 0) {
      sum += i;
    }

    var tmp = i;
    i += lastNumber;
    lastNumber = tmp;
  }

  return sum;
}

