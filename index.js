var recipes = {};

var updateObjectWithKeyAndValue = function(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}

var destructivelyUpdateObjectWithKeyAndValue = function(object, key, value) {
  object[key] = value
  return object
}

var deleteFromObjectByKey = function(object, key) {
  var foo = object //is this 'worse' than Object.assign({}, object) to clone?
  delete foo.key
  return foo
}

var destructivelyDeleteFromObjectByKey = function(object, key) {
  delete object.key
  return object
}
