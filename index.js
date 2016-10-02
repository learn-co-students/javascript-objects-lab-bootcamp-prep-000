

var recipes = new Object();

var updateObjectWithKeyAndValue = function (object, key, value) {
  return Object.assign({}, object, {[key]: value})
}

var destructivelyUpdateObjectWithKeyAndValue = function (object, key, value) {
  return Object.assign(object, {[key]: value})
}

var deleteFromObjectByKey = function (object, key) {
  var copy = Object.assign({}, object)
  delete copy[key]
  return copy
}

var destructivelyDeleteFromObjectByKey = function (object, key) {
  delete object[key]
  return object
}
