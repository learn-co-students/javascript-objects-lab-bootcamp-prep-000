var recipes = {
  ingredient: 'amount'
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var newRecipe = Object.assign({}, recipes)
  delete newRecipe.key
  return newRecipe
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
