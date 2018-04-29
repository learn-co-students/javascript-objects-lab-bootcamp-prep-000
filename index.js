var recipes = { eggs: "3", 
  flour: "two cups",
  milk: "500ml",
};

function updateObjectWithKeyAndValue(recipes, key, value) {
  return Object.assign({}, recipes, { [key]:value})
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  recipes[key] = value
  return recipes
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
  
}

function deleteFromObjectByKey(recipes, key) {
  var neww = Object.assign({}, recipes );
  delete neww[key];
  return neww;
  }
 