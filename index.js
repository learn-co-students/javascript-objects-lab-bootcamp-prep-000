var recipes = {Eggs : "2", Flour : "3"}

function updateObjectWithKeyAndValue(recipes, key, value) {
  recipes[key] = value
  return recipes
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  recipes[key] = value
  return recipes
}

function deleteFromObjectByKey(recipes, key) {
  delete recipes.key
  return recipes
}

function destructivelyDeleteFromObjectByKey(recipes, key) {
  delete recipes.key
  return recipes
}