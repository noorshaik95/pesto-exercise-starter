import { isString } from "util";

function abbreviateString(str) {
  if(!isString(str)) {
    throw new Error("Expected 'str' to be string received "+ typeof str);
  }
  const words = str.split(" ");
  const firstLetterOfLastWord = words[words.length -1][0];  
  return `${words[0]} ${firstLetterOfLastWord.toUpperCase()}.`

}

export { abbreviateString };
