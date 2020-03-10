function forEach(array, callback) {
  for (let element of array) {
    callback(element);
  }
}

function map(array, callback) {
  const mappedArray = [];
  for (let element of array) {
    mappedArray.push(callback(element));
  }
  return mappedArray;
}

function filter(array, callback) {
  const filteredArray = [];
  for (let element of array) {
    if(callback(element)) {
      filteredArray.push(element);
    }
  }
  return filteredArray;
}

function reduce(array, callback, initialValue) {
  for (let element of array) {
    initialValue = callback(initialValue, element);
  }
  return initialValue;
}

export {
  forEach,
  map,
  filter,
  reduce,
}
