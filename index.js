var recipes = {milk: "4 cups"}

var updateObjectWithKeyAndValue = function(obj, key, value) {
  var object1 = Object.assign({}, obj, {[key]: value})
  return object1
}

var destructivelyUpdateObjectWithKeyAndValue = function(obj, key, value) {
  obj[key] = value
  return obj
}

var deleteFromObjectByKey = function (obj, key) {
  var object2 = Object.assign({}, obj)

  delete object2[key]
  return object2
}

var destructivelyDeleteFromObjectByKey = function(obj, key) {
  delete obj[key]
  return obj
}
