const sumEvenArgs = (...args) => {
  return args.reduce((accumulator, currentValue) => {
    if(currentValue %2 === 0) {
      accumulator += currentValue;
    }
    return accumulator;
  }, 0);
};

export { sumEvenArgs };
