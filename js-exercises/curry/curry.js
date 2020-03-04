
  function curry(callback, calledArguments = []){
    return (...args) => {
      calledArguments = [...calledArguments, ...args];
      if(callback.length === calledArguments.length) {
        return callback.apply(null, calledArguments);
      } else {
        return curry(callback, [...calledArguments]);
      }
    }
  }

export {
  curry,
};
