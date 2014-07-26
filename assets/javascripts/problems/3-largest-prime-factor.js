var result = 1,
    number = 600851475143;

for (var i = number - 1; i > 1; i--) {
  if (number % i === 0) {
    var prime = true;

    for (var j = 2; j < i; j++) {
      if (i % j === 0) {
        prime = false;
        break;
      }
    }

    if (prime)
    {
      result = i;
      break;
    }
  }
}
