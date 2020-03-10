const animalSort = animals => {
  return animals.sort((animalA, animalB) => {
    if(animalA.numberOfLegs === animalA.numberOfLegs) {
      if (animalA.name < animalB.name) {
        return 1;
      }
      if (animalA.name > animalB.name) {
        return -1;
      }
    } else {
      return animalA.numberOfLegs - animalB.numberOfLegs;
    } 
  }).reverse();
};

export { animalSort };
