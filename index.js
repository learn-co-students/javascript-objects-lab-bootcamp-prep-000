var recipes = { pie: "2 eggs"}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var newRecipe = Object.assign({}, recipes)
  delete newRecipe[key]
  return recipes
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
