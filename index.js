var recipes = {};

function updateObjectWithKeyAndValue(recipes, key, value) {
  return Object.assign({}, recipes, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
    recipes[key] = value
    return recipes
}

function deleteFromObjectByKey(recipes, key) {
  recipes = delete recipes.key
  return recipes
}

function destructivelyDeleteFromObjectByKey(recipes, key) {
  delete recipes[key]
  return recipes
}