function sumPrimes(primeNumberLimit) {
  let sum = 0;
  for(let number = 2; number <= primeNumberLimit; number++) {
    let isPrime = true;
    for(let divisor = 2; divisor <= (number / 2); divisor++) {
      if(number % divisor === 0) {
        isPrime = false;
        break;
      }
    }
    if(isPrime) {
      sum += number;
    }
  }
  return sum;
}

export {
  sumPrimes,
};
