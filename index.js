var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object
}

updateObjectWithKeyAndValue(recipes, "flour", "2 cups");

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object
}

destructivelyUpdateObjectWithKeyAndValue(recipes, "flour", "3 cups");

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key;
  return object
}

destructivelyUpdateObjectWithKeyAndValue(recipes, "flour");

  var newRecipes = Object.assign({}, recipes);

function deleteFromObjectByKey(object, key) {
  delete object.key;
  return object
}

deleteFromObjectByKey(newRecipes, {});
