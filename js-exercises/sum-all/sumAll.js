function sumAll(args) {
  let lowerBoundIndex = 0, upperBoundIndex = 1;
  if(args[0] > args[1]) {
    lowerBoundIndex = 1;
    upperBoundIndex = 0;
  }
  let sum = 0;
  for(let index = args[lowerBoundIndex]; index <= args[upperBoundIndex]; index++) {
    sum += index;
  }
  return sum;
}

export {
  sumAll,
};
