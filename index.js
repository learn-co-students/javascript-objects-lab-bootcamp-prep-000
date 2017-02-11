var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var objectCopy = Object.assign({}, object, { [key]:value})
  return objectCopy
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var objectCopy = Object.assign({}, object)
  delete objectCopy[key]
  return objectCopy
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}