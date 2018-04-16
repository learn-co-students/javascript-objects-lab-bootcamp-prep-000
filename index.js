// Recipe Object
var recipes = {};

// Update object without mutating
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value });
}

// Update object by mutation
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

// Delete key from object without mutation
function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object);
  delete newObj[key];
  return newObj;
}

// Delete key/value pair from object by mutation
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}