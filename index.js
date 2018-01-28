//define recipes Object
var recipes = {}

//write function that takes object, key, val args and returns obj clone not orig obj
function updateObjectWithKeyAndValue(object, key, value) {
  var newObject = Object.assign({}, object)
  newObject[key] = value
  return newObject
}

//write function that takes object, key, val args and returns destructively modified object
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

//write function that takes object and key args and returns object clone with deleted key
function deleteFromObjectByKey(object, key) {
  var newObject = Object.assign({}, object)
  delete newObject[key]
  return newObject
}

//write function that takes object and key args and returns destructed object with deleted key
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
