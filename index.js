var recipes = {};

var updateObjectWithKeyAndValue = function(object, key, value) {
  var newObject = Object.assign({}, object, {[key]: value});
  return newObject;
}

var destructivelyUpdateObjectWithKeyAndValue = function(object, key, value) {
  return Object.assign(object, {[key]: value});
}

var deleteFromObjectByKey = function(object, key) {
  var newObject = Object.assign({}, object);
  delete newObject[key];
  return newObject;
}

var destructivelyDeleteFromObjectByKey = function(object, key) {
  delete object[key];
  return object;
}
