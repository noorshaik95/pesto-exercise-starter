
function lastIndexOf(element, array) {
  if(array.indexOf(element) === -1) {
    return -1;
  } else {
    return array.length - array.reverse().indexOf(element) - 1;
  }
}

export {
  lastIndexOf,
};
