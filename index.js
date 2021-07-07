var recipes = {};
// returns an object with the orignal key value pairs and the new key value pair
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

// 1) returns object without the delete key/value pair
// 2) modifies the original object
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

// deletes `key` from a clone of object and returns the new object (it is non-destructive)
function deleteFromObjectByKey(object, key) {
  var clonedObject = Object.assign({}, object);
  delete clonedObject[key];
  return clonedObject;
}

// 1) returns object without the delete key/value pair
// 2) modifies the original object
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
