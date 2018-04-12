var recipes = {}

var updateObjectWithKeyAndValue = function(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}

var destructivelyUpdateObjectWithKeyAndValue = function(object, key, value) {
  return Object.assign(object, {[key]: value})
}

var deleteFromObjectByKey = function(object, key) {
  var obj = {}
  Object.assign(obj, object)
  return delete obj[key]
}

var destructivelyDeleteFromObjectByKey = function(object, key) {
  delete object[key]
}

var destructivelyDeleteFromObjectByKey = function(object, key) {
  return delete object[key]
}
