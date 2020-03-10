function rot13(encodedString) {
  let decodedString = '';
  const cipherMap = {
    A: 'N', B: 'O', C: 'P',
    D: 'Q', E: 'R', F: 'S',
    G: 'T', H: 'U', I: 'V',
    J: 'W', K: 'X', L: 'Y',
    M: 'Z', N: 'A', O: 'B',
    P: 'C', Q: 'D', R: 'E',
    S: 'F', T: 'G', U: 'H',
    V: 'I', W: 'J', X: 'K',
    Y: 'L', Z: 'M'  
  }
  for(let character of encodedString) {
    if(!cipherMap[character]) {
      decodedString += character;
    } else {
      decodedString += cipherMap[character];
    }
  }
  return decodedString;
}

export {
  rot13,
};
