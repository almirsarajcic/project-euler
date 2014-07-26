var input = 3;

function calculate(input) {
  var largest = 0,
      min     = Math.pow(10, input - 1),
      max     = Math.pow(10, input) - 1;

  for (var i = max; i >= min; i--) {
    for (var j = max; j >= min; j--) {
      var product = i*j;

      if (isPalindrome(product) && product > largest) {
        largest = product;
      }
    }
  }

  return largest;
}

function isPalindrome(number) {
  var digits = [],
      i      = -1;

  while (number) {
    digits[++i] = number % 10;
    number      = Math.floor(number / 10);
  }

  for (j = 0; j < i / 2; j++) {
    if (digits[j] !== digits[i - j]) {
      return false;
    }
  }

  return true;
}
