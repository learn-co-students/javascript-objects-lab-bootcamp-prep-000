var recipes = {prop: 1};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value});
}
updateObjectWithKeyAndValue(recipes, "prop2", "2"); 

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
destrustivelyUpdateObjectWithKeyAndValue(recipes, "prop2", "2");

function deleteFromObjectByKey(object, key) {
  var newRecipes = Object.assign({}, object);
  delete newRecipes[key];
  return newRecipes
}
deleteFromObjectByKey(recipes, "prop2");

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object
}
destructivelyDeleteFromObjectByKey(recipes, "prop2")