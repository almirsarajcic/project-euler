var input = 20;

function calculate(input) {
  var smallestMultiple = 1;

  while (true) {
    var evenlyDivisible = true;

    for (var j = 1; j <= input; j++) {
      if (smallestMultiple % j) {
        evenlyDivisible = false;
        break;
      }
    }

    if (evenlyDivisible) {
      return smallestMultiple;
    }

    smallestMultiple++;
  }
}
