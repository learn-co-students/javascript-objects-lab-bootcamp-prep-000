var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  recipes [key] = value
  return recipes
}

function deleteFromObjectByKey(object, key) {
  delete recipes.key
  return recipes
}

function destructivelyDeleteFromObjectByKey(recipes, key)
{  delete recipes[key];
  return recipes
}