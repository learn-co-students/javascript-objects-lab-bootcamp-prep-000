var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value} );
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var newRecipes = Object.assign({}, recipes);
  delete newRecipes[key];
  return newRecipes;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}

var recipes = { prop: 1 }

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value} );
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}
