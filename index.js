var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
 var b = Object.assign({},object, {[key]: value})
 return b
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object
}

function deleteFromObjectByKey(object, key) {
  var b = Object.assign({},object);
  delete b[key];
  return b
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object
}