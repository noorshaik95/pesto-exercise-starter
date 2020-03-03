function sumFibs(fibonacciLimit) {
  let firstElement = 1;
  let secondElement = 1;
  if(!fibonacciLimit) {
    return 0;
  } else if(fibonacciLimit === 1) {
    return 1;
  } else if(fibonacciLimit === 2) {
    return 2;
  }
  let oddSum = 2;
  let sum = 0;
  while(sum <= fibonacciLimit) {
    sum = firstElement + secondElement;
    if(sum % 2 !== 0 && sum <= fibonacciLimit) {
      oddSum += sum;
    }
    firstElement = secondElement;
    secondElement = sum;
  }
  return oddSum;
}
export {
  sumFibs,
};
