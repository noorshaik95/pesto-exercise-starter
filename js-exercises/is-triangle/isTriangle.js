function isTriangle(sideOne, sideTwo, sideThree) {
  return sideThree <= sideOne + sideTwo && sideTwo <= sideOne + sideThree && sideOne <= sideTwo + sideThree;
}

export {
  isTriangle,
};
