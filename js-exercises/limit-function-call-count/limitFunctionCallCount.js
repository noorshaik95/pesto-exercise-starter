const limitFunctionCallCount = (callback, limit) => {
  let noOfTimesCallbackCalled = 0;
  return (...args) => {
    noOfTimesCallbackCalled++;
    if(noOfTimesCallbackCalled <= limit) {
      return callback.apply(null, args);
    } else {
      return null;
    }
  }
};

export {
  limitFunctionCallCount,
};
