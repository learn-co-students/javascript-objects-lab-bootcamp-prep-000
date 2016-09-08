var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var toDelete = Object.assign({}, object)
  delete toDelete.key
  return toDelete
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key
  return object
}
