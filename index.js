// define 'recipes' object
var recipes = {};

// returns a clone of 'object' by adding 'key' and 'value' (non-destructive)
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value});
}

// updates 'object' with the given 'key and 'value' (destructive)
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

// deletes 'key' from a clone of object and returns the new object (non-destructive)
function deleteFromObjectByKey(object, key) {
  var objClone = Object.assign({}, object);
  delete objClone.key;
  return objClone;
}

// deletes 'key' from object and returns object
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key;
  return object;
}
