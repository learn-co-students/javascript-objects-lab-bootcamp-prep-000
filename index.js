var recipes = {};

var updateObjectWithKeyAndValue = function(object, key, value) {
  var newObject = Object.assign({ [key]: value }, object);
  return newObject;
}

var destructivelyUpdateObjectWithKeyAndValue = function(object, key, value) {
  object[key] = value;
  return object;
}

var deleteFromObjectByKey = function(object, key) {
  var newObject = Object.assign({} , object);
  delete newObject[key];
  return newObject;
}

var destructivelyDeleteFromObjectByKey = function(object, key) {
  delete object[key];
  return object;
}

