var recipes = {}

function updateObjectWithKeyAndValue(recipe, key, value) {
  recipe[key] = value
  return recipe
}

function updateObjectWithKeyAndValue(recipe, key, value) {
  return Object.assign({}, recipe, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(recipe, key, value) {
  recipe[key] = value
  return recipe
}

function deleteFromObjectByKey(recipe, key) {
  var newRecipe = Object.assign({}, recipe)
  delete newRecipe[key]
  return newRecipe
}

function destructivelyDeleteFromObjectByKey(recipe, key) {
  delete recipe[key]
  return recipe
}








