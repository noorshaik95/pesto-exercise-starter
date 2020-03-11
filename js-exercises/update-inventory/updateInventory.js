function updateInventory(oldInventory, newInventory) {
  const inventoryObject = {};
  const sortedInventoryObject = {};
  const updatedInventory = [];
  
  convertToObject(oldInventory, inventoryObject);
  convertToObject(newInventory, inventoryObject);

  Object.keys(inventoryObject).sort().map((key) => {
    sortedInventoryObject[key] = inventoryObject[key];
  });
  
  for(let key in sortedInventoryObject) {
    updatedInventory.push([sortedInventoryObject[key], key]);
  }
  
  return updatedInventory;
}

function convertToObject(inventory, inventoryObject) {
  for(let item of inventory) {
    if(!inventoryObject[item[1]]) {
      inventoryObject[item[1]] = item[0];
    } else {
      inventoryObject[item[1]] += item[0];
    }
  }
}

export {
  updateInventory,
};
