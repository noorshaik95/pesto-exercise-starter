function dropElements(elements, predicate) {
  const result = [];
  for(let element of elements) {
    if(predicate(element)) {
      result.push(element);
    }
  }
  return result;
}

export { dropElements };
