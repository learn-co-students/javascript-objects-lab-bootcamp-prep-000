function updateObjectWithKeyAndValue (object, key, value) {
  var recipes = Object.assign({}, object, key, value);
  return recipes;
}

function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey (object, key) {
  var newRecipes = Object.assign({}, object, key);
  delete newRecipes.key;
  return newRecipes;
  
}

function destructivelyDeleteFromObjectByKey (object, key) {
  
}