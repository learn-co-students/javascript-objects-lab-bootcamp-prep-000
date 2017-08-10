var recipes = {}

function updateObjectWithKeyAndValue(recipes, key, value) {
  var poop = Object.assign({}, recipes, {[key]: value})
  return poop
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  recipes[key] = value
  return recipes
}

function deleteFromObjectByKey(recipes, key) {
  var poop = {}
  Object.assign({}, recipes, poop)
  delete poop.key
  return poop
}

function destructivelyDeleteFromObjectByKey(recipes, key) {
  delete recipes[key]
  return recipes
}
