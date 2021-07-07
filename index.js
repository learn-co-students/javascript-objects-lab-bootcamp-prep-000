var recipes = {};
  
function updateObjectWithKeyAndValue(object, key, value) {
  var newRecipes = Object.assign({[key]: value}, object);
  return newRecipes
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  Object.assign({}, object);
  return object
}

function deleteFromObjectByKey(object, key) {
  var newRecipes = Object.assign({}, recipes)
  return newRecipes
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}