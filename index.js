// Objects defines a `recipes` object:

var recipes = {};

// Objects updateObjectWithKeyAndValue(object, key, value) returns an object with the orignal key value pairs and the new key value pair:

function updateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

// Objects updateObjectWithKeyAndValue(object, key, value) it does not modifythe original object, but rather returns a clone with the new data:

function updateObjectWithKeyAndValue(obj, key, value) {
  var updatedObject = Object.assign({}, obj, {[key]: value});
  return updatedObject;
}

// Objects destructivelyUpdateObjectWithKeyAndValue(object, key, value) updates `object` with the given `key` and `value` (it is destructive) and returns the entire updated object:

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

// Objects deleteFromObjectByKey(object, key) deletes `key` from a clone of object and returns the new object (it is non-destructive):

function deleteFromObjectByKey(obj, key) {
  var newObj = Object.assign({}, obj);
  delete newObj[key];
  return newObj;
}

// Objects destructivelyDeleteFromObjectByKey(object, key) returns object without the delete key/value pair:

function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key];
  return obj;
}