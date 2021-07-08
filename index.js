var recipes = {};

var updateObjectWithKeyAndValue = function(object,key,value) {
  return Object.assign({}, object, { [key]: value })
}

var destructivelyUpdateObjectWithKeyAndValue = function(object, key, value) {
  new Object(object[key]= value);
  return object
}

var deleteFromObjectByKey = function(object, key) {
  var obj = {object: key}
  var newObj = Object.assign({}, obj)
  delete newObj.key
  return obj
}

var destructivelyDeleteFromObjectByKey = function(object, key) {
  delete object[key];
  return object
}
