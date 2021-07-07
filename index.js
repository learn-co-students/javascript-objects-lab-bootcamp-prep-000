var recipes = {};
function updateObjectWithKeyAndValue(object, key, value) {
  var newRecipes = Object.assign({}, object, {[key]: value});
  return newRecipes;
  return object;
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, {[key]: value})
}
function deleteFromObjectByKey(object, key) {
  var newRecipes = Object.assign({}, object)
  delete newRecipes[key];
  return newRecipes;
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
