var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var nRecipes = Object.assign({}, object);
  nRecipes[key] = value;
  return nRecipes;
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}
function deleteFromObjectByKey(object, key) {
  var nObject = Object.assign({}, object);
  delete nObject[key];
  return nObject;
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}