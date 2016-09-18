// define "recipes" object
var recipes = {};

// return clone of object with updates
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}

// destructively update object
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

// delete key from clone of object
function deleteFromObjectByKey(object, key) {
  return Object.assign({}, object,)
  delete clone[key]
  return clone
}

// destructively delete key from object
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
