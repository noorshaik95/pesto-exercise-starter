
function pathSatisfies(...args) {
  const conditionCheck = args[0];
  let valueToBeChecked = {...args[2]};
  const keys = args[1];
  for(let key of keys) {
    valueToBeChecked = valueToBeChecked[key];
  }
  return conditionCheck(valueToBeChecked);
}

export {
  pathSatisfies,
};
