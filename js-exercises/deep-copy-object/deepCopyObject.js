const deepCopyObject = objToCopy => {
  if(typeof objToCopy !== "object" || objToCopy === null) {
    return objToCopy;
  } else if(Array.isArray(objToCopy)){
    let replicaArray = [];
    for(let element of objToCopy) {
      replicaArray.push(deepCopyObject(element));
    }
    return replicaArray;
  } else {
    let replicaObject = {};
    for(let key in objToCopy) {
      replicaObject[key] = deepCopyObject(objToCopy[key]);
    }
    return replicaObject;
  }
};

export { deepCopyObject };
