
function balancedBraces(string) {
  let stack = [];
  let bracesMap = {
      '(': ')',
      '[': ']',
      '{': '}'
  }

  for (let element of string) {
    if(element === '(' || element === '{' || element === '[' ) {
        stack.push(element);
    } else if(element === ')' || element === '}' || element === ']' ){
      let last = stack.pop();
      if (element !== bracesMap[last]) {
        return false
      };
    }
  }
  if (stack.length !== 0) {
    return false
  }
  return true;
}

export {
  balancedBraces,
};
