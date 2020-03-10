const rotatedString = (stringOne, stringTwo) => {
  if (stringOne === stringTwo || stringOne.length !== stringTwo.length) {
    return false;    
  }

  return (stringOne+stringOne).indexOf(stringTwo) > -1;
};

export { rotatedString };
