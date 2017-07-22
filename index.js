var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key, value) {
  var newrecipe = Object.assign({}, object)
  return newrecipe
}

function destructivelyDeleteFromObjectByKey(object, key, value) {
  delete object[key]
  return object
}
