
function duplicateLetters(...args) {
  const string = args[0];
  const frequencyMap = {};
  for(let letter of string) {
    if(!frequencyMap[letter]) {
      frequencyMap[letter] = 0;
    }
    frequencyMap[letter]++;
  }
  const maxFrequency = Object.values(frequencyMap).reduce((previousValue = 1, currentValue) => currentValue > previousValue ? currentValue : previousValue);
  return maxFrequency === 1 ? false : maxFrequency;
}
export {
  duplicateLetters,
};
