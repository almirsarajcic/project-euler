var input = 600851475143;

function calculate(input) {
  var largestPrime = 1;

  for (var i = input - 1; i > 1; i--) {
    if (input % i === 0) {
      var prime = true;

      for (var j = 2; j < i; j++) {
        if (i % j === 0) {
          prime = false;
          break;
        }
      }

      if (prime)
      {
        largestPrime = i;
        break;
      }
    }
  }

  return largestPrime;
}
