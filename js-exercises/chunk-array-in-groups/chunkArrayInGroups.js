function chunkArrayInGroups(array, chunkSize) {
  const chunkArray = [];
  let group = [];
  array.map((currentValue, currentIndex) => {
    if((currentIndex + 1) % chunkSize === 0) {
      group.push(currentValue); 
      chunkArray.push(group);
      group = [];
    } else {
      group.push(currentValue);      
    }
  });
  if(group.length) {
    chunkArray.push(group);
  }
  return chunkArray;
}

export {
  chunkArrayInGroups,
};
