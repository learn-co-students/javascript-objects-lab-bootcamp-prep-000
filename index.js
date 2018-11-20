var recipes = {flour: "1 cup", eggs: "2"};

function updateObjectWithKeyAndValue(object, key, value) {
var addKeyVal = Object.assign({}, object, {[key]: value});
  return addKeyVal;
}

function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
  Object.assign(object, {[key]: value});
  return object;
}

function deleteFromObjectByKey(object, key) {
  var newRecipe = Object.assign({}, object)
  delete newRecipe[key];
  return newRecipe;
}

function destructivelyDeleteFromObjectByKey (object, key) {
  delete object[key];
  return object;
}