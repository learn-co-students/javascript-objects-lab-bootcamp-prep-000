var recipes = {}

function updateObjectWithKeyAndValue(obj, key, val) {
  var recipesCopy = Object.assign({}, obj)
  recipesCopy[key]=val
  return recipesCopy
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, val) {
  obj[key]=val
  return obj
}

function deleteFromObjectByKey(obj, key) {
  var recipesCopy = Object.assign({}, obj)
  delete recipesCopy[key]
  return recipesCopy
}

function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key]
  return obj
}
