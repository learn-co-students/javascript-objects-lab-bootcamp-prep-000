var recipes = {flour: '1 cup'};

var updateObjectWithKeyAndValue = function(object, key, value) {
 return Object.assign({}, object, {[key]:value});
}

var destructivelyUpdateObjectWithKeyAndValue = function(object, key, value) {
 object[key] = value
 return object
}

var deleteFromObjectByKey = function(object, key) {
  var newObject = Object.assign({}, object)
  
  delete newObject[key]
  return newObject
  return object
}

var destructivelyDeleteFromObjectByKey = function(object, key) {
  delete object[key]
  return object
}
