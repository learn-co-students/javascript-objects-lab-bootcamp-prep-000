var recipes = {}

var updateObjectWithKeyAndValue = function(object, key, value) {
  var new_object = Object.assign({}, object)
  new_object[key] = value
  return new_object
}

var destructivelyUpdateObjectWithKeyAndValue = function(object, key, value) {
  object[key] = value
  return object
}

var deleteFromObjectByKey = function(object, key) {
  var new_object = Object.assign({}, object)
  delete new_object[key]
  return new_object
}

var destructivelyDeleteFromObjectByKey = function(object, key) {
  delete object[key]
  return object
}