var recipes = Object.assign({eggs: 3})

var updateObjectWithKeyAndValue = function(object, key, value) { 
  return Object.assign({}, object, {[key]: value} )
}

var destructivelyUpdateObjectWithKeyAndValue = function(object, key, value) {
  object[key] = value
  return object
}

var deleteFromObjectByKey = function(object, key) {
  var object2 = Object.assign({}, object)
  delete object2[key]
  return object2
}

var destructivelyDeleteFromObjectByKey = function(object, key) {
  delete object[key]
  return object
}