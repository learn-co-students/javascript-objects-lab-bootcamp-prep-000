var recipes = {}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, { [key]: value })
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

function deleteFromObjectByKey(object, key) {
  var newObject = Object.assign({}, object)
  delete newObject[key]
  return newObject
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}