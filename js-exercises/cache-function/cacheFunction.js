function cacheFunction(callback) {
  let calledArgumentsMap = {};
  return (argument) => {
    if(!calledArgumentsMap[argument]) {
      calledArgumentsMap[argument] = {
        isCalled: true,
        value: null
      }
      calledArgumentsMap[argument].value = callback(argument);
    }
    return calledArgumentsMap[argument].value;
  }
}

export {
  cacheFunction,
};
