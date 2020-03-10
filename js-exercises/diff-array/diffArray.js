function diffArray(firstArray, secondArray) {
  let [setA, setB] = [new Set(firstArray), new Set(secondArray)];
  return [...differenceBetweenSets(setA, setB), ...differenceBetweenSets(setB, setA)];
}

function differenceBetweenSets(setA, setB) {
  let difference = new Set(setA)
  for (let element of setB) {
      difference.delete(element)
  }
  return Array.from(difference);
}

export {
  diffArray,
};
