var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  object = Object.assign({}, object, { [key]: value })
  return object
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var recipes = Object.assign({}, recipes)
  delete  recipes[key]
  return recipes
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete recipes[key]
  return recipes
}