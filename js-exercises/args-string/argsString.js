const argsString = (message, args) => {
  const words = message.split(' ');
  let identifierRegex = RegExp('{}*','g');
  let argsIndex = 0;
  for(let index = 0; index < words.length; index++) {
    if(identifierRegex.test(words[index])) {
      words[index] = words[index].replace(identifierRegex, args[argsIndex]);
      argsIndex++;
    }
  }
  return words.join(' ');
};

export { argsString };
