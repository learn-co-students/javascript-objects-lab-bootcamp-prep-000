var recipes = new Object()

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  delete object [key]
  return object
}

function deleteFromObjectByKey(object, key) {
  var newobj =  Object.assign({}, object)
  delete newobj [key]
  return newobj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object [key]
  return object
}
