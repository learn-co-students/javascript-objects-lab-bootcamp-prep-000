var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  //{} new object being populated by existing 'object' + being assigned a new 'key-value' pair
  return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  // Deletes key-value from object and returns modified object
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  //Alternative: const newObject = Object.assign({}, object), delete newObject[key], return newObject
  //Deletes key from a clone of object and returns modified clone
  var newObject = delete object.key;
  return newObject;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  //Alternative: delete object[key], return object
  //Returns modified object after removing key
  return delete object[key];
}