const recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key] : value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var newObject = Object.assign({}, object)
  delete newObject[key]
  
  return newObject
}

function destructivelyDeleteFromObjectByKey(onject, key) {
  delete onject[key]
  return onject
}